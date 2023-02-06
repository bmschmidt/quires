import { promisify } from 'util';
import { exec as raw_exec } from 'child_process';
import { promises as fs } from 'fs';
import yaml from 'js-yaml';

const exec = promisify(raw_exec);

export async function json2html(document: object) {
	/* 
	Transform pandoc-json formatted json to HTML by piping it through the 

	*/

	return new Promise((resolve, reject) => {
		const child = raw_exec('pandoc -f json -t html');
		child.stdin?.write(JSON.stringify(document) + '\n');
		child.stdin?.end();
		let response = '';

		// listen on child process stdout
		child.stdout?.on('data', (chunk) => {
			response += chunk;
		});
		child.stderr?.on('data', (chunk) => {
			console.error(chunk);
		});

		child.on('close', (code) => {
			if (code != 0) {
				reject();
			} else {
				resolve(response);
			}
		});
	});
}

/**
 *
 * @param array A list of pandoc elements.
 * @returns The list with strings collapsed to not be separated by spaces.
 *          This greatly reduces the number of elements necessary to parse.
 *          Pandoc maintainer JGM himself [would like](https://github.com/jgm/pandoc/issues/7579)
 *          to implement this there, but it's dangerous for compatibility/filters.
 */
function fold_spaces(array) {
	if (array.indexOf(null) >= -1) {
		return array;
	}
	const r = array.reduceRight((accumulator, one_before) => {
		const [first, ...rest] = accumulator;
		if (one_before.t === 'Space' || one_before.t === 'SoftBreak') {
			one_before = { t: 'Str', c: ' ' };
		}
		if (first && first.t === 'Str' && one_before.t === 'Str') {
			return [{ t: 'Str', c: one_before.c + first.c }, ...rest];
		} else {
			const collapsed = collapse_spaces(one_before);
			return [collapsed, first, ...rest];
		}
	}, []);
	return r.filter((d) => d !== undefined);
}

function collapse_spaces(ast) {
	if (Array.isArray(ast)) {
		return fold_spaces(ast);
	}
	if (typeof ast !== 'object') {
		console.log('halting');
		return ast;
	}

	const output = {};
	// eslint-disable-next-line prefer-const
	for (let [k, v] of Object.entries(ast)) {
		if (Array.isArray(v)) {
			v = fold_spaces(v);
		} else if (typeof v !== 'object') {
			//pass
		} else {
			v = collapse_spaces(v);
		}
		output[k] = v;
	}
	return output;
}

async function parse_path(path) {
	const command = `pandoc -t json ${path} -f markdown+footnotes`;
	const { stdout } = await exec(command);
	return collapse_spaces(JSON.parse(stdout));
}

async function get_html(path) {
	const command = `pandoc -t html ${path}`;
	const { stdout } = await exec(command);
	return stdout;
}

async function yaml_metadata(path): Promise<Record<string, any>> {
	const raw = await fs.readFile(path, 'utf-8');
	const has_metadata = raw.slice(0, 4) === '---\n';
	if (!has_metadata) {
		return {};
	}
	const candidate1 = raw.slice(4).split('---')[0];
	// Rarely, three dots are used as an end delimiter.
	const candidate2 = raw.slice(4).split('...')[0];
	let candidate: string;
	if (candidate2.length < candidate1.length) {
		candidate = candidate2;
	} else {
		candidate = candidate1;
	}
	console.log('FOOOOO');
	console.log({ candidate: candidate.length, r: raw.length });
	if (candidate === undefined || candidate.length >= raw.length - 5) {
		return {};
	}
	return {};
	const attributes = yaml.load(candidate);
	return attributes || {};
}

export async function html(path, cache_loc = './cache') {
	let cache_path;
	if (cache_loc) {
		cache_path = `${cache_loc}/${path.replaceAll('/', '--')}.html`;
		let mtime = new Date(0);
		await fs
			.stat(cache_path)
			.then((d) => (mtime = d.mtime))
			.catch(() => ({}));

		const doctime = await fs.stat(path).then((d) => d.mtime);
		if (mtime > doctime) {
			const f = await fs.readFile(cache_path, 'utf-8');
			return f;
		}
	}
	const value = await get_html(path);
	if (cache_loc) {
		await fs.writeFile(cache_path, value);
	}
	return value;
}

export async function json_with_meta(path: string, cache_loc = './cache') {
	// Create a cache if none exists.
	let cache_path;
	if (cache_loc) {
		await fs.mkdir(cache_loc).catch((err) => {
			if (err.code !== 'EEXIST') {
				throw err;
			}
		});
		cache_path = `${cache_loc}/${path.replaceAll('/', '--')}.json`;
		let mtime = new Date(0);
		await fs
			.stat(cache_path)
			.then((d) => (mtime = d.mtime))
			.catch(() => ({}));

		const doctime = await fs.stat(path).then((d) => d.mtime);
		if (mtime > doctime) {
			const f = await fs.readFile(cache_path, 'utf-8');
			return JSON.parse(f);
		}
	}
	const pandocced = parse_path(path);
	const metadata = await yaml_metadata(path);
	const value = await Promise.all([pandocced, metadata]).then(([document, metadata]) => ({
		metadata,
		document
	}));
	if (cache_loc) {
		await fs.writeFile(cache_path, JSON.stringify(value, undefined, 2));
	}
	return value;
}

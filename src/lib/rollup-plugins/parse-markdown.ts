
import { promises as fs } from 'fs';
import { parse } from '@djot/djot';
import yaml from 'js-yaml';
import type { Block, Doc, Inline } from '$lib/types/ast.d.ts';
import type { QuireOverride } from '$lib/types/quire';


export function createQuireDocument(document : Doc, metadata : Record<string, any>) : Quire<Doc> {
  return {
		quireComponents: [] as QuireOverride<Block | Inline>[],
		metadata: metadata || {},
		custom: {},
    content: document,
		footnotes: {},
		references: {},
		classes: [],
  }
}

async function yaml_metadata_with_contents(path: string): Promise<[Record<string, any>, string]> {
	const raw = await fs.readFile(path, 'utf-8');
	const has_metadata = raw.slice(0, 4) === '---\n';
	if (!has_metadata) {
		return [{}, raw];
	}
	const candidate1 = raw.slice(4).split('---')[0];
	// Rarely, three dots are used as an end delimiter.
	const candidate2 = raw.slice(4).split('...')[0];
	let candidate: string;
	let remainder: string;
	if (candidate2.length < candidate1.length) {
		candidate = candidate2;
		remainder = raw.slice(4).split('...').slice(1).join('...');
	} else {
		candidate = candidate1;
		remainder = raw.slice(4).split('---').slice(1).join('---');
	}
	if (candidate === undefined || candidate.length >= raw.length - 5) {
		return [{}, raw];
	}
	const attributes = yaml.load(candidate) as Record<string, any>;
	return [attributes, remainder] || [{}, remainder]
}

export async function loadQuire(path: string, pandoc: boolean | undefined, cache_loc = undefined) : Promise<Quire<Doc>> {
	// Create a cache if none exists.
	if (cache_loc) {
		throw new Error("Caching is not yet implemented.");
	}
	
	let cache_path : string | null = null;
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
			.then((d : fs.Stats) => (mtime = d.mtime))
			.catch(() => ({}));

		const doctime = await fs.stat(path).then((d : fs.Stats) => d.mtime);
		if (mtime > doctime) {
			const f = await fs.readFile(cache_path, 'utf-8');
			return JSON.parse(f);
		}
	}

	const [metadata, raw] = await yaml_metadata_with_contents(path);
	const content = parse(raw, { sourcePositions: false });

	const value = {
		metadata,
		content
	};

	if (cache_path) {
		await fs.writeFile(cache_path, JSON.stringify(value, undefined, 2));
	}
	const quire = createQuireDocument(content, metadata);
	return quire;
}
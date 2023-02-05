import { json_with_meta } from './run-pandoc';

const fileRegex = /\.md$/;
/*
	Reads Markdown files by wrapping them as a big variable you can import.
*/

export default function pandoc_plugin(options) {
	const { cache_loc } = options;
	return {
		name: 'pandoc',
		async transform(src, id) {
			if (fileRegex.test(id)) {
				const data = await json_with_meta(id);
				return {
					code: `export default ${JSON.stringify(data)};`,
					map: { mappings: '' }
				};
			}
		}
	};
}

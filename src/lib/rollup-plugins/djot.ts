import { loadQuire } from './parse-markdown.js';

const fileRegex = /\.(md|dj|djot)$/;

type DjotOptions = {
	pandoc?: boolean;
}

/**
 * A Rollup plugin for transforming source code using the djot pattern.
 * @param {Object} options - The options for the plugin.
 * @returns {import('vite').PluginOption} - The Rollup plugin object.
 */
export default function quire_plugin(options: DjotOptions) {
	return {
		name: 'quire-plugin',
		async transform(src : string, id: string) {
			if (fileRegex.test(id)) {
				const data = await loadQuire(id, options.pandoc);
				return {
					code: `export default ${JSON.stringify(data)};`,
					map: { mappings: '' }
				};
			}
		}
	};
}

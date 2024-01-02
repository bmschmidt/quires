import { loadQuire } from './parse-markdown';

const fileRegex = /\.(md|dj|djot)$/;

/**
 * A Rollup plugin for transforming source code using the djot pattern.
 * @param {Object} options - The options for the plugin.
 * @returns {import('vite').PluginOption} - The Rollup plugin object.
 */
export default function djot_plugin(options) {
	return {
		name: 'quire-plugin',
		async transform(src, id) {
			if (fileRegex.test(id)) {
				const data = await loadQuire(id);
				return {
					code: `export default ${JSON.stringify(data)};`,
					map: { mappings: '' }
				};
			}
		}
	};
}

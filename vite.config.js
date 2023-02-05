import { sveltekit } from '@sveltejs/kit/vite';
import pandoc_plugin from './src/lib/rollup-plugins/pandoc.js';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [pandoc_plugin({ cache_loc: '.cache' }), sveltekit()]
};

export default config;

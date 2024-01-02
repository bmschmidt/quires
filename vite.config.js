import { sveltekit } from '@sveltejs/kit/vite';
import djot_plugin from './src/lib/rollup-plugins/djot.js';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [djot_plugin({}), sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
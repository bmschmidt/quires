import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import djot_plugin from './src/lib/rollup-plugins/djot';

export default defineConfig({
	// @ts-ignore Just for now.
	plugins: [djot_plugin({pandoc: false}), sveltekit()]
});

import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import quire_plugin from './src/lib/rollup-plugins/djot';

export default defineConfig({
	// @ts-ignore Just for now.
	plugins: [quire_plugin({pandoc: false}), sveltekit()]
});

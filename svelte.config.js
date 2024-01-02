import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		paths: {
			base: '/quires'
		},
		adapter: adapter({
			pages: 'docs'
		}),
		prerender: {
			concurrency: 1,
			crawl: true,
			entries: ['*'],
			handleHttpError: 'fail',
			handleMissingId: 'warn'
		}
	}
};

export default config;

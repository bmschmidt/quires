import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		paths: {
			base: '/pandoc-svelte-components',
		},
		adapter: adapter({
			pages: 'docs',
		}),
		prerender: {
      concurrency: 1,
      crawl: true,
      entries: ['*'],
      handleHttpError: 'fail',
      handleMissingId: 'warn',
    },
	}
};

export default config;

import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		},
		vite: {
			resolve: {
				alias: {
					$lib: path.resolve('./src/lib'),
					$stores: path.resolve('./src/stores'),
					$utils: path.resolve('./src/utils'),
					$assets: path.resolve('./src/assets'),
					$constants: path.resolve('./src/constants'),
					$models: path.resolve('./src/models')
				}
			}
		}
	}
};

export default config;
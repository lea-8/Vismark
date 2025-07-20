import { mdsvex } from 'mdsvex';
// import sveltePreprocess from 'svelte-preprocess';

/**
 * A helper to set up mdsvex + Svelte preprocessing.
 * Optionally takes mdsvex options.
 */
export function vismarkMdsvex(baseConfig = {}, mdsvexOptions = {}) {
  return {
    ...baseConfig,
    extensions: ['.svelte','.vismd'],
    preprocess: [
      mdsvex({
        extensions: ['.vismd'], 
        ...mdsvexOptions })
    ],
    // ...baseConfig,
  };
}
import { mdsvex } from 'mdsvex';
import remarkFootnotes from 'remark-footnotes';

/**
 * A helper to set up mdsvex + Svelte preprocessing.
 * Optionally takes mdsvex options.
 */
export function vismarkConfig(baseConfig = {}, mdsvexOptions = {}) {
  return {
    ...baseConfig,
    extensions: ['.svelte','.vismd'],
    preprocess: [
      mdsvex({
        extensions: ['.vismd'],
        remarkPlugins: [remarkFootnotes],
        ...mdsvexOptions 
      })
    ],
    // ...baseConfig,
  };
}
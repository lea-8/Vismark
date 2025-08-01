import { mdsvex } from 'mdsvex';

// plugins:
import remarkFootnotes from 'remark-footnotes';
import math from 'remark-math'
import rehype_katex from 'rehype-katex';
import { katex_blocks, correct_hast_tree } from './plugins/maths.js';

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
        remarkPlugins: [remarkFootnotes, math, katex_blocks],
        rehypePlugins: [correct_hast_tree, rehype_katex],    
        ...mdsvexOptions 
      })
    ],
    // ...baseConfig,
  };
}
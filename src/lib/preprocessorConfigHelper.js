import { mdsvex } from 'mdsvex'; // main compiler

import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// plugins:
import remarkFootnotes from 'remark-footnotes';
import math from 'remark-math';
import rehype_katex from 'rehype-katex';
import { katex_blocks, correct_hast_tree } from './plugins/maths.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const default_layout_path = join(__dirname, './styles/default_layout.svelte');

/**
 * A helper to set up mdsvex + Svelte preprocessing.
 * Optionally takes mdsvex options.
 * @param baseConfig - The existing Svelte configuration for the project
 * @param mdsvexOptions - User-defined Mdsvex options
 */
export function vismarkConfig(baseConfig = {}, mdsvexOptions = {}) {
	return {
		...baseConfig,
		extensions: ['.svelte', '.vismd'],
		preprocess: [
			mdsvex({
				extensions: ['.vismd'],
				remarkPlugins: [remarkFootnotes, math, katex_blocks],
				rehypePlugins: [correct_hast_tree, rehype_katex],
				layout: {
					_: default_layout_path
				},
				...mdsvexOptions
			})
		]
	};
}

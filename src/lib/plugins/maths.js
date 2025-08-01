import katex from 'katex';
import visit from 'unist-util-visit';

export const correct_hast_tree = () => (tree) => {
	visit(tree, 'text', (node) => {
		if (node.value.trim().startsWith('<')) {
			node.type = 'raw';
		}
	});
};

export const katex_blocks = () => (tree) => {
	visit(tree, 'code', (node) => {
		if (node.lang === 'math') {
			const str = katex.renderToString(node.value, {
				displayMode: true,
				leqno: false,
				fleqn: true,
				throwOnError: true,
				errorColor: '#cc0000',
				strict: 'warn',
				output: 'htmlAndMathml',
				trust: false,
				macros: { 
          '\\f': '#1f(#2)',
          '\\CC': '\\mathbb{C}',
					'\\vec': '\\mathbf'
        }
			});

			node.type = 'raw';
			node.value = '{@html `' + str + '`}';
		}
	});
};

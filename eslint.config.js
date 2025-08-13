import prettier from 'eslint-config-prettier';
import svelte from 'eslint-plugin-svelte';
import js from '@eslint/js';
import globals from 'globals';
import json from '@eslint/json';
import markdown from '@eslint/markdown';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig(
	[
		globalIgnores([
			'!node_modules/', // unignore `node_modules/` directory
			'node_modules/*', // ignore its content
			'!node_modules/mylibrary/', // unignore `node_modules/mylibrary` directory
			'.svelte-kit/*',
			'src/lib/styles/*'
		]),
		{
			files: ['src/lib/*.{js,mjs,cjs}'],
			plugins: { js },
			extends: ['js/recommended'],
			languageOptions: { globals: globals.browser },
			ignores: ['src/lib/styles/**']
		},
		{
			files: ['package.json'],
			plugins: { json },
			language: 'json/json',
			extends: ['json/recommended']
		},
		{
			files: ['**/*.{md, vismd}'],
			plugins: { markdown },
			language: 'markdown/commonmark',
			extends: ['markdown/recommended'],
			rules: { 'markdown/no-missing-label-refs': 'warn' }
		}
	],
	prettier,
	...svelte.configs.prettier
);

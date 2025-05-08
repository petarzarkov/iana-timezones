// @ts-check
import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

const config = tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  eslintConfigPrettier,
);

export default [
  {
    ignores: ['**/*.js', '**/*.d.ts', 'node_modules', 'build', 'tests', '**/*.md', '**/*.json', 'dist'],
  },
  ...config,
  {
    // Configure your own custom eslint rules here
    rules: {
      'max-len': ['warn', 150],
    },
  },
];

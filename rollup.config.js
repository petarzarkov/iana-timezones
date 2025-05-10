import typescript from '@rollup/plugin-typescript';

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
  input: 'index.ts',
  output: [
    {
      dir: 'dist',
      format: 'cjs',
      entryFileNames: 'cjs/index.js',
      chunkFileNames: '[name].js',
      manualChunks: {
        timezones: ['timezones.ts'],
      },
    },
    {
      dir: 'dist',
      format: 'es',
      entryFileNames: 'esm/index.js',
      chunkFileNames: '[name].js',
      manualChunks: {
        timezones: ['timezones.ts'],
      },
    },
  ],
  plugins: [
    typescript({
      tsconfig: './tsconfig.build.json',
      declarationDir: 'dist/types',
    }),
  ],
};

import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

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
      plugins: [terser()],
    },
    {
      dir: 'dist',
      format: 'es',
      entryFileNames: 'esm/index.js',
      chunkFileNames: '[name].js',
      manualChunks: {
        timezones: ['timezones.ts'],
      },
      plugins: [terser()],
    },
  ],
  plugins: [
    typescript({
      tsconfig: './tsconfig.build.json',
      declarationDir: 'dist/types',
    }),
  ],
};

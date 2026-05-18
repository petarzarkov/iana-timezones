import { writeFileSync } from 'node:fs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

// Each format gets a {"type": "..."} marker so Node and bundlers ignore the
// top-level "type": "module" when resolving the wrong-format subtree.
const writeTypeMarker = (subdir, type) => ({
  name: 'write-type-marker',
  writeBundle() {
    writeFileSync(`dist/${subdir}/package.json`, `{"type":"${type}"}\n`);
  },
});

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
  input: 'index.ts',
  output: [
    {
      dir: 'dist',
      format: 'cjs',
      exports: 'named',
      entryFileNames: 'cjs/index.js',
      chunkFileNames: 'cjs/[name].js',
      manualChunks: {
        timezones: ['timezones.ts'],
      },
      plugins: [terser(), writeTypeMarker('cjs', 'commonjs')],
    },
    {
      dir: 'dist',
      format: 'es',
      entryFileNames: 'esm/index.js',
      chunkFileNames: 'esm/[name].js',
      manualChunks: {
        timezones: ['timezones.ts'],
      },
      plugins: [terser(), writeTypeMarker('esm', 'module')],
    },
  ],
  plugins: [
    typescript({
      tsconfig: './tsconfig.build.json',
      declarationDir: 'dist/types',
    }),
  ],
};

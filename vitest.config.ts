import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      thresholds: {
        lines: 100,
        branches: 100,
        functions: 100,
        statements: 100,
      },
      provider: 'v8',
      include: ['index.ts', 'timezones.ts'],
      reportOnFailure: true,
    },
  },
});

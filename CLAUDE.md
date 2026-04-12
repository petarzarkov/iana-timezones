# CLAUDE.md — iana-timezones

Auto-generated IANA timezone data with rich metadata, no dependencies, full TypeScript support, and Node/browser compatibility.

## Package Manager

This project uses **bun** (v1.3.12+) exclusively. Do not use npm, pnpm, or yarn.

```bash
bun install
```

## Scripts

| Command              | Description                                                                               |
| -------------------- | ----------------------------------------------------------------------------------------- |
| `bun run build`      | Compile the library (CJS + ESM + types via rollup)                                        |
| `bun run typecheck`  | Run TypeScript type checking without emitting                                             |
| `bun run lint`       | Lint `src/` with oxlint                                                                   |
| `bun run format`     | Format all files with oxfmt                                                               |
| `bun run test`       | Run tests with vitest                                                                     |
| `bun run test:cov`   | Run tests with coverage report                                                            |
| `bun run test:dev`   | Run vitest in watch mode                                                                  |
| `bun run generate`   | Fetch latest IANA data and regenerate `timezones.ts` / `timezones.json` (requires `.env`) |
| `bun run versioning` | Bump version and publish (requires `.env` and CI context)                                 |

## Project Structure

```
index.ts               # Library entry point
timezones.ts           # Auto-generated timezone data (do not edit manually)
timezones.json         # Auto-generated raw JSON (do not edit manually)
src/
  generateTimezones.ts # IANA data fetch + generation pipeline
  generateTimezonesReadme.ts
  prependReadme.ts
  types.ts
  version.ts
  helpers/             # Data fetching and parsing
  utils/               # Shared utilities (logger, deepSort, emitTzModule, etc.)
tests/
  index.test.ts
dist/                  # Build output (gitignored)
  cjs/index.js         # CommonJS build
  esm/index.js         # ESM build
  types/index.d.ts     # TypeScript declarations
```

## Build System

Rollup is used for bundling (configured in `rollup.config.js`). It produces:

- `dist/cjs/index.js` — CommonJS
- `dist/esm/index.js` — ESM
- `dist/types/index.d.ts` — TypeScript declarations

TypeScript is compiled via `@rollup/plugin-typescript` using `tsconfig.build.json`.

## Linting & Formatting

- **oxlint** — linter, configured in `.oxlintrc.json`
- **oxfmt** — formatter, configured in `.oxfmtrc.json` (printWidth: 120, singleQuote: true)
- **lint-staged** + **husky** — runs oxlint and oxfmt on staged files before every commit

## Testing

Tests use **vitest** with v8 coverage. Config in `vitest.config.ts`. Coverage output goes to `./coverage`.

## Data Generation

Run `bun run generate` with a `.env` file to fetch the latest IANA timezone database and regenerate:

- `timezones.ts` — typed TypeScript module
- `timezones.json` — raw JSON

These files are auto-generated — do not edit them manually.

## CI

GitHub Actions runs on push to `main` and on a weekly schedule. See `.github/workflows/build.yml`.
The CI pipeline: typecheck → lint → test (with coverage) → version → build → publish to npm.

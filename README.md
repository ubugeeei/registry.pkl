# registry.pkl

This repository contains the design and documentation for `registry.pkl`, a
searchable, versioned, GitHub PR-based registry for Pkl config packages.

The first-party package family is planned as `target.*`.

Examples:

- `target.js`
- `target.env`
- `target.rust`
- `target.editor`
- `target.agent`
- `target.ci`

## Core Idea

Author config in Pkl, generate normal config files for existing tools, and use a
registry to discover reviewed package versions.

The registry should not need a custom publish API.

Instead:

1. package authors publish package artifacts and docs over HTTPS
2. authors open a GitHub Pull Request with a registry record
3. CI validates semver, links, targets, and metadata
4. merge updates search and package pages

## Important Constraint

Pkl has standard renderers for JSON and YAML, and the official pantry ships a
TOML renderer package as `pkl.toml`.

That means:

- JSON and YAML targets can lean on normal Pkl renderers
- TOML targets should converge on a shared renderer dependency instead of
  ad-hoc emitters in every package
- custom emitters remain a fallback when a target needs output shaping the
  shared renderer cannot express

## Layout

- workspace root: `package.pkl`, `package.json`, `.mise.toml`
- TypeScript docs package: `packages/docs`
- docs content: `packages/docs/content`
- static assets: `packages/docs/public`

## Docs

The public docs source lives under `packages/docs/content/` and is built with
`ox-content`.

Useful entry points:

- `packages/docs/content/index.md`
- `packages/docs/content/start/getting-started.md`
- `packages/docs/content/guide/distribution.md`
- `packages/docs/content/guide/release-playbook.md`
- `packages/docs/content/guide/registry-flow.md`
- `packages/docs/content/targets/agents.md`
- `packages/docs/content/architecture/index.md`

## Development

The source of truth for workspace manifests is Pkl.

- root workspace manifest: `package.pkl`
- root oxfmt manifest: `.oxfmt.pkl`
- root pnpm workspace manifest: `pnpm-workspace.pkl`
- root mise manifest: `mise.pkl`
- root multi-file generator: `root-files.pkl`
- docs package manifest: `packages/docs/package.pkl`

The checked-in `package.json` files should be treated as generated output.
Likewise, `.oxfmtrc.json`, `pnpm-workspace.yaml`, and `.mise.toml` are
generated outputs.

These ecosystem-native files are gitignored. Keep the `.pkl` files as the only
source of truth.

Bootstrap generated files:

```bash
pkl eval -m . root-files.pkl
```

Install dependencies:

```bash
npx pnpm install
```

Run the docs site:

```bash
mise run dev
```

Build the docs site:

```bash
mise run build
```

Build first-party package artifacts:

```bash
./scripts/package-artifacts.sh
./scripts/build-publish-layout.sh
./scripts/sync-publish-layout.sh
```

For actual release hosting, set:

- `PACKAGE_HOST`
- `PACKAGE_BASE_URL`
- `PACKAGE_BASE_PATH` when the host uses a path prefix
- `PACKAGE_BUCKET`
- `PACKAGE_S3_ENDPOINT`
- `PACKAGE_AWS_REGION` when needed by the storage provider

If you change `.oxfmt.pkl`, `package.pkl`, `pnpm-workspace.pkl`, `mise.pkl`, or
`packages/docs/package.pkl`, re-run:

```bash
mise run gen
```

## Implementation Direction

When this project needs actual programs, prefer Rust.

Expected Rust responsibilities:

- registry validation
- search indexing
- metadata normalization
- shared TOML helpers when renderer wrappers or converters are justified

Pkl integration should use `pklrust`.

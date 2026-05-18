# registry.pkl

This repository contains the design and documentation for `registry.pkl`, a
searchable, versioned, GitHub PR-based registry for Pkl config packages.

The first-party package family is planned as `target.*`. Package catalog pages
and import examples are planned or experimental until hosted package artifacts
are live.

Examples:

- `target.js`
- `target.env`
- `target.rust`
- `target.editor`
- `target.agent`
- `target.ci`

## Repository Identity

The canonical GitHub repository is `ubugeeei/registry.pkl`:

- SSH: `git@github.com:ubugeeei/registry.pkl.git`
- HTTPS: `https://github.com/ubugeeei/registry.pkl.git`

If an older checkout still points at `ubugeeei/compat.pkl`, update it once:

```bash
git remote -v
git remote set-url origin git@github.com:ubugeeei/registry.pkl.git
# or:
git remote set-url origin https://github.com/ubugeeei/registry.pkl.git
```

Generated package metadata and public docs should use canonical
`ubugeeei/registry.pkl` URLs instead of relying on repository rename redirects.

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
mise install
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

Build first-party package artifacts for local rehearsal:

```bash
mise install
./scripts/package-artifacts.sh
# or target a subset
./scripts/package-artifacts.sh packages/target.js packages/target.rust
./scripts/build-publish-layout.sh
```

The artifact and publish-layout scripts clear their default output directories
before rebuilding, so local rehearsals cannot accidentally reuse stale package
files. Set `KEEP_PACKAGE_OUTPUT=1` or `KEEP_PUBLISH_DIR=1` only when you are
intentionally inspecting a previous default output directory.

The default package host is `pkg.example.invalid`, which is a neutral placeholder
for local package builds. Do not treat it as a live service.

For actual release hosting, configure the `package-release` GitHub environment
before adding publish credentials. Recommended protection:

- require maintainer review before deployment
- prevent self-review where the repository plan supports it
- restrict deployments to `main` and release tags matching `target.*-v*`
- store publish credentials as environment secrets rather than broad repository
  secrets when practical

Required release variables:

| Name | Required | Purpose |
| --- | --- | --- |
| `PACKAGE_HOST` | yes | Host portion used in `package://` package base URIs. |
| `PACKAGE_BASE_URL` | yes | HTTPS origin that corresponds to the package host and optional path prefix. |
| `PACKAGE_BASE_PATH` | no | Path prefix for hosts that publish below a subdirectory. |
| `PACKAGE_BUCKET` | yes | S3-compatible bucket that stores immutable package metadata and ZIPs. |
| `PACKAGE_S3_ENDPOINT` | yes | S3-compatible endpoint for the package bucket. |
| `PACKAGE_AWS_REGION` | no | Region for the storage provider; defaults to `auto` in the workflow. |

Required release secrets:

- `PACKAGE_AWS_ACCESS_KEY_ID`
- `PACKAGE_AWS_SECRET_ACCESS_KEY`

`./scripts/sync-publish-layout.sh` uploads only new objects, skips identical
existing files, and refuses to overwrite different contents. If you use
`PACKAGE_BASE_PATH`, the uploader publishes into that same object-key prefix.

The `Release Packages` workflow can publish one package per tag using
`target.js-v0.1.0`, and manual runs accept a `projects` input when you want to
release a subset without tagging first. Manual workflow dispatch is a real
publish once the package host variables and secrets exist.

Use the dry-run checklist in
`packages/docs/content/guide/release-playbook.md` before enabling real package
host sync.

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

## License

This repository is licensed under the Apache License 2.0.

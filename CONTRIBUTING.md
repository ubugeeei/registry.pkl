# Contributing

This repository is currently a design and pre-implementation workspace for
`registry.pkl` and the first-party `target.*` Pkl package family. Contributions
should keep that status clear: planned package APIs are welcome, but docs and
metadata must not imply that hosted package artifacts are live before they are.

## Canonical Repository

The canonical GitHub repository is
`https://github.com/ubugeeei/registry.pkl`.

Fresh clones should use one of these remotes:

```bash
git clone git@github.com:ubugeeei/registry.pkl.git
git clone https://github.com/ubugeeei/registry.pkl.git
```

If an older checkout still points at `ubugeeei/compat.pkl`, update it once:

```bash
git remote -v
git remote set-url origin git@github.com:ubugeeei/registry.pkl.git
# or, for HTTPS:
git remote set-url origin https://github.com/ubugeeei/registry.pkl.git
```

GitHub may redirect renamed repositories, but release docs, generated metadata,
and automation should use `ubugeeei/registry.pkl` directly.

## Package Changes

Package source lives in `packages/target.*`. Keep changes scoped to the package
that owns the downstream config surface.

When changing first-party package APIs:

- keep imports pinned to concrete versions in examples
- update package API tests or fixtures when behavior changes
- run `pkl project resolve . packages/target.*` when package dependencies or
  versions change
- include updated `PklProject.deps.json` files when dependency metadata changes
- build package artifacts locally before proposing release-facing changes

Until hosted artifacts are live, public docs should call package APIs planned or
experimental. Use neutral host placeholders such as `pkg.example.invalid` or
`<your-package-host>` in examples unless a real host has been provisioned.

## Generated Files

The Pkl files are the source of truth for workspace manifests.

Run this after changing root or docs package manifests:

```bash
pkl eval -m . root-files.pkl
```

Generated ecosystem files such as `package.json`, `.mise.toml`,
`pnpm-workspace.yaml`, and `.oxfmtrc.json` are intentionally not the authoring
surface.

## Release-Risk Checks

Treat package publication as higher risk than docs publication.

Before release-facing changes are merged, check that:

- package versions and example imports are explicit semver releases
- package metadata uses canonical `ubugeeei/registry.pkl` source URLs
- package URI examples do not point at an unprovisioned real-looking host
- `dist/publish/` was built in a dry-run rehearsal
- release credentials are expected to live behind the `package-release`
  GitHub environment
- no workflow or script path can overwrite an existing package object with
  different bytes

The concrete release setup, dry-run checklist, and required variables are in
`packages/docs/content/guide/release-playbook.md`.

## Review Ownership

First-party package directories are covered by `.github/CODEOWNERS`. Ask for a
package owner review when changing package source, generated dependency
metadata, package docs, or release behavior for that package.

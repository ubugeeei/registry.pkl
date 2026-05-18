---
title: Registry Record
description: Searchable index record shape attached to every published package version.
---

# Registry Record

A registry record is the **searchable index entry** for a Pkl package version.
It is not the Pkl package metadata itself — Pkl already publishes its own
`PklProject` metadata as part of every release zip.

The registry record carries the extra fields a searchable catalog needs:
curated tags, target tool vocabulary, ecosystem facets, first-party vs.
community flags, and pointers to the actual artifact and docs.

```json
{
  "name": "target.js",
  "version": "0.2.0",
  "packageUri": "package://pkg.registry.invalid/target.js@0.2.0",
  "packageZipUrl": "https://github.com/ubugeeei/registry.pkl/releases/download/target.js@0.2.0/target.js@0.2.0.zip",
  "packageZipSha256Url": "https://github.com/ubugeeei/registry.pkl/releases/download/target.js@0.2.0/target.js@0.2.0.zip.sha256",
  "docsUrl": "https://ubugeeei.github.io/registry.pkl/packages/target-js/",
  "sourceRepo": "https://github.com/ubugeeei/registry.pkl",
  "sourceDirectory": "packages/target.js",
  "ecosystem": "javascript",
  "firstParty": true,
  "targets": [
    "package.json",
    "tsconfig.json",
    "biome.json",
    ".prettierrc",
    ".oxlintrc.json",
    ".oxfmtrc.json",
    "pnpm-workspace.yaml",
    "turbo.json",
    "renovate.json",
    ".eslintrc.json"
  ],
  "formats": [
    "json",
    "yaml"
  ],
  "tags": [
    "typescript",
    "monorepo",
    "tooling"
  ],
  "maintainers": [
    "ubugeeei"
  ],
  "releasedAt": "2026-05-19T00:00:00Z",
  "supersedes": "target.js@0.1.0"
}
```

## Field Reference

| Field | Required | Notes |
|---|---|---|
| `name` | yes | Package name, must match `packages/<name>/PklProject`. |
| `version` | yes | SemVer. Must match the package `version` exactly. |
| `packageUri` | yes | `package://<host>/<name>@<version>` form. See [Distribution](../../guide/distribution/index.html). |
| `packageZipUrl` | yes | Immutable HTTPS URL of the release zip. |
| `packageZipSha256Url` | yes | Immutable HTTPS URL of the checksum file (`.zip.sha256`). |
| `docsUrl` | yes | Stable docs page for this version. |
| `sourceRepo` | yes | Public repo URL. |
| `sourceDirectory` | yes | Path inside the repo. |
| `ecosystem` | yes | One of `javascript`, `rust`, `python`, `go`, `editor`, `agent`, `ci`, `env`, `container`, `deploy`, `k8s`, `lint`, `docs`, or `core`. |
| `firstParty` | yes | `true` for `registry.pkl`-owned packages; `false` for community submissions. |
| `targets` | yes | The concrete config files this package emits. |
| `formats` | yes | Output formats: `json`, `yaml`, `toml`, `ini`. |
| `tags` | optional | Free-form, curated. |
| `maintainers` | yes | GitHub handles. |
| `releasedAt` | yes | ISO-8601 UTC timestamp. Set by the release workflow. |
| `supersedes` | optional | The previous version this record replaces, useful for changelog rendering. |

## Hostname Rule

Use a host you actually control.

For first-party packages right now, that is GitHub Releases under
`github.com/ubugeeei/registry.pkl`. The `packageUri` itself can use a
placeholder host such as `pkg.registry.invalid` until a real package origin
is provisioned — Pkl resolves the artifact through `packageZipUrl`, so the
placeholder host does not block `pkl project resolve`.

For community submissions, the `packageUri` host must be a domain the
submitter actually controls.

## Why Keep A Separate Record

The registry index needs metadata that does not belong inside the package
artifact itself:

- first-party versus community flags
- curated search tags
- target tool vocabulary
- review state, deprecation notices, and changelog pointers
- supersede chains for version history

Embedding all of that inside the Pkl package would couple package authoring
to registry policy, which is exactly the coupling registry.pkl avoids.

## Where Records Live

Registry records are checked into the docs site under:

```
packages/docs/content/registry/<name>/<version>.json
```

The release workflow appends a new record file when a tag is pushed. The
docs build picks them up to populate search and the per-package version
history.

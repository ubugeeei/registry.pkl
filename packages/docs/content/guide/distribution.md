---
title: Distribution
description: How first-party packages get from a Pkl module on disk to an installable, immutable artifact.
---

# Distribution

`registry.pkl` does not invent a new package host. It distributes normal
Pkl packages built with `pkl project package`, served from GitHub Releases
on the project's own repository, and indexed through a searchable docs
site.

## Publish Pkl Packages, Not Registry-Specific Artifacts

The distribution unit is a normal Pkl package. Each first-party family in
`packages/target.*` has its own `PklProject` and its own SemVer:

- `target.core`
- `target.js`
- `target.env`
- `target.rust`
- `target.editor`
- `target.ci`
- `target.agent`

`pkl project package packages/target.<name>` produces a `.zip` plus a
`.sha256` next to it. Those two files are the entire artifact surface — no
registry-specific format on top.

## Reuse Pantry Packages Where It Helps

Do not rebuild upstream packages that already exist and are maintained
well. The current dependencies on the official pantry are:

- `package://pkg.pkl-lang.org/pkl-pantry/pkl.toml@1.0.2`
- `package://pkg.pkl-lang.org/pkl-pantry/com.github.actions@1.3.1`
- `package://pkg.pkl-lang.org/pkl-pantry/com.github.dependabot@1.0.0`

`target.ci` wraps those packages with repository presets and team-facing
entry points instead of cloning their full schema surface. `target.rust`
and `target.env` reuse `pkl.toml` for TOML rendering instead of writing
ad-hoc emitters.

## Hosting Reality

`registry.pkl` is a third-party design study maintained by `@ubugeeei`. It
does not own `pkg.pkl-lang.org`. References to that origin in this repo
only point at official upstream pantry dependencies.

For the artifacts produced by this repo:

- docs site: `https://ubugeeei.github.io/registry.pkl/`
- package zips: GitHub Releases on `github.com/ubugeeei/registry.pkl`
- registry records: `packages/docs/content/registry/<name>/<version>.json`,
  committed alongside the docs build so search and version history work
  from the same static origin
- `packageUri` host: `pkg.registry.invalid` as a placeholder until a real
  package origin domain is provisioned

The `packageZipUrl` resolves directly to the GitHub Releases download URL,
which is what `pkl project resolve` actually fetches. The placeholder
`packageUri` host therefore does not block consumers — they pin to the
ZIP, not the URI host.

## Release Flow

The release workflow lives at
[`.github/workflows/release-package.yml`](https://github.com/ubugeeei/registry.pkl/blob/main/.github/workflows/release-package.yml)
and runs on `workflow_dispatch`:

1. Validate inputs (`package` matches `target.<family>`, `version` matches
   SemVer regex). Pkl resolves the project to verify dependency graphs are
   consistent.
2. Run `pkl project package packages/<package>`. Emit the zip and SHA-256
   checksum into `.out/<package>@<version>/`.
3. Refuse to continue if the corresponding `<package>@<version>` tag
   already exists — releases are immutable.
4. Push the new tag and create a GitHub Release. Upload both files as
   release assets.
5. Append a registry record under
   `packages/docs/content/registry/<package>/<version>.json`. Open a PR
   so the addition is auditable.

Local rehearsals use `scripts/release.sh` with `--dry-run` to run steps 1
and 2 without touching the remote.

## Release Discipline

Per-package SemVer is only honest if these rules hold:

- Pin imports to exact SemVer in production. `latest` is a registry UI
  convenience, never an import target.
- Run `pkl test packages/target.*` before packaging. CI does this on every
  PR, and the release workflow does it again before publishing.
- Once a `<name>@<version>` tag exists, its zip and SHA-256 are immutable.
  Bad releases get yanked through a deprecation flag in the registry
  record, not by force-pushing assets.

## What The Registry Adds On Top

`registry.pkl` does not replace package distribution. It adds:

- searchable package pages
- reviewed first-party and community records
- target tool and ecosystem facets
- changelog and compatibility visibility
- copy-pasteable pinned import URIs

The registry record points at real package artifacts, docs, and checksums.
Pkl's own resolution machinery handles the rest.

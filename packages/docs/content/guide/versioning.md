---
title: Versioning
description: Per-package SemVer rules, tag layout, and compatibility policy for the first-party target.* family.
---

# Versioning

`registry.pkl` ships every first-party package on its own SemVer cadence. A
single repo-wide version would force `target.js` and `target.agent` to march
in lockstep even though their upstream ecosystems move at very different speeds.

## Per-Package SemVer

Each `packages/target.<name>/PklProject` owns its own version. The shared
`packages/basePklProject.pkl` no longer fixes a number — it only defines
defaults that every family inherits, such as the package origin and the
GitHub Releases-backed `packageZipUrl`.

```pkl
amends "../basePklProject.pkl"

package {
  version = "0.4.1"   // owned by this package
}
```

A change inside `packages/target.rust/` only needs to bump
`packages/target.rust/PklProject`. The rest of the family keeps its current
version.

## Tag Layout

Releases are tagged with the package name and version, separated by `@`:

```
target.core@0.1.0
target.js@0.2.0
target.rust@0.3.1
target.agent@0.5.0
```

The release workflow uploads two files per tag:

- `<name>@<version>.zip` — the artifact produced by `pkl project package`
- `<name>@<version>.zip.sha256` — the checksum file

`packageZipUrl` resolves to
`https://github.com/ubugeeei/registry.pkl/releases/download/<name>@<version>/<name>@<version>.zip`.

## SemVer Rules For Pkl Schemas

A configuration schema has very direct breaking-change signals:

- **Major** — removing a public field, renaming it, narrowing a type, or
  changing a default in a way that changes generated output for unchanged
  callers.
- **Minor** — adding a new public field with a safe default, adding a
  rendering option that defaults to off, or widening a type.
- **Patch** — pure documentation, internal refactors, or fixes that do not
  change generated output for any valid input.

When in doubt, prefer a minor bump over a patch.

## Compatibility Story

Registry pages should make these questions obvious for every release:

- what changed
- whether the change is breaking
- which target tools were affected
- whether the generated output format changed

The release artifact JSON exposed to the docs site carries enough metadata to
answer these without reading the diff.

## The `target.core` Special Case

`target.core` is a transitive dependency of every other family. A breaking
change there is a breaking change everywhere.

The rule is:

- Any breaking change in `target.core` bumps its own major.
- Every downstream `target.*` that picks up the new `target.core` must also
  bump at least its minor.
- Patch bumps in `target.core` (pure docs or internal refactors that do not
  change output) do not force downstream bumps.

## `latest` Is A View, Not An Import Target

The registry UI may show "latest" for browsing convenience. Imports must
always pin to a concrete SemVer release. The registry record points at
`packageZipUrl` for the exact version, not a moving alias.

## Search Should Be Version-Aware

Search results expose:

- latest stable only (default)
- all versions
- version range filtering
- first-party only
- community packages only

## Why Immutable Artifacts

Once `target.js@0.2.0.zip` lands on a GitHub Release, its contents and
checksum must never be rewritten. Mirrors, lockfiles, and supply-chain
verification all assume the artifact at a given `packageZipUrl` is
byte-stable. The release workflow refuses to re-publish an existing tag.

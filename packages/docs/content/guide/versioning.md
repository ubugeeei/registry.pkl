---
title: Versioning
description: Versioning rules for packages, registry records, and the latest channel.
---

# Versioning

## Package Versions Must Be Immutable

Once a version lands in the registry, its artifact references should not be
rewritten.

If contents change, publish a new version.

## Versioning Happens Per Package

Do not force a repo-wide version.

`compat.js@0.4.0` and `compat.agent@0.1.0` should be able to evolve at different
speeds.

## latest Is A View, Not A Mutable Artifact

The registry can expose "latest" in search and package pages, but the underlying
records should still point at concrete semver releases.

## Compatibility Story

Registry pages should make these questions obvious:

- what changed
- whether the change is breaking
- which target tools were affected
- whether output format changed

## Search Should Be Version-Aware

Search results should support:

- latest stable only
- all versions
- version range filtering
- first-party only
- community packages only


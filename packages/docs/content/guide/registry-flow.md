---
title: Registry Flow
description: How registry.pkl should work as a GitHub Pull Request-based index without a publish API.
---

# Registry Flow

`registry.pkl` should be a registry service, not a package host with a custom
publish command.

## Core Idea

Package authors publish artifacts wherever they want:

- GitHub Releases
- static HTTPS hosting
- their own docs domain

Then they open a Pull Request to register or update package metadata.

## Why This Model Is Good

- no bespoke publish auth story on day one
- human review before packages appear in search
- immutable registry history
- easy auditing because the index is Git

## Proposed Flow

```mermaid
flowchart LR
  A["Author builds package"] --> B["Author uploads zip + docs"]
  B --> C["Author opens registry PR"]
  C --> D["CI validates metadata, links, semver, checksums"]
  D --> E["Review + merge"]
  E --> F["Search index and package pages regenerate"]
```

## What The PR Should Contain

- package name
- version
- package URI
- package metadata URL
- package zip URL
- docs URL
- target tools
- formats
- tags
- maintainers
- checksums or immutable artifact references

## What CI Should Validate

- semver correctness
- duplicate version rejection
- reachable metadata URL
- reachable docs URL
- immutable artifact URL pattern
- registry record schema validity
- target tool names against a known vocabulary

Those validators are good candidates for Rust binaries built on top of
`pklrust`.

## What The Service Does After Merge

- index the new version
- update "latest" views
- regenerate search data
- rebuild package detail pages

---
title: Registry Record
description: Proposed JSON record shape for PR-based package registration.
---

# Registry Record

This is a proposed record shape for `registry.pkl`.

It is not the Pkl package metadata itself. It is the registry's searchable index
record.

```json
{
  "name": "target.js",
  "version": "0.1.0",
  "packageUri": "package://pkg.registry.pkl/target.js@0.1.0",
  "metadataUrl": "https://pkg.registry.pkl/target.js@0.1.0",
  "packageZipUrl": "https://github.com/example/target/releases/download/target.js-v0.1.0/target.js@0.1.0.zip",
  "docsUrl": "https://docs.registry.pkl/target.js/0.1.0/",
  "ecosystem": "javascript",
  "targets": [
    "package.json",
    "tsconfig.json",
    "biome.json"
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
  "source": {
    "repo": "https://github.com/example/target",
    "directory": "packages/js"
  }
}
```

## Why Keep A Separate Record

The registry wants search and moderation metadata that does not necessarily
belong inside the package artifact itself.

Examples:

- first-party versus community flags
- search tags
- curated target vocabulary
- review state

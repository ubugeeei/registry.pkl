---
title: Registry Record
description: Proposed JSON record shape for PR-based package registration.
---

# Registry Record

This is the proposed record shape for `registry.pkl`.

It is not the Pkl package metadata itself. It is the registry's searchable index
record, submitted as JSON under `registry/<package-name>/<version>.json`.

```json
{
  "name": "target.js",
  "version": "0.1.0",
  "packageUri": "package://pkg.example.com/target.js@0.1.0",
  "metadataUrl": "https://pkg.example.com/target.js@0.1.0",
  "packageZipUrl": "https://github.com/example/target/releases/download/target.js-v0.1.0/target.js@0.1.0.zip",
  "docsUrl": "https://example.github.io/target-js/0.1.0/",
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

## Validation CLI

Run the registry validator locally before opening a pull request:

```bash
node scripts/validate-registry-records.mjs registry/target.js/0.1.0.json
```

To match pull request CI, validate records changed against a base ref:

```bash
node scripts/validate-registry-records.mjs --changed --base-ref origin/main
```

The validator checks:

- strict SemVer 2.0.0 versions
- `package://` package URIs whose embedded version matches `version`
- `metadataUrl` matching the HTTPS URL derived from `packageUri`
- HTTPS ZIP and docs URLs that point at concrete versioned paths
- target names against the registry target vocabulary
- first-party `target.*` records only claim targets owned by that package
- duplicate, edited, or deleted `name@version` records against the base ref

## Hostname Rule

Use a host you actually control in real records.

For prose-only design examples, reserved placeholders such as `example.invalid`
are fine. Do not put placeholder hosts in committed `registry/*.json` records;
the validator rejects `.invalid` hosts, but it cannot prove real-world domain
ownership for you.

## Why Keep A Separate Record

The registry wants search and moderation metadata that does not necessarily
belong inside the package artifact itself.

Examples:

- first-party versus community flags
- search tags
- curated target vocabulary
- review state

---
title: Generating Files
description: How output generation should work for JSON, YAML, TOML, and multi-file packages.
---

# Generating Files

## JSON and YAML

These are the easy cases because Pkl already supports them directly.

Examples:

```bash
pkl eval --format json package.pkl -o package.json
```

```bash
pkl eval --format yaml gitlab.pkl -o .gitlab-ci.yml
```

For packages that want more control, the module can set its own renderer in
`output`.

## TOML

TOML is a first-class target for this project, and the best default is to share
one renderer dependency across packages.

The recommended order is:

1. the official `pkl.toml` renderer package
2. thin wrappers in `target.core` for naming, converters, or house style
3. custom emitters only when a target cannot be expressed with the shared
   renderer model

That keeps `Cargo.toml`, `mise.toml`, `clippy.toml`, and `rustfmt.toml`
aligned instead of rebuilding TOML logic four times.

## Multi-File Output

Some use cases are naturally multi-file:

- repository bootstrap
- monorepo presets
- editor plus formatter plus linter bundles
- CI plus local tooling setup

Pkl's multi-file output support is a strong fit here.

Suggested first-party pattern:

```pkl
output {
  files {
    ["package.json"] = packageJson.output
    ["tsconfig.json"] = tsconfig.output
    [".vscode/settings.json"] = vscode.output
  }
}
```

## Snapshot Testing

Every package should test generated output with golden snapshots.

That is more important than "unit tests" for config packages because the real
contract is the emitted file.

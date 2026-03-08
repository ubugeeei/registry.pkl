---
title: Authoring Model
description: Rules for designing typed Pkl config packages that stay close to real tools.
---

# Authoring Model

## Design Rules

Every package in this ecosystem should follow the same rules.

### 1. Model the real tool

Do not expose a generic JSON or YAML AST as the primary API.

Bad:

```pkl
config: Mapping<String, Any>
```

Better:

```pkl
compilerOptions: CompilerOptions
include: Listing<String>
exclude: Listing<String>
```

### 2. Keep an escape hatch

Tools evolve. Some keys are niche. Some teams need vendor-specific fields.

Every major schema should include an escape hatch such as:

```pkl
extra: Mapping<String, Any>
```

### 3. Prefer presets over copy-paste

Presets are one of the main reasons to use Pkl here.

Good preset candidates:

- TS library
- TS application
- pnpm monorepo package
- Rust workspace member
- VS Code team settings
- CI presets for test and release jobs

### 4. Keep names close to the target ecosystem

Users should not have to mentally translate the DSL back into the source tool.

Use names like:

- `compilerOptions`
- `scripts`
- `dependencies`
- `jobs`
- `steps`
- `workspace`

## Output Strategy By Format

| Format | Strategy |
|------|----------|
| JSON | Standard `JsonRenderer` |
| YAML | Standard `YamlRenderer` |
| TOML | Shared renderer package, preferably `pkl.toml` |

The key implementation rule is that TOML stays centralized behind one renderer
strategy instead of drifting package by package.

## Package Shape

Each tool module should expose a small, predictable structure:

- `base.pkl`
- `presets/`
- `types.pkl`
- `render.pkl` when output shaping is non-trivial

That keeps docs, imports, and tests consistent across the ecosystem.

---
title: Quickstart
description: The intended workflow for writing config in Pkl and generating native files.
---

# Quickstart

This is the target workflow for the project.

The package imports below are aspirational until the first packages are
published, but the generation model is real Pkl.

## Step 1: Author a config module

Example shape for a future `tsconfig.json` package:

```pkl
amends "package://pkg.registry.pkl/compat.js@0.1.0#/tsconfig/presets/library.pkl"

compilerOptions {
  target = "ES2022"
  strict = true
  declaration = true
}

include {
  "src"
}
```

## Step 2: Generate a native file

JSON and YAML targets can use normal `pkl eval` output formats:

```bash
pkl eval --format json tsconfig.pkl -o tsconfig.json
```

```bash
pkl eval --format yaml workflow.pkl -o .github/workflows/ci.yml
```

## Step 3: Handle TOML with a shared renderer package

TOML targets should depend on one shared renderer package instead of each
package growing its own emitter.

Target shape:

```pkl
import "package://pkg.pkl-lang.org/pkl-pantry/pkl.toml@1.0.2#/toml.pkl" as toml

amends "package://pkg.registry.pkl/compat.rust@0.1.0#/cargo/package.pkl"

package {
  name = "my-crate"
  edition = "2024"
}

output {
  renderer = new toml.Renderer {}
}
```

## Step 4: Use multi-file outputs when a tool needs more than one file

Pkl can emit multiple files from one evaluation.

```pkl
output {
  files {
    ["package.json"] {
      value = packageJson
      renderer = new JsonRenderer {}
    }
    [".vscode/settings.json"] {
      value = vscodeSettings
      renderer = new JsonRenderer {}
    }
  }
}
```

Then evaluate with:

```bash
pkl eval --multiple-file-output-path . config.pkl
```

## What The Registry Adds

Once packages exist, `registry.pkl` should let users:

- find packages by tool name
- compare versions
- find first-party presets
- review package metadata and docs before import

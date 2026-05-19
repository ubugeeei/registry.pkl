---
title: target.js.LintStaged
description: A typed authoring surface for `.lintstagedrc.json` / `lint-staged` config.
---

# `target.js.LintStaged`

A typed authoring surface for `.lintstagedrc.json` / `lint-staged` config.

lint-staged runs a configurable set of tasks against the files git has
staged. The on-disk config maps a glob to one or more commands.

## Type aliases

### `Task`

Each entry binds a file glob to a command or a list of commands.
`String` runs a single command; `Listing<String>` runs the list in order.

```pkl
typealias Task = String|Listing<String>
```

## Fields

#### `patterns`

File-pattern → task mapping. Keys are minimatch globs.

```pkl
patterns: Mapping<String, Task> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lint-staged/LintStaged.pkl#L14-L14)

#### `extra`

Free-form extra fields (e.g. lint-staged's `*` magic key).

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lint-staged/LintStaged.pkl#L17-L17)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lint-staged/LintStaged.pkl#L33-L33)

#### `renderer`

```pkl
renderer = new JsonRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lint-staged/LintStaged.pkl#L34-L34)


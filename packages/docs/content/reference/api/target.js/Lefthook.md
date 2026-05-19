---
title: target.js.Lefthook
description: A typed authoring surface for `lefthook.yml`.
---

# `target.js.Lefthook`

A typed authoring surface for `lefthook.yml`.

Lefthook (https://lefthook.dev) is a polyglot git hook manager whose
config is a YAML document keyed by git hook names. Each hook owns a
set of `commands` and/or `scripts` that run in parallel by default.

## Fields

#### `minVersion`

Optional top-level fields.

```pkl
minVersion: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lefthook/Lefthook.pkl#L63-L63)

#### `sourceDir`

```pkl
sourceDir: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lefthook/Lefthook.pkl#L64-L64)

#### `sourceDirLocal`

```pkl
sourceDirLocal: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lefthook/Lefthook.pkl#L65-L65)

#### `colors`

```pkl
colors: (Boolean|Mapping<String, String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lefthook/Lefthook.pkl#L66-L66)

#### `noTty`

```pkl
noTty: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lefthook/Lefthook.pkl#L67-L67)

#### `skipOutput`

```pkl
skipOutput: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lefthook/Lefthook.pkl#L68-L68)

#### `outputs`

```pkl
outputs: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lefthook/Lefthook.pkl#L69-L69)

#### `remotes`

```pkl
remotes: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lefthook/Lefthook.pkl#L70-L70)

#### `templatesDir`

```pkl
templatesDir: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lefthook/Lefthook.pkl#L71-L71)

#### `hooks`

```pkl
hooks: Mapping<String, Hook> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lefthook/Lefthook.pkl#L72-L72)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lefthook/Lefthook.pkl#L73-L73)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lefthook/Lefthook.pkl#L152-L152)

#### `renderer`

```pkl
renderer = new YamlRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lefthook/Lefthook.pkl#L153-L153)

## Classes

### `Command`

Per-command override.

#### `run`

Shell command. Lefthook interpolates `{staged_files}`, `{push_files}`,
and `{files}` placeholders.

```pkl
run: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lefthook/Lefthook.pkl#L14-L14)

#### `glob`

Glob filter applied before `run`. Multiple globs join with `|`.

```pkl
glob: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lefthook/Lefthook.pkl#L16-L16)

#### `files`

Lua-style regex filter, applied after `glob`.

```pkl
files: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lefthook/Lefthook.pkl#L18-L18)

#### `tags`

Tag list used by `--commands` / `--exclude-tags` selectors.

```pkl
tags: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lefthook/Lefthook.pkl#L20-L20)

#### `skip`

Skip this command when the predicate matches (e.g. `merge`, `rebase`).

```pkl
skip: (Boolean|String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lefthook/Lefthook.pkl#L22-L22)

#### `only`

Only run when the predicate matches.

```pkl
only: (Boolean|String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lefthook/Lefthook.pkl#L24-L24)

#### `env`

Environment variables forwarded into the command.

```pkl
env: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lefthook/Lefthook.pkl#L26-L26)

#### `root`

Working directory.

```pkl
root: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lefthook/Lefthook.pkl#L28-L28)

#### `stageFixed`

Override the staged-files detection strategy.

```pkl
stageFixed: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lefthook/Lefthook.pkl#L30-L30)

#### `excludeTags`

Disable parallel execution for this entry.

```pkl
excludeTags: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lefthook/Lefthook.pkl#L32-L32)

#### `extra`

Free-form passthrough.

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lefthook/Lefthook.pkl#L34-L34)

### `Script`

A `scripts/<name>` entry — runs the named script from `.lefthook/<hook>/`.

#### `runner`

```pkl
runner: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lefthook/Lefthook.pkl#L39-L39)

#### `tags`

```pkl
tags: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lefthook/Lefthook.pkl#L40-L40)

#### `skip`

```pkl
skip: (Boolean|String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lefthook/Lefthook.pkl#L41-L41)

#### `only`

```pkl
only: (Boolean|String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lefthook/Lefthook.pkl#L42-L42)

#### `env`

```pkl
env: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lefthook/Lefthook.pkl#L43-L43)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lefthook/Lefthook.pkl#L44-L44)

### `Hook`

A single git hook (`pre-commit`, `pre-push`, …).

#### `parallel`

Run commands sequentially instead of in parallel.

```pkl
parallel: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lefthook/Lefthook.pkl#L50-L50)

#### `piped`

Stop on the first failing command.

```pkl
piped: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lefthook/Lefthook.pkl#L52-L52)

#### `skip`

Hook-wide skip predicate.

```pkl
skip: (Boolean|String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lefthook/Lefthook.pkl#L54-L54)

#### `only`

Hook-wide only predicate.

```pkl
only: (Boolean|String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lefthook/Lefthook.pkl#L56-L56)

#### `commands`

```pkl
commands: Mapping<String, Command> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lefthook/Lefthook.pkl#L57-L57)

#### `scripts`

```pkl
scripts: Mapping<String, Script> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lefthook/Lefthook.pkl#L58-L58)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lefthook/Lefthook.pkl#L59-L59)


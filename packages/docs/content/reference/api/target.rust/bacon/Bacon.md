---
title: target.rust.bacon.Bacon
description: A typed authoring surface for `bacon.toml`.
---

# `target.rust.bacon.Bacon`

A typed authoring surface for `bacon.toml`.

Bacon (https://dystroy.org/bacon) is a background Cargo job runner.
Its config defines named "jobs" mapped to cargo subcommands, plus
keybindings, defaults, and exports.

Reference: https://dystroy.org/bacon/config/

## Fields

#### `defaultJob`

```pkl
defaultJob: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/bacon/Bacon.pkl#L35-L35)

#### `envInheritance`

```pkl
envInheritance: Mapping<String, Boolean> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/bacon/Bacon.pkl#L36-L36)

#### `keybindings`

```pkl
keybindings: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/bacon/Bacon.pkl#L37-L37)

#### `jobs`

```pkl
jobs: Mapping<String, Job> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/bacon/Bacon.pkl#L38-L38)

#### `exports`

```pkl
exports: Mapping<String, Export> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/bacon/Bacon.pkl#L39-L39)

#### `showChanges`

```pkl
showChanges: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/bacon/Bacon.pkl#L40-L40)

#### `summary`

```pkl
summary: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/bacon/Bacon.pkl#L41-L41)

#### `wrap`

```pkl
wrap: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/bacon/Bacon.pkl#L42-L42)

#### `reverse`

```pkl
reverse: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/bacon/Bacon.pkl#L43-L43)

#### `helpLine`

```pkl
helpLine: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/bacon/Bacon.pkl#L44-L44)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/bacon/Bacon.pkl#L45-L45)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/bacon/Bacon.pkl#L123-L123)

#### `renderer`

```pkl
renderer = new toml.Renderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/bacon/Bacon.pkl#L124-L124)

## Classes

### `Job`

#### `command`

```pkl
command: Listing<String>
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/bacon/Bacon.pkl#L14-L14)

#### `needBacktrace`

```pkl
needBacktrace: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/bacon/Bacon.pkl#L15-L15)

#### `watch`

```pkl
watch: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/bacon/Bacon.pkl#L16-L16)

#### `ignore`

```pkl
ignore: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/bacon/Bacon.pkl#L17-L17)

#### `default_watch`

```pkl
default_watch: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/bacon/Bacon.pkl#L18-L18)

#### `background`

```pkl
background: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/bacon/Bacon.pkl#L19-L19)

#### `onChangeStrategy`

```pkl
onChangeStrategy: ("kill-then-restart"|"wait-then-restart"|"none")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/bacon/Bacon.pkl#L20-L20)

#### `killCommand`

```pkl
killCommand: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/bacon/Bacon.pkl#L21-L21)

#### `analyzer`

```pkl
analyzer: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/bacon/Bacon.pkl#L22-L22)

#### `expectFailure`

```pkl
expectFailure: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/bacon/Bacon.pkl#L23-L23)

#### `env`

```pkl
env: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/bacon/Bacon.pkl#L24-L24)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/bacon/Bacon.pkl#L25-L25)

### `Export`

#### `enabled`

```pkl
enabled: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/bacon/Bacon.pkl#L29-L29)

#### `path`

```pkl
path: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/bacon/Bacon.pkl#L30-L30)

#### `line_format`

```pkl
line_format: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/bacon/Bacon.pkl#L31-L31)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/bacon/Bacon.pkl#L32-L32)


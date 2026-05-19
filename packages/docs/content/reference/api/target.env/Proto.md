---
title: target.env.Proto
description: A typed authoring surface for `.prototools`.
---

# `target.env.Proto`

A typed authoring surface for `.prototools`.

Proto (https://moonrepo.dev/proto) stores per-project tool pins and
plugin definitions in `.prototools` (TOML). Tools are simple
"name = version" assignments at the top level; plugins live under
`[plugins]`; tool-specific settings under `[tools.<name>]`; settings
under `[settings]`.

## Fields

#### `tools`

Top-level "tool = version" pins.

```pkl
tools: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/proto/Proto.pkl#L32-L32)

#### `plugins`

Plugin name → install location (URL or `source:` URI).

```pkl
plugins: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/proto/Proto.pkl#L35-L35)

#### `toolSettings`

Per-tool settings ([tools.<name>] tables).

```pkl
toolSettings: Mapping<String, ToolSettings> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/proto/Proto.pkl#L38-L38)

#### `settings`

Global settings table.

```pkl
settings: Settings? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/proto/Proto.pkl#L41-L41)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/proto/Proto.pkl#L43-L43)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/proto/Proto.pkl#L101-L101)

#### `renderer`

```pkl
renderer = new toml.Renderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/proto/Proto.pkl#L102-L102)

## Classes

### `ToolSettings`

#### `aliases`

Aliases for this tool version.

```pkl
aliases: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/proto/Proto.pkl#L15-L15)

#### `default_version`

Per-tool default version override.

```pkl
default_version: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/proto/Proto.pkl#L17-L17)

#### `extra`

Free-form passthrough for tool-specific config.

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/proto/Proto.pkl#L19-L19)

### `Settings`

#### `autoCleanInstall`

```pkl
autoCleanInstall: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/proto/Proto.pkl#L23-L23)

#### `autoInstall`

```pkl
autoInstall: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/proto/Proto.pkl#L24-L24)

#### `detectStrategy`

```pkl
detectStrategy: ("first-available"|"prefer-prototools"|"only-prototools")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/proto/Proto.pkl#L25-L25)

#### `pinLatest`

```pkl
pinLatest: ("global"|"local"|"user")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/proto/Proto.pkl#L26-L26)

#### `telemetry`

```pkl
telemetry: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/proto/Proto.pkl#L27-L27)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/proto/Proto.pkl#L28-L28)


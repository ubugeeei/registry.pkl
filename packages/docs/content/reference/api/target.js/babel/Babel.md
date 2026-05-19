---
title: target.js.babel.Babel
description: A typed authoring surface for `babel.config.json` / `.babelrc.json`.
---

# `target.js.babel.Babel`

A typed authoring surface for `babel.config.json` / `.babelrc.json`.

Babel's plugins and presets accept either a string (just the name) or a
`[name, options]` pair. This module models both forms, plus the most
commonly tuned top-level options.

## Type aliases

### `Reference`

```pkl
typealias Reference = String|PluginEntry
```

### `TargetsValue`

```pkl
typealias TargetsValue = String|Listing<String>|Mapping<String, String|Listing<String>>
```

## Fields

#### `presets`

```pkl
presets: Listing<Reference> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/babel/Babel.pkl#L40-L40)

#### `plugins`

```pkl
plugins: Listing<Reference> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/babel/Babel.pkl#L41-L41)

#### `targets`

```pkl
targets: TargetsValue? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/babel/Babel.pkl#L42-L42)

#### `sourceType`

```pkl
sourceType: ("script"|"module"|"unambiguous")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/babel/Babel.pkl#L43-L43)

#### `sourceMaps`

```pkl
sourceMaps: (Boolean|"inline"|"both")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/babel/Babel.pkl#L44-L44)

#### `assumptions`

```pkl
assumptions: Mapping<String, Boolean> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/babel/Babel.pkl#L45-L45)

#### `ignore`

```pkl
ignore: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/babel/Babel.pkl#L46-L46)

#### `only`

```pkl
only: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/babel/Babel.pkl#L47-L47)

#### `env`

```pkl
env: Mapping<String, EnvEntry> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/babel/Babel.pkl#L48-L48)

#### `overrides`

```pkl
overrides: Listing<OverrideEntry> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/babel/Babel.pkl#L49-L49)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/babel/Babel.pkl#L50-L50)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/babel/Babel.pkl#L138-L138)

#### `renderer`

```pkl
renderer = new JsonRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/babel/Babel.pkl#L139-L139)

## Classes

### `PluginEntry`

A plugin or preset reference with optional options and dir name.

#### `name`

Plugin/preset name or package specifier.

```pkl
name: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/babel/Babel.pkl#L13-L13)

#### `options`

Plugin options. Renders as the second tuple element.

```pkl
options: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/babel/Babel.pkl#L15-L15)

#### `key`

Optional third tuple element — Babel uses this for unique plugin keys.

```pkl
key: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/babel/Babel.pkl#L17-L17)

### `EnvEntry`

#### `presets`

```pkl
presets: Listing<Reference> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/babel/Babel.pkl#L24-L24)

#### `plugins`

```pkl
plugins: Listing<Reference> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/babel/Babel.pkl#L25-L25)

#### `sourceType`

```pkl
sourceType: ("script"|"module"|"unambiguous")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/babel/Babel.pkl#L26-L26)

#### `targets`

```pkl
targets: TargetsValue? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/babel/Babel.pkl#L27-L27)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/babel/Babel.pkl#L28-L28)

### `OverrideEntry`

#### `test`

```pkl
test: (String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/babel/Babel.pkl#L32-L32)

#### `include`

```pkl
include: (String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/babel/Babel.pkl#L33-L33)

#### `exclude`

```pkl
exclude: (String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/babel/Babel.pkl#L34-L34)

#### `presets`

```pkl
presets: Listing<Reference> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/babel/Babel.pkl#L35-L35)

#### `plugins`

```pkl
plugins: Listing<Reference> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/babel/Babel.pkl#L36-L36)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/babel/Babel.pkl#L37-L37)


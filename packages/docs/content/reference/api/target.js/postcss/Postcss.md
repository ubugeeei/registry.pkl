---
title: target.js.postcss.Postcss
description: A typed authoring surface for `postcss.config.json`.
---

# `target.js.postcss.Postcss`

A typed authoring surface for `postcss.config.json`.

PostCSS's JSON config is the format used by tools that resolve a JSON
`postcss.config.json` instead of the `postcss.config.js` JavaScript
module. Plugins accept either a bare string or a [name, options] pair.

## Type aliases

### `PluginReference`

```pkl
typealias PluginReference = String|PluginEntry
```

## Fields

#### `plugins`

PostCSS allows plugins to be declared as a list (string or pair) or as
an object that maps plugin name -> options. We support both forms.

```pkl
plugins: Listing<PluginReference> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/postcss/Postcss.pkl#L20-L20)

#### `pluginMap`

When non-empty, plugins are rendered as an `{ name: options }` map
instead of a list. Both forms are valid PostCSS config.

```pkl
pluginMap: Mapping<String, Mapping<String, Any>> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/postcss/Postcss.pkl#L24-L24)

#### `parser`

```pkl
parser: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/postcss/Postcss.pkl#L26-L26)

#### `syntax`

```pkl
syntax: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/postcss/Postcss.pkl#L27-L27)

#### `stringifier`

```pkl
stringifier: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/postcss/Postcss.pkl#L28-L28)

#### `map`

```pkl
map: (Boolean|Mapping<String, Any>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/postcss/Postcss.pkl#L29-L29)

#### `from`

```pkl
from: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/postcss/Postcss.pkl#L30-L30)

#### `to`

```pkl
to: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/postcss/Postcss.pkl#L31-L31)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/postcss/Postcss.pkl#L32-L32)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/postcss/Postcss.pkl#L66-L66)

#### `renderer`

```pkl
renderer = new JsonRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/postcss/Postcss.pkl#L67-L67)

## Classes

### `PluginEntry`

A plugin reference. Either a bare package name or a name + options.

#### `name`

```pkl
name: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/postcss/Postcss.pkl#L12-L12)

#### `options`

```pkl
options: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/postcss/Postcss.pkl#L13-L13)


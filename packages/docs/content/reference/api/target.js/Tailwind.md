---
title: target.js.Tailwind
description: A typed authoring surface for `tailwind.config.json`.
---

# `target.js.Tailwind`

A typed authoring surface for `tailwind.config.json`.

Tailwind v3 and v4 both accept a JSON-compatible config (when written
as `tailwind.config.json`), though most projects use the JS variant.
This module covers the JSON-shaped surface — `content`, `theme`,
`darkMode`, plugins, presets — and forwards the rest via `extra`.

## Type aliases

### `ContentEntry`

```pkl
typealias ContentEntry = String|Mapping<String, Any>
```

### `DarkMode`

```pkl
typealias DarkMode = 
```

## Fields

#### `content`

```pkl
content: Listing<ContentEntry> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tailwind/Tailwind.pkl#L24-L24)

#### `darkMode`

```pkl
darkMode: DarkMode? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tailwind/Tailwind.pkl#L25-L25)

#### `prefix`

```pkl
prefix: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tailwind/Tailwind.pkl#L26-L26)

#### `important`

```pkl
important: (Boolean|String)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tailwind/Tailwind.pkl#L27-L27)

#### `separator`

```pkl
separator: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tailwind/Tailwind.pkl#L28-L28)

#### `theme`

```pkl
theme: Theme? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tailwind/Tailwind.pkl#L29-L29)

#### `plugins`

```pkl
plugins: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tailwind/Tailwind.pkl#L30-L30)

#### `presets`

```pkl
presets: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tailwind/Tailwind.pkl#L31-L31)

#### `corePlugins`

```pkl
corePlugins: (Listing<String>|Mapping<String, Boolean>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tailwind/Tailwind.pkl#L32-L32)

#### `blocklist`

```pkl
blocklist: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tailwind/Tailwind.pkl#L33-L33)

#### `safelist`

```pkl
safelist: Listing<Any> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tailwind/Tailwind.pkl#L34-L34)

#### `future`

```pkl
future: Mapping<String, Boolean> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tailwind/Tailwind.pkl#L35-L35)

#### `experimental`

```pkl
experimental: Mapping<String, Boolean> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tailwind/Tailwind.pkl#L36-L36)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tailwind/Tailwind.pkl#L37-L37)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tailwind/Tailwind.pkl#L89-L89)

#### `renderer`

```pkl
renderer = new JsonRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tailwind/Tailwind.pkl#L90-L90)

## Classes

### `Theme`

#### `extend`

`extend` adds to defaults rather than replacing them.

```pkl
extend: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tailwind/Tailwind.pkl#L17-L17)

#### `values`

Fields outside `extend` REPLACE the default scale entirely.

```pkl
values: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tailwind/Tailwind.pkl#L19-L19)

#### `extra`

Free-form passthrough for theme keys outside the above two maps.

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/tailwind/Tailwind.pkl#L21-L21)


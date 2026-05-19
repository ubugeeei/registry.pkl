---
title: target.js.biome.Biome
description: A typed authoring surface for `biome.json`.
---

# `target.js.biome.Biome`

A typed authoring surface for `biome.json`.

## Fields

#### ``$schema``

```pkl
`$schema`: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/biome/Biome.pkl#L52-L52)

#### ``extends``

```pkl
`extends`: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/biome/Biome.pkl#L53-L53)

#### `formatter`

```pkl
formatter: Formatter = new {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/biome/Biome.pkl#L54-L54)

#### `linter`

```pkl
linter: Linter = new {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/biome/Biome.pkl#L55-L55)

#### `assist`

```pkl
assist: Assist = new {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/biome/Biome.pkl#L56-L56)

#### `files`

```pkl
files: Files = new {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/biome/Biome.pkl#L57-L57)

#### `vcs`

```pkl
vcs: Vcs = new {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/biome/Biome.pkl#L58-L58)

#### `javascript`

```pkl
javascript: LanguageOptions = new {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/biome/Biome.pkl#L59-L59)

#### `json`

```pkl
json: LanguageOptions = new {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/biome/Biome.pkl#L60-L60)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/biome/Biome.pkl#L61-L61)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/biome/Biome.pkl#L176-L176)

#### `renderer`

```pkl
renderer = new JsonRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/biome/Biome.pkl#L177-L177)

## Classes

### `Formatter`

#### `enabled`

```pkl
enabled: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/biome/Biome.pkl#L7-L7)

#### `useEditorconfig`

```pkl
useEditorconfig: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/biome/Biome.pkl#L8-L8)

#### `formatWithErrors`

```pkl
formatWithErrors: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/biome/Biome.pkl#L9-L9)

#### `indentStyle`

```pkl
indentStyle: "space"|"tab"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/biome/Biome.pkl#L10-L10)

#### `indentWidth`

```pkl
indentWidth: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/biome/Biome.pkl#L11-L11)

#### `lineWidth`

```pkl
lineWidth: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/biome/Biome.pkl#L12-L12)

#### `lineEnding`

```pkl
lineEnding: "lf"|"crlf"|"cr"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/biome/Biome.pkl#L13-L13)

#### `attributePosition`

```pkl
attributePosition: "auto"|"multiline"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/biome/Biome.pkl#L14-L14)

#### `custom`

```pkl
custom: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/biome/Biome.pkl#L15-L15)

### `Linter`

#### `enabled`

```pkl
enabled: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/biome/Biome.pkl#L19-L19)

#### `rules`

```pkl
rules: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/biome/Biome.pkl#L20-L20)

#### `custom`

```pkl
custom: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/biome/Biome.pkl#L21-L21)

### `Assist`

#### `enabled`

```pkl
enabled: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/biome/Biome.pkl#L25-L25)

#### `actions`

```pkl
actions: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/biome/Biome.pkl#L26-L26)

#### `custom`

```pkl
custom: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/biome/Biome.pkl#L27-L27)

### `Files`

#### `ignoreUnknown`

```pkl
ignoreUnknown: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/biome/Biome.pkl#L31-L31)

#### `includes`

```pkl
includes: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/biome/Biome.pkl#L32-L32)

#### `custom`

```pkl
custom: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/biome/Biome.pkl#L33-L33)

### `Vcs`

#### `enabled`

```pkl
enabled: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/biome/Biome.pkl#L37-L37)

#### `clientKind`

```pkl
clientKind: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/biome/Biome.pkl#L38-L38)

#### `useIgnoreFile`

```pkl
useIgnoreFile: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/biome/Biome.pkl#L39-L39)

#### `defaultBranch`

```pkl
defaultBranch: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/biome/Biome.pkl#L40-L40)

#### `custom`

```pkl
custom: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/biome/Biome.pkl#L41-L41)

### `LanguageOptions`

#### `formatter`

```pkl
formatter: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/biome/Biome.pkl#L45-L45)

#### `linter`

```pkl
linter: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/biome/Biome.pkl#L46-L46)

#### `parser`

```pkl
parser: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/biome/Biome.pkl#L47-L47)

#### `assist`

```pkl
assist: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/biome/Biome.pkl#L48-L48)

#### `custom`

```pkl
custom: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/biome/Biome.pkl#L49-L49)


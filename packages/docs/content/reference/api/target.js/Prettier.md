---
title: target.js.Prettier
description: A typed authoring surface for `.prettierrc`.
---

# `target.js.Prettier`

A typed authoring surface for `.prettierrc`.

## Fields

#### ``$schema``

```pkl
`$schema`: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/prettier/Prettier.pkl#L11-L11)

#### `semi`

```pkl
semi: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/prettier/Prettier.pkl#L12-L12)

#### `singleQuote`

```pkl
singleQuote: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/prettier/Prettier.pkl#L13-L13)

#### `trailingComma`

```pkl
trailingComma: "all"|"es5"|"none"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/prettier/Prettier.pkl#L14-L14)

#### `printWidth`

```pkl
printWidth: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/prettier/Prettier.pkl#L15-L15)

#### `tabWidth`

```pkl
tabWidth: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/prettier/Prettier.pkl#L16-L16)

#### `useTabs`

```pkl
useTabs: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/prettier/Prettier.pkl#L17-L17)

#### `bracketSpacing`

```pkl
bracketSpacing: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/prettier/Prettier.pkl#L18-L18)

#### `arrowParens`

```pkl
arrowParens: "always"|"avoid"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/prettier/Prettier.pkl#L19-L19)

#### `endOfLine`

```pkl
endOfLine: "lf"|"crlf"|"auto"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/prettier/Prettier.pkl#L20-L20)

#### `plugins`

```pkl
plugins: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/prettier/Prettier.pkl#L21-L21)

#### `overrides`

```pkl
overrides: Listing<Override> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/prettier/Prettier.pkl#L22-L22)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/prettier/Prettier.pkl#L23-L23)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/prettier/Prettier.pkl#L57-L57)

#### `renderer`

```pkl
renderer = new JsonRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/prettier/Prettier.pkl#L58-L58)

## Classes

### `Override`

#### `files`

```pkl
files: String|Listing<String>
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/prettier/Prettier.pkl#L7-L7)

#### `options`

```pkl
options: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/prettier/Prettier.pkl#L8-L8)


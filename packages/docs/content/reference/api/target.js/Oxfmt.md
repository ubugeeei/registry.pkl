---
title: target.js.Oxfmt
description: A typed authoring surface for `.oxfmtrc.json`.
---

# `target.js.Oxfmt`

A typed authoring surface for `.oxfmtrc.json`.

## Fields

#### ``$schema``

```pkl
`$schema`: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/oxfmt/Oxfmt.pkl#L6-L6)

#### `semi`

```pkl
semi: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/oxfmt/Oxfmt.pkl#L7-L7)

#### `singleQuote`

```pkl
singleQuote: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/oxfmt/Oxfmt.pkl#L8-L8)

#### `trailingComma`

```pkl
trailingComma: "all"|"es5"|"none"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/oxfmt/Oxfmt.pkl#L9-L9)

#### `lineWidth`

```pkl
lineWidth: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/oxfmt/Oxfmt.pkl#L10-L10)

#### `quoteProps`

```pkl
quoteProps: "asNeeded"|"consistent"|"preserve"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/oxfmt/Oxfmt.pkl#L11-L11)

#### `bracketSpacing`

```pkl
bracketSpacing: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/oxfmt/Oxfmt.pkl#L12-L12)

#### `arrowParens`

```pkl
arrowParens: "always"|"avoid"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/oxfmt/Oxfmt.pkl#L13-L13)

#### `endOfLine`

```pkl
endOfLine: "lf"|"crlf"|"auto"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/oxfmt/Oxfmt.pkl#L14-L14)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/oxfmt/Oxfmt.pkl#L15-L15)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/oxfmt/Oxfmt.pkl#L34-L34)

#### `renderer`

```pkl
renderer = new JsonRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/oxfmt/Oxfmt.pkl#L35-L35)


---
title: target.python.Ruff
description: A typed authoring surface for `ruff.toml` (or `[tool.ruff]` fragment).
---

# `target.python.Ruff`

A typed authoring surface for `ruff.toml` (or `[tool.ruff]` fragment).

## Fields

#### `lineLength`

```pkl
lineLength: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/ruff/Ruff.pkl#L29-L29)

#### `indentWidth`

```pkl
indentWidth: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/ruff/Ruff.pkl#L30-L30)

#### `targetVersion`

```pkl
targetVersion: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/ruff/Ruff.pkl#L31-L31)

#### `src`

```pkl
src: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/ruff/Ruff.pkl#L32-L32)

#### `exclude`

```pkl
exclude: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/ruff/Ruff.pkl#L33-L33)

#### `extend`

```pkl
extend: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/ruff/Ruff.pkl#L34-L34)

#### `respectGitignore`

```pkl
respectGitignore: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/ruff/Ruff.pkl#L35-L35)

#### `fix`

```pkl
fix: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/ruff/Ruff.pkl#L36-L36)

#### `unsafeFixes`

```pkl
unsafeFixes: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/ruff/Ruff.pkl#L37-L37)

#### `showFixes`

```pkl
showFixes: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/ruff/Ruff.pkl#L38-L38)

#### `preview`

```pkl
preview: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/ruff/Ruff.pkl#L39-L39)

#### `lint`

```pkl
lint: LintOptions? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/ruff/Ruff.pkl#L40-L40)

#### `format`

```pkl
format: FormatOptions? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/ruff/Ruff.pkl#L41-L41)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/ruff/Ruff.pkl#L42-L42)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/ruff/Ruff.pkl#L127-L127)

#### `renderer`

```pkl
renderer = new toml.Renderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/ruff/Ruff.pkl#L128-L128)

## Classes

### `FormatOptions`

#### `quoteStyle`

```pkl
quoteStyle: "double"|"single"|"preserve"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/ruff/Ruff.pkl#L8-L8)

#### `indentStyle`

```pkl
indentStyle: "space"|"tab"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/ruff/Ruff.pkl#L9-L9)

#### `skipMagicTrailingComma`

```pkl
skipMagicTrailingComma: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/ruff/Ruff.pkl#L10-L10)

#### `lineEnding`

```pkl
lineEnding: "auto"|"lf"|"crlf"|"native"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/ruff/Ruff.pkl#L11-L11)

#### `docstringCodeFormat`

```pkl
docstringCodeFormat: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/ruff/Ruff.pkl#L12-L12)

#### `docstringCodeLineLength`

```pkl
docstringCodeLineLength: (Int|"dynamic")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/ruff/Ruff.pkl#L13-L13)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/ruff/Ruff.pkl#L14-L14)

### `LintOptions`

#### `select`

```pkl
select: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/ruff/Ruff.pkl#L18-L18)

#### `ignore`

```pkl
ignore: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/ruff/Ruff.pkl#L19-L19)

#### `extendSelect`

```pkl
extendSelect: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/ruff/Ruff.pkl#L20-L20)

#### `extendIgnore`

```pkl
extendIgnore: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/ruff/Ruff.pkl#L21-L21)

#### `fixable`

```pkl
fixable: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/ruff/Ruff.pkl#L22-L22)

#### `unfixable`

```pkl
unfixable: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/ruff/Ruff.pkl#L23-L23)

#### `perFileIgnores`

```pkl
perFileIgnores: Mapping<String, Listing<String>> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/ruff/Ruff.pkl#L24-L24)

#### `dummyVariableRgx`

```pkl
dummyVariableRgx: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/ruff/Ruff.pkl#L25-L25)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/ruff/Ruff.pkl#L26-L26)


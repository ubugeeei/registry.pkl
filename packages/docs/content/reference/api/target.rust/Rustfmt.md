---
title: target.rust.Rustfmt
description: A typed authoring surface for `rustfmt.toml`.
---

# `target.rust.Rustfmt`

A typed authoring surface for `rustfmt.toml`.

Covers the stable rustfmt options documented at
https://rust-lang.github.io/rustfmt/. Nightly-only options stay reachable
through `extra`.

## Type aliases

### `Edition`

```pkl
typealias Edition = "2015"|"2018"|"2021"|"2024"
```

## Fields

#### `edition`

```pkl
edition: Edition? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/rustfmt/Rustfmt.pkl#L13-L13)

#### `maxWidth`

```pkl
maxWidth: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/rustfmt/Rustfmt.pkl#L14-L14)

#### `hardTabs`

```pkl
hardTabs: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/rustfmt/Rustfmt.pkl#L15-L15)

#### `tabSpaces`

```pkl
tabSpaces: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/rustfmt/Rustfmt.pkl#L16-L16)

#### `newlineStyle`

```pkl
newlineStyle: "Auto"|"Windows"|"Unix"|"Native"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/rustfmt/Rustfmt.pkl#L17-L17)

#### `useSmallHeuristics`

```pkl
useSmallHeuristics: "Default"|"Off"|"Max"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/rustfmt/Rustfmt.pkl#L18-L18)

#### `matchBlockTrailingComma`

```pkl
matchBlockTrailingComma: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/rustfmt/Rustfmt.pkl#L19-L19)

#### `mergeDerives`

```pkl
mergeDerives: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/rustfmt/Rustfmt.pkl#L20-L20)

#### `forceExplicitAbi`

```pkl
forceExplicitAbi: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/rustfmt/Rustfmt.pkl#L21-L21)

#### `emptyItemSingleLine`

```pkl
emptyItemSingleLine: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/rustfmt/Rustfmt.pkl#L22-L22)

#### `structLitSingleLine`

```pkl
structLitSingleLine: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/rustfmt/Rustfmt.pkl#L23-L23)

#### `fnSingleLine`

```pkl
fnSingleLine: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/rustfmt/Rustfmt.pkl#L24-L24)

#### `whereSingleLine`

```pkl
whereSingleLine: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/rustfmt/Rustfmt.pkl#L25-L25)

#### `imports`

```pkl
imports: ImportsLayout? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/rustfmt/Rustfmt.pkl#L26-L26)

#### `reorderImports`

```pkl
reorderImports: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/rustfmt/Rustfmt.pkl#L27-L27)

#### `reorderModules`

```pkl
reorderModules: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/rustfmt/Rustfmt.pkl#L28-L28)

#### `removeNestedParens`

```pkl
removeNestedParens: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/rustfmt/Rustfmt.pkl#L29-L29)

#### `useFieldInitShorthand`

```pkl
useFieldInitShorthand: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/rustfmt/Rustfmt.pkl#L30-L30)

#### `useTryShorthand`

```pkl
useTryShorthand: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/rustfmt/Rustfmt.pkl#L31-L31)

#### `formatStrings`

```pkl
formatStrings: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/rustfmt/Rustfmt.pkl#L32-L32)

#### `formatMacroMatchers`

```pkl
formatMacroMatchers: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/rustfmt/Rustfmt.pkl#L33-L33)

#### `formatMacroBodies`

```pkl
formatMacroBodies: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/rustfmt/Rustfmt.pkl#L34-L34)

#### `hexLiteralCase`

```pkl
hexLiteralCase: "Preserve"|"Upper"|"Lower"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/rustfmt/Rustfmt.pkl#L35-L35)

#### `disableAllFormatting`

```pkl
disableAllFormatting: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/rustfmt/Rustfmt.pkl#L36-L36)

#### `skipChildren`

```pkl
skipChildren: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/rustfmt/Rustfmt.pkl#L37-L37)

#### `verbose`

```pkl
verbose: "Quiet"|"Normal"|"Verbose"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/rustfmt/Rustfmt.pkl#L38-L38)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/rustfmt/Rustfmt.pkl#L39-L39)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/rustfmt/Rustfmt.pkl#L140-L140)

#### `renderer`

```pkl
renderer = new toml.Renderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/rustfmt/Rustfmt.pkl#L141-L141)

## Classes

### `ImportsLayout`

#### `granularity`

```pkl
granularity: "Preserve"|"Crate"|"Module"|"Item"|"One"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/rustfmt/Rustfmt.pkl#L42-L42)

#### `groupImportsBy`

```pkl
groupImportsBy: "Preserve"|"StdExternalCrate"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/rustfmt/Rustfmt.pkl#L43-L43)

#### `imports_indent`

```pkl
imports_indent: "Visual"|"Block"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/rustfmt/Rustfmt.pkl#L44-L44)

#### `imports_layout`

```pkl
imports_layout: "Vertical"|"Mixed"|"HorizontalVertical"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/rustfmt/Rustfmt.pkl#L45-L45)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/rustfmt/Rustfmt.pkl#L46-L46)


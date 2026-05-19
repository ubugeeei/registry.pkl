---
title: target.env.deno.Deno
description: A typed authoring surface for `deno.json`.
---

# `target.env.deno.Deno`

A typed authoring surface for `deno.json`.

## Fields

#### ``$schema``

```pkl
`$schema`: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/deno/Deno.pkl#L31-L31)

#### `name`

```pkl
name: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/deno/Deno.pkl#L32-L32)

#### `version`

```pkl
version: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/deno/Deno.pkl#L33-L33)

#### `tasks`

```pkl
tasks: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/deno/Deno.pkl#L34-L34)

#### `imports`

```pkl
imports: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/deno/Deno.pkl#L35-L35)

#### `scopes`

```pkl
scopes: Mapping<String, Mapping<String, String>> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/deno/Deno.pkl#L36-L36)

#### `compilerOptions`

```pkl
compilerOptions: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/deno/Deno.pkl#L37-L37)

#### `fmt`

```pkl
fmt: FmtOptions = new {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/deno/Deno.pkl#L38-L38)

#### `lint`

```pkl
lint: LintOptions = new {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/deno/Deno.pkl#L39-L39)

#### `test`

```pkl
test: TestOptions = new {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/deno/Deno.pkl#L40-L40)

#### `exclude`

```pkl
exclude: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/deno/Deno.pkl#L41-L41)

#### `unstable`

```pkl
unstable: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/deno/Deno.pkl#L42-L42)

#### `nodeModulesDir`

```pkl
nodeModulesDir: Boolean|String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/deno/Deno.pkl#L43-L43)

#### `lock`

```pkl
lock: Boolean|String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/deno/Deno.pkl#L44-L44)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/deno/Deno.pkl#L45-L45)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/deno/Deno.pkl#L111-L111)

#### `renderer`

```pkl
renderer = new JsonRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/deno/Deno.pkl#L112-L112)

## Classes

### `FmtOptions`

#### `useTabs`

```pkl
useTabs: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/deno/Deno.pkl#L7-L7)

#### `lineWidth`

```pkl
lineWidth: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/deno/Deno.pkl#L8-L8)

#### `indentWidth`

```pkl
indentWidth: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/deno/Deno.pkl#L9-L9)

#### `singleQuote`

```pkl
singleQuote: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/deno/Deno.pkl#L10-L10)

#### `proseWrap`

```pkl
proseWrap: "always"|"never"|"preserve"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/deno/Deno.pkl#L11-L11)

#### `include`

```pkl
include: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/deno/Deno.pkl#L12-L12)

#### `exclude`

```pkl
exclude: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/deno/Deno.pkl#L13-L13)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/deno/Deno.pkl#L14-L14)

### `LintOptions`

#### `include`

```pkl
include: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/deno/Deno.pkl#L18-L18)

#### `exclude`

```pkl
exclude: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/deno/Deno.pkl#L19-L19)

#### `rules`

```pkl
rules: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/deno/Deno.pkl#L20-L20)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/deno/Deno.pkl#L21-L21)

### `TestOptions`

#### `include`

```pkl
include: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/deno/Deno.pkl#L25-L25)

#### `exclude`

```pkl
exclude: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/deno/Deno.pkl#L26-L26)

#### `shuffle`

```pkl
shuffle: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/deno/Deno.pkl#L27-L27)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/deno/Deno.pkl#L28-L28)


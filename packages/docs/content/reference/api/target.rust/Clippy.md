---
title: target.rust.Clippy
description: A typed authoring surface for `clippy.toml`.
---

# `target.rust.Clippy`

A typed authoring surface for `clippy.toml`.

## Fields

#### `msrv`

```pkl
msrv: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/clippy/Clippy.pkl#L7-L7)

#### `avoidBreakingExportedApi`

```pkl
avoidBreakingExportedApi: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/clippy/Clippy.pkl#L8-L8)

#### `allowDbgInTests`

```pkl
allowDbgInTests: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/clippy/Clippy.pkl#L9-L9)

#### `allowPrintInTests`

```pkl
allowPrintInTests: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/clippy/Clippy.pkl#L10-L10)

#### `cognitiveComplexityThreshold`

```pkl
cognitiveComplexityThreshold: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/clippy/Clippy.pkl#L11-L11)

#### `tooManyArgumentsThreshold`

```pkl
tooManyArgumentsThreshold: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/clippy/Clippy.pkl#L12-L12)

#### `typeComplexityThreshold`

```pkl
typeComplexityThreshold: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/clippy/Clippy.pkl#L13-L13)

#### `enumVariantNameThreshold`

```pkl
enumVariantNameThreshold: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/clippy/Clippy.pkl#L14-L14)

#### `singleCharLifetimeNamesThreshold`

```pkl
singleCharLifetimeNamesThreshold: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/clippy/Clippy.pkl#L15-L15)

#### `docValidIdents`

```pkl
docValidIdents: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/clippy/Clippy.pkl#L16-L16)

#### `disallowedNames`

```pkl
disallowedNames: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/clippy/Clippy.pkl#L17-L17)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/clippy/Clippy.pkl#L18-L18)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/clippy/Clippy.pkl#L60-L60)

#### `renderer`

```pkl
renderer = new toml.Renderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/clippy/Clippy.pkl#L61-L61)


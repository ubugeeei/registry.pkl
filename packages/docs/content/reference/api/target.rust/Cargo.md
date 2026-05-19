---
title: target.rust.Cargo
description: A typed authoring surface for `Cargo.toml`.
---

# `target.rust.Cargo`

A typed authoring surface for `Cargo.toml`.

## Type aliases

### `Dependencyish`

```pkl
typealias Dependencyish = String|Dependency
```

## Fields

#### `package`

```pkl
package: PackageSection = new {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo/Cargo.pkl#L60-L60)

#### `workspace`

```pkl
workspace: WorkspaceSection = new {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo/Cargo.pkl#L61-L61)

#### `dependencies`

```pkl
dependencies: Mapping<String, Dependencyish> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo/Cargo.pkl#L62-L62)

#### `devDependencies`

```pkl
devDependencies: Mapping<String, Dependencyish> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo/Cargo.pkl#L63-L63)

#### `buildDependencies`

```pkl
buildDependencies: Mapping<String, Dependencyish> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo/Cargo.pkl#L64-L64)

#### `features`

```pkl
features: Mapping<String, Listing<String>> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo/Cargo.pkl#L65-L65)

#### `profile`

```pkl
profile: Mapping<String, Profile> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo/Cargo.pkl#L66-L66)

#### `lints`

```pkl
lints: Mapping<String, Mapping<String, Any>> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo/Cargo.pkl#L67-L67)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo/Cargo.pkl#L68-L68)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo/Cargo.pkl#L177-L177)

#### `renderer`

```pkl
renderer = new toml.Renderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo/Cargo.pkl#L178-L178)

## Classes

### `PackageSection`

#### `name`

```pkl
name: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo/Cargo.pkl#L10-L10)

#### `version`

```pkl
version: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo/Cargo.pkl#L11-L11)

#### `edition`

```pkl
edition: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo/Cargo.pkl#L12-L12)

#### `description`

```pkl
description: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo/Cargo.pkl#L13-L13)

#### `rustVersion`

```pkl
rustVersion: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo/Cargo.pkl#L14-L14)

#### `license`

```pkl
license: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo/Cargo.pkl#L15-L15)

#### `repository`

```pkl
repository: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo/Cargo.pkl#L16-L16)

#### `readme`

```pkl
readme: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo/Cargo.pkl#L17-L17)

#### `publish`

```pkl
publish: Boolean|Listing<String>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo/Cargo.pkl#L18-L18)

#### `keywords`

```pkl
keywords: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo/Cargo.pkl#L19-L19)

#### `categories`

```pkl
categories: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo/Cargo.pkl#L20-L20)

#### `include`

```pkl
include: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo/Cargo.pkl#L21-L21)

#### `exclude`

```pkl
exclude: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo/Cargo.pkl#L22-L22)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo/Cargo.pkl#L23-L23)

### `WorkspaceSection`

#### `members`

```pkl
members: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo/Cargo.pkl#L27-L27)

#### `exclude`

```pkl
exclude: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo/Cargo.pkl#L28-L28)

#### `resolver`

```pkl
resolver: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo/Cargo.pkl#L29-L29)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo/Cargo.pkl#L30-L30)

### `Dependency`

#### `version`

```pkl
version: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo/Cargo.pkl#L34-L34)

#### `path`

```pkl
path: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo/Cargo.pkl#L35-L35)

#### `git`

```pkl
git: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo/Cargo.pkl#L36-L36)

#### `branch`

```pkl
branch: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo/Cargo.pkl#L37-L37)

#### `tag`

```pkl
tag: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo/Cargo.pkl#L38-L38)

#### `rev`

```pkl
rev: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo/Cargo.pkl#L39-L39)

#### `package`

```pkl
package: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo/Cargo.pkl#L40-L40)

#### `workspace`

```pkl
workspace: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo/Cargo.pkl#L41-L41)

#### `defaultFeatures`

```pkl
defaultFeatures: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo/Cargo.pkl#L42-L42)

#### `optional`

```pkl
optional: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo/Cargo.pkl#L43-L43)

#### `registry`

```pkl
registry: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo/Cargo.pkl#L44-L44)

#### `features`

```pkl
features: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo/Cargo.pkl#L45-L45)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo/Cargo.pkl#L46-L46)

### `Profile`

#### `optLevel`

```pkl
optLevel: Int|String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo/Cargo.pkl#L50-L50)

#### `debug`

```pkl
debug: Boolean|Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo/Cargo.pkl#L51-L51)

#### `lto`

```pkl
lto: Boolean|String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo/Cargo.pkl#L52-L52)

#### `codegenUnits`

```pkl
codegenUnits: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo/Cargo.pkl#L53-L53)

#### `panic`

```pkl
panic: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo/Cargo.pkl#L54-L54)

#### `strip`

```pkl
strip: Boolean|String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo/Cargo.pkl#L55-L55)

#### `incremental`

```pkl
incremental: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo/Cargo.pkl#L56-L56)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.rust/cargo/Cargo.pkl#L57-L57)


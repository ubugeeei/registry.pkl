---
title: target.python.uv.Uv
description: A typed authoring surface for the `[tool.uv]` block of `pyproject.toml`.
---

# `target.python.uv.Uv`

A typed authoring surface for the `[tool.uv]` block of `pyproject.toml`.

uv (https://docs.astral.sh/uv) is Astral's package manager + builder
+ venv tool. Its config lives under `[tool.uv]` and adds index
servers, dev dependencies, and resolution settings on top of the
PEP 621 `[project]` block.

Reference: https://docs.astral.sh/uv/reference/settings/

## Fields

#### `dev_dependencies`

```pkl
dev_dependencies: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/uv/Uv.pkl#L41-L41)

#### `override_dependencies`

```pkl
override_dependencies: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/uv/Uv.pkl#L42-L42)

#### `constraint_dependencies`

```pkl
constraint_dependencies: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/uv/Uv.pkl#L43-L43)

#### `build_constraint_dependencies`

```pkl
build_constraint_dependencies: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/uv/Uv.pkl#L44-L44)

#### `managed`

```pkl
managed: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/uv/Uv.pkl#L45-L45)

#### `package`

```pkl
package: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/uv/Uv.pkl#L46-L46)

#### `indexes`

```pkl
indexes: Listing<Index> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/uv/Uv.pkl#L47-L47)

#### `sources`

```pkl
sources: Mapping<String, Source> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/uv/Uv.pkl#L48-L48)

#### `workspace`

```pkl
workspace: Workspace? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/uv/Uv.pkl#L49-L49)

#### `resolution`

```pkl
resolution: ("highest"|"lowest"|"lowest-direct")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/uv/Uv.pkl#L50-L50)

#### `preReleaseStrategy`

```pkl
preReleaseStrategy: ("disallow"|"if-necessary"|"explicit"|"if-necessary-or-explicit"|"allow")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/uv/Uv.pkl#L51-L51)

#### `linkMode`

```pkl
linkMode: ("clone"|"copy"|"hardlink"|"symlink")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/uv/Uv.pkl#L52-L52)

#### `compileBytecode`

```pkl
compileBytecode: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/uv/Uv.pkl#L53-L53)

#### `noBuildIsolation`

```pkl
noBuildIsolation: (Boolean|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/uv/Uv.pkl#L54-L54)

#### `noBuild`

```pkl
noBuild: (Boolean|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/uv/Uv.pkl#L55-L55)

#### `noBinary`

```pkl
noBinary: (Boolean|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/uv/Uv.pkl#L56-L56)

#### `preview`

```pkl
preview: (Boolean|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/uv/Uv.pkl#L57-L57)

#### `environments`

```pkl
environments: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/uv/Uv.pkl#L58-L58)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/uv/Uv.pkl#L59-L59)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/uv/Uv.pkl#L163-L163)

#### `renderer`

```pkl
renderer = new toml.Renderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/uv/Uv.pkl#L164-L164)

## Classes

### `Index`

#### `name`

```pkl
name: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/uv/Uv.pkl#L15-L15)

#### `url`

```pkl
url: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/uv/Uv.pkl#L16-L16)

#### `explicit`

```pkl
explicit: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/uv/Uv.pkl#L17-L17)

#### ``default``

```pkl
`default`: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/uv/Uv.pkl#L18-L18)

#### `publishUrl`

```pkl
publishUrl: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/uv/Uv.pkl#L19-L19)

### `Source`

#### `index`

```pkl
index: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/uv/Uv.pkl#L23-L23)

#### `url`

```pkl
url: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/uv/Uv.pkl#L24-L24)

#### `git`

```pkl
git: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/uv/Uv.pkl#L25-L25)

#### `branch`

```pkl
branch: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/uv/Uv.pkl#L26-L26)

#### `tag`

```pkl
tag: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/uv/Uv.pkl#L27-L27)

#### `rev`

```pkl
rev: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/uv/Uv.pkl#L28-L28)

#### `subdirectory`

```pkl
subdirectory: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/uv/Uv.pkl#L29-L29)

#### `path`

```pkl
path: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/uv/Uv.pkl#L30-L30)

#### `workspace`

```pkl
workspace: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/uv/Uv.pkl#L31-L31)

#### `marker`

```pkl
marker: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/uv/Uv.pkl#L32-L32)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/uv/Uv.pkl#L33-L33)

### `Workspace`

#### `members`

```pkl
members: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/uv/Uv.pkl#L37-L37)

#### `exclude`

```pkl
exclude: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/uv/Uv.pkl#L38-L38)


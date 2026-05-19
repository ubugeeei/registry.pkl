---
title: target.python.poetry.Poetry
description: A typed authoring surface for the `[tool.poetry]` block of `pyproject.toml`.
---

# `target.python.poetry.Poetry`

A typed authoring surface for the `[tool.poetry]` block of `pyproject.toml`.

Poetry historically lived in `[tool.poetry]`; under PEP 621 it
migrated most metadata into `[project]`. This module models the
`[tool.poetry]` shape — readers should prefer
`@target.python/pyproject/PyProject.pkl` for the standard
project metadata and use this module only for Poetry-specific
extensions such as `[tool.poetry.dependencies]` and `groups`.

Reference: https://python-poetry.org/docs/pyproject/

## Fields

#### `name`

```pkl
name: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/poetry/Poetry.pkl#L45-L45)

#### `version`

```pkl
version: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/poetry/Poetry.pkl#L46-L46)

#### `description`

```pkl
description: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/poetry/Poetry.pkl#L47-L47)

#### `license`

```pkl
license: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/poetry/Poetry.pkl#L48-L48)

#### `authors`

```pkl
authors: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/poetry/Poetry.pkl#L49-L49)

#### `maintainers`

```pkl
maintainers: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/poetry/Poetry.pkl#L50-L50)

#### `readme`

```pkl
readme: (String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/poetry/Poetry.pkl#L51-L51)

#### `homepage`

```pkl
homepage: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/poetry/Poetry.pkl#L52-L52)

#### `repository`

```pkl
repository: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/poetry/Poetry.pkl#L53-L53)

#### `documentation`

```pkl
documentation: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/poetry/Poetry.pkl#L54-L54)

#### `keywords`

```pkl
keywords: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/poetry/Poetry.pkl#L55-L55)

#### `classifiers`

```pkl
classifiers: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/poetry/Poetry.pkl#L56-L56)

#### `packages`

```pkl
packages: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/poetry/Poetry.pkl#L57-L57)

#### `include`

```pkl
include: Listing<String|Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/poetry/Poetry.pkl#L58-L58)

#### `exclude`

```pkl
exclude: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/poetry/Poetry.pkl#L59-L59)

#### `dependencies`

```pkl
dependencies: Mapping<String, String|Dependency> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/poetry/Poetry.pkl#L60-L60)

#### `groups`

```pkl
groups: Mapping<String, Group> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/poetry/Poetry.pkl#L61-L61)

#### `scripts`

```pkl
scripts: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/poetry/Poetry.pkl#L62-L62)

#### `plugins`

```pkl
plugins: Mapping<String, Mapping<String, String>> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/poetry/Poetry.pkl#L63-L63)

#### `urls`

```pkl
urls: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/poetry/Poetry.pkl#L64-L64)

#### `sources`

```pkl
sources: Listing<Source> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/poetry/Poetry.pkl#L65-L65)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/poetry/Poetry.pkl#L66-L66)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/poetry/Poetry.pkl#L176-L176)

#### `renderer`

```pkl
renderer = new toml.Renderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/poetry/Poetry.pkl#L177-L177)

## Classes

### `Dependency`

#### `version`

```pkl
version: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/poetry/Poetry.pkl#L17-L17)

#### `extras`

```pkl
extras: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/poetry/Poetry.pkl#L18-L18)

#### `python`

```pkl
python: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/poetry/Poetry.pkl#L19-L19)

#### `source`

```pkl
source: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/poetry/Poetry.pkl#L20-L20)

#### `markers`

```pkl
markers: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/poetry/Poetry.pkl#L21-L21)

#### `optional`

```pkl
optional: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/poetry/Poetry.pkl#L22-L22)

#### `develop`

```pkl
develop: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/poetry/Poetry.pkl#L23-L23)

#### `path`

```pkl
path: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/poetry/Poetry.pkl#L24-L24)

#### `url`

```pkl
url: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/poetry/Poetry.pkl#L25-L25)

#### `git`

```pkl
git: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/poetry/Poetry.pkl#L26-L26)

#### `branch`

```pkl
branch: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/poetry/Poetry.pkl#L27-L27)

#### `tag`

```pkl
tag: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/poetry/Poetry.pkl#L28-L28)

#### `rev`

```pkl
rev: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/poetry/Poetry.pkl#L29-L29)

#### `subdirectory`

```pkl
subdirectory: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/poetry/Poetry.pkl#L30-L30)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/poetry/Poetry.pkl#L31-L31)

### `Group`

#### `optional`

```pkl
optional: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/poetry/Poetry.pkl#L35-L35)

#### `dependencies`

```pkl
dependencies: Mapping<String, String|Dependency> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/poetry/Poetry.pkl#L36-L36)

### `Source`

#### `name`

```pkl
name: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/poetry/Poetry.pkl#L40-L40)

#### `url`

```pkl
url: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/poetry/Poetry.pkl#L41-L41)

#### `priority`

```pkl
priority: ("default"|"primary"|"supplemental"|"explicit")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/poetry/Poetry.pkl#L42-L42)


---
title: target.python.pyproject.PyProject
description: A typed authoring surface for `pyproject.toml` (PEP 621).
---

# `target.python.pyproject.PyProject`

A typed authoring surface for `pyproject.toml` (PEP 621).

## Fields

#### `buildSystem`

```pkl
buildSystem: BuildSystem? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/pyproject/PyProject.pkl#L41-L41)

#### `project`

```pkl
project: Project? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/pyproject/PyProject.pkl#L42-L42)

#### `tool`

```pkl
tool: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/pyproject/PyProject.pkl#L43-L43)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/pyproject/PyProject.pkl#L44-L44)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/pyproject/PyProject.pkl#L142-L142)

#### `renderer`

```pkl
renderer = new toml.Renderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/pyproject/PyProject.pkl#L143-L143)

## Classes

### `Author`

#### `name`

```pkl
name: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/pyproject/PyProject.pkl#L8-L8)

#### `email`

```pkl
email: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/pyproject/PyProject.pkl#L9-L9)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/pyproject/PyProject.pkl#L10-L10)

### `BuildSystem`

#### `requires`

```pkl
requires: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/pyproject/PyProject.pkl#L14-L14)

#### `buildBackend`

```pkl
buildBackend: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/pyproject/PyProject.pkl#L15-L15)

#### `backendPath`

```pkl
backendPath: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/pyproject/PyProject.pkl#L16-L16)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/pyproject/PyProject.pkl#L17-L17)

### `Project`

#### `name`

```pkl
name: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/pyproject/PyProject.pkl#L21-L21)

#### `version`

```pkl
version: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/pyproject/PyProject.pkl#L22-L22)

#### `description`

```pkl
description: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/pyproject/PyProject.pkl#L23-L23)

#### `readme`

```pkl
readme: (String|Mapping<String, Any>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/pyproject/PyProject.pkl#L24-L24)

#### `requiresPython`

```pkl
requiresPython: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/pyproject/PyProject.pkl#L25-L25)

#### `license`

```pkl
license: (String|Mapping<String, Any>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/pyproject/PyProject.pkl#L26-L26)

#### `authors`

```pkl
authors: Listing<Author> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/pyproject/PyProject.pkl#L27-L27)

#### `maintainers`

```pkl
maintainers: Listing<Author> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/pyproject/PyProject.pkl#L28-L28)

#### `keywords`

```pkl
keywords: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/pyproject/PyProject.pkl#L29-L29)

#### `classifiers`

```pkl
classifiers: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/pyproject/PyProject.pkl#L30-L30)

#### `dependencies`

```pkl
dependencies: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/pyproject/PyProject.pkl#L31-L31)

#### `optionalDependencies`

```pkl
optionalDependencies: Mapping<String, Listing<String>> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/pyproject/PyProject.pkl#L32-L32)

#### `scripts`

```pkl
scripts: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/pyproject/PyProject.pkl#L33-L33)

#### `guiScripts`

```pkl
guiScripts: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/pyproject/PyProject.pkl#L34-L34)

#### `entryPoints`

```pkl
entryPoints: Mapping<String, Mapping<String, String>> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/pyproject/PyProject.pkl#L35-L35)

#### `urls`

```pkl
urls: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/pyproject/PyProject.pkl#L36-L36)

#### `dynamic`

```pkl
dynamic: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/pyproject/PyProject.pkl#L37-L37)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/pyproject/PyProject.pkl#L38-L38)


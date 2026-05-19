---
title: target.python.pytest.Pytest
description: A typed authoring surface for the `[tool.pytest.ini_options]` table or
---

# `target.python.pytest.Pytest`

A typed authoring surface for the `[tool.pytest.ini_options]` table or
the equivalent `pytest.ini` configuration.

## Fields

#### `minversion`

```pkl
minversion: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/pytest/Pytest.pkl#L8-L8)

#### `addopts`

```pkl
addopts: (String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/pytest/Pytest.pkl#L9-L9)

#### `testpaths`

```pkl
testpaths: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/pytest/Pytest.pkl#L10-L10)

#### `pythonFiles`

```pkl
pythonFiles: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/pytest/Pytest.pkl#L11-L11)

#### `pythonClasses`

```pkl
pythonClasses: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/pytest/Pytest.pkl#L12-L12)

#### `pythonFunctions`

```pkl
pythonFunctions: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/pytest/Pytest.pkl#L13-L13)

#### `markers`

```pkl
markers: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/pytest/Pytest.pkl#L14-L14)

#### `filterwarnings`

```pkl
filterwarnings: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/pytest/Pytest.pkl#L15-L15)

#### `xfailStrict`

```pkl
xfailStrict: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/pytest/Pytest.pkl#L16-L16)

#### `logCli`

```pkl
logCli: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/pytest/Pytest.pkl#L17-L17)

#### `logCliLevel`

```pkl
logCliLevel: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/pytest/Pytest.pkl#L18-L18)

#### `logCliFormat`

```pkl
logCliFormat: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/pytest/Pytest.pkl#L19-L19)

#### `logCliDateFormat`

```pkl
logCliDateFormat: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/pytest/Pytest.pkl#L20-L20)

#### `norecursedirs`

```pkl
norecursedirs: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/pytest/Pytest.pkl#L21-L21)

#### `requiredPlugins`

```pkl
requiredPlugins: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/pytest/Pytest.pkl#L22-L22)

#### `emptyParameterSetMark`

```pkl
emptyParameterSetMark: "skip"|"xfail"|"fail_at_collect"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/pytest/Pytest.pkl#L23-L23)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/pytest/Pytest.pkl#L24-L24)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/pytest/Pytest.pkl#L71-L71)

#### `renderer`

```pkl
renderer = new toml.Renderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.python/pytest/Pytest.pkl#L72-L72)


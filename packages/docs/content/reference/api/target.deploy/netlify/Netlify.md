---
title: target.deploy.netlify.Netlify
description: A typed authoring surface for `netlify.toml`.
---

# `target.deploy.netlify.Netlify`

A typed authoring surface for `netlify.toml`.

## Fields

#### `build`

```pkl
build: BuildSection? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/netlify/Netlify.pkl#L67-L67)

#### `context`

```pkl
context: Mapping<String, Context> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/netlify/Netlify.pkl#L68-L68)

#### `redirects`

```pkl
redirects: Listing<Redirect> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/netlify/Netlify.pkl#L69-L69)

#### `headers`

```pkl
headers: Listing<HeaderBlock> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/netlify/Netlify.pkl#L70-L70)

#### `functions`

```pkl
functions: Mapping<String, FunctionConfig> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/netlify/Netlify.pkl#L71-L71)

#### `edgeFunctions`

```pkl
edgeFunctions: Listing<EdgeFunction> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/netlify/Netlify.pkl#L72-L72)

#### `plugins`

```pkl
plugins: Listing<Plugin> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/netlify/Netlify.pkl#L73-L73)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/netlify/Netlify.pkl#L74-L74)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/netlify/Netlify.pkl#L214-L214)

#### `renderer`

```pkl
renderer = new toml.Renderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/netlify/Netlify.pkl#L215-L215)

## Classes

### `BuildSection`

#### `base`

```pkl
base: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/netlify/Netlify.pkl#L8-L8)

#### `publish`

```pkl
publish: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/netlify/Netlify.pkl#L9-L9)

#### `command`

```pkl
command: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/netlify/Netlify.pkl#L10-L10)

#### `ignore`

```pkl
ignore: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/netlify/Netlify.pkl#L11-L11)

#### `functions`

```pkl
functions: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/netlify/Netlify.pkl#L12-L12)

#### `edgeFunctions`

```pkl
edgeFunctions: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/netlify/Netlify.pkl#L13-L13)

#### `environment`

```pkl
environment: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/netlify/Netlify.pkl#L14-L14)

#### `processing`

```pkl
processing: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/netlify/Netlify.pkl#L15-L15)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/netlify/Netlify.pkl#L16-L16)

### `Context`

#### `command`

```pkl
command: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/netlify/Netlify.pkl#L20-L20)

#### `publish`

```pkl
publish: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/netlify/Netlify.pkl#L21-L21)

#### `environment`

```pkl
environment: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/netlify/Netlify.pkl#L22-L22)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/netlify/Netlify.pkl#L23-L23)

### `Redirect`

#### `from`

```pkl
from: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/netlify/Netlify.pkl#L27-L27)

#### `to`

```pkl
to: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/netlify/Netlify.pkl#L28-L28)

#### `status`

```pkl
status: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/netlify/Netlify.pkl#L29-L29)

#### `force`

```pkl
force: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/netlify/Netlify.pkl#L30-L30)

#### `headers`

```pkl
headers: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/netlify/Netlify.pkl#L31-L31)

#### `conditions`

```pkl
conditions: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/netlify/Netlify.pkl#L32-L32)

#### `query`

```pkl
query: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/netlify/Netlify.pkl#L33-L33)

#### `signed`

```pkl
signed: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/netlify/Netlify.pkl#L34-L34)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/netlify/Netlify.pkl#L35-L35)

### `HeaderBlock`

#### ``for``

```pkl
`for`: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/netlify/Netlify.pkl#L39-L39)

#### `values`

```pkl
values: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/netlify/Netlify.pkl#L40-L40)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/netlify/Netlify.pkl#L41-L41)

### `EdgeFunction`

#### `path`

```pkl
path: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/netlify/Netlify.pkl#L45-L45)

#### ``function``

```pkl
`function`: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/netlify/Netlify.pkl#L46-L46)

#### `cache`

```pkl
cache: ("manual"|"off")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/netlify/Netlify.pkl#L47-L47)

#### `excludedPath`

```pkl
excludedPath: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/netlify/Netlify.pkl#L48-L48)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/netlify/Netlify.pkl#L49-L49)

### `FunctionConfig`

#### `externalNodeModules`

```pkl
externalNodeModules: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/netlify/Netlify.pkl#L53-L53)

#### `includedFiles`

```pkl
includedFiles: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/netlify/Netlify.pkl#L54-L54)

#### `ignoredNodeModules`

```pkl
ignoredNodeModules: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/netlify/Netlify.pkl#L55-L55)

#### `nodeBundler`

```pkl
nodeBundler: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/netlify/Netlify.pkl#L56-L56)

#### `schedule`

```pkl
schedule: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/netlify/Netlify.pkl#L57-L57)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/netlify/Netlify.pkl#L58-L58)

### `Plugin`

#### `package`

```pkl
package: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/netlify/Netlify.pkl#L62-L62)

#### `inputs`

```pkl
inputs: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/netlify/Netlify.pkl#L63-L63)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/netlify/Netlify.pkl#L64-L64)


---
title: target.deploy.vercel.Vercel
description: A typed authoring surface for `vercel.json`.
---

# `target.deploy.vercel.Vercel`

A typed authoring surface for `vercel.json`.

## Fields

#### ``$schema``

```pkl
`$schema`: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/vercel/Vercel.pkl#L49-L49)

#### `version`

```pkl
version: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/vercel/Vercel.pkl#L50-L50)

#### `name`

```pkl
name: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/vercel/Vercel.pkl#L51-L51)

#### `public`

```pkl
public: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/vercel/Vercel.pkl#L52-L52)

#### `cleanUrls`

```pkl
cleanUrls: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/vercel/Vercel.pkl#L53-L53)

#### `trailingSlash`

```pkl
trailingSlash: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/vercel/Vercel.pkl#L54-L54)

#### `framework`

```pkl
framework: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/vercel/Vercel.pkl#L55-L55)

#### `buildCommand`

```pkl
buildCommand: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/vercel/Vercel.pkl#L56-L56)

#### `devCommand`

```pkl
devCommand: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/vercel/Vercel.pkl#L57-L57)

#### `outputDirectory`

```pkl
outputDirectory: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/vercel/Vercel.pkl#L58-L58)

#### `installCommand`

```pkl
installCommand: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/vercel/Vercel.pkl#L59-L59)

#### `ignoreCommand`

```pkl
ignoreCommand: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/vercel/Vercel.pkl#L60-L60)

#### `rootDirectory`

```pkl
rootDirectory: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/vercel/Vercel.pkl#L61-L61)

#### `regions`

```pkl
regions: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/vercel/Vercel.pkl#L62-L62)

#### `headers`

```pkl
headers: Listing<Header> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/vercel/Vercel.pkl#L63-L63)

#### `rewrites`

```pkl
rewrites: Listing<Rewrite> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/vercel/Vercel.pkl#L64-L64)

#### `redirects`

```pkl
redirects: Listing<Redirect> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/vercel/Vercel.pkl#L65-L65)

#### `crons`

```pkl
crons: Listing<Crons> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/vercel/Vercel.pkl#L66-L66)

#### `env`

```pkl
env: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/vercel/Vercel.pkl#L67-L67)

#### `build`

```pkl
build: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/vercel/Vercel.pkl#L68-L68)

#### `functions`

```pkl
functions: Mapping<String, FunctionConfig> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/vercel/Vercel.pkl#L69-L69)

#### `git`

```pkl
git: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/vercel/Vercel.pkl#L70-L70)

#### `github`

```pkl
github: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/vercel/Vercel.pkl#L71-L71)

#### `images`

```pkl
images: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/vercel/Vercel.pkl#L72-L72)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/vercel/Vercel.pkl#L73-L73)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/vercel/Vercel.pkl#L213-L213)

#### `renderer`

```pkl
renderer = new JsonRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/vercel/Vercel.pkl#L214-L214)

## Classes

### `Header`

#### `source`

```pkl
source: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/vercel/Vercel.pkl#L7-L7)

#### `headers`

```pkl
headers: Listing<Mapping<String, String>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/vercel/Vercel.pkl#L8-L8)

#### `has`

```pkl
has: Listing<Mapping<String, String>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/vercel/Vercel.pkl#L9-L9)

#### `missing`

```pkl
missing: Listing<Mapping<String, String>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/vercel/Vercel.pkl#L10-L10)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/vercel/Vercel.pkl#L11-L11)

### `Rewrite`

#### `source`

```pkl
source: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/vercel/Vercel.pkl#L15-L15)

#### `destination`

```pkl
destination: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/vercel/Vercel.pkl#L16-L16)

#### `has`

```pkl
has: Listing<Mapping<String, String>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/vercel/Vercel.pkl#L17-L17)

#### `missing`

```pkl
missing: Listing<Mapping<String, String>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/vercel/Vercel.pkl#L18-L18)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/vercel/Vercel.pkl#L19-L19)

### `Redirect`

#### `source`

```pkl
source: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/vercel/Vercel.pkl#L23-L23)

#### `destination`

```pkl
destination: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/vercel/Vercel.pkl#L24-L24)

#### `permanent`

```pkl
permanent: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/vercel/Vercel.pkl#L25-L25)

#### `statusCode`

```pkl
statusCode: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/vercel/Vercel.pkl#L26-L26)

#### `has`

```pkl
has: Listing<Mapping<String, String>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/vercel/Vercel.pkl#L27-L27)

#### `missing`

```pkl
missing: Listing<Mapping<String, String>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/vercel/Vercel.pkl#L28-L28)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/vercel/Vercel.pkl#L29-L29)

### `Crons`

#### `path`

```pkl
path: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/vercel/Vercel.pkl#L33-L33)

#### `schedule`

```pkl
schedule: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/vercel/Vercel.pkl#L34-L34)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/vercel/Vercel.pkl#L35-L35)

### `FunctionConfig`

#### `runtime`

```pkl
runtime: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/vercel/Vercel.pkl#L39-L39)

#### `memory`

```pkl
memory: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/vercel/Vercel.pkl#L40-L40)

#### `maxDuration`

```pkl
maxDuration: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/vercel/Vercel.pkl#L41-L41)

#### `includeFiles`

```pkl
includeFiles: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/vercel/Vercel.pkl#L42-L42)

#### `excludeFiles`

```pkl
excludeFiles: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/vercel/Vercel.pkl#L43-L43)

#### `regions`

```pkl
regions: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/vercel/Vercel.pkl#L44-L44)

#### `architecture`

```pkl
architecture: ("x86_64"|"arm64")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/vercel/Vercel.pkl#L45-L45)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/vercel/Vercel.pkl#L46-L46)


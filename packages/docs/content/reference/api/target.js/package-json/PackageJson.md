---
title: target.js.package-json.PackageJson
description: A typed authoring surface for `package.json`.
---

# `target.js.package-json.PackageJson`

A typed authoring surface for `package.json`.

## Type aliases

### `Personish`

```pkl
typealias Personish = String|Person
```

### `Repositoryish`

```pkl
typealias Repositoryish = String|Repository
```

### `Bugsish`

```pkl
typealias Bugsish = String|Bugs
```

## Fields

#### ``$schema``

```pkl
`$schema`: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/package-json/PackageJson.pkl#L27-L27)

#### `name`

```pkl
name: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/package-json/PackageJson.pkl#L28-L28)

#### `version`

```pkl
version: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/package-json/PackageJson.pkl#L29-L29)

#### `private`

```pkl
private: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/package-json/PackageJson.pkl#L30-L30)

#### `description`

```pkl
description: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/package-json/PackageJson.pkl#L31-L31)

#### `packageManager`

```pkl
packageManager: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/package-json/PackageJson.pkl#L32-L32)

#### `type`

```pkl
type: "module"|"commonjs"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/package-json/PackageJson.pkl#L33-L33)

#### `license`

```pkl
license: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/package-json/PackageJson.pkl#L34-L34)

#### `homepage`

```pkl
homepage: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/package-json/PackageJson.pkl#L35-L35)

#### `repository`

```pkl
repository: Repositoryish? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/package-json/PackageJson.pkl#L36-L36)

#### `bugs`

```pkl
bugs: Bugsish? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/package-json/PackageJson.pkl#L37-L37)

#### `author`

```pkl
author: Personish? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/package-json/PackageJson.pkl#L38-L38)

#### `contributors`

```pkl
contributors: Listing<Personish> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/package-json/PackageJson.pkl#L39-L39)

#### `keywords`

```pkl
keywords: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/package-json/PackageJson.pkl#L40-L40)

#### `files`

```pkl
files: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/package-json/PackageJson.pkl#L41-L41)

#### `workspaces`

```pkl
workspaces: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/package-json/PackageJson.pkl#L42-L42)

#### `engines`

```pkl
engines: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/package-json/PackageJson.pkl#L43-L43)

#### `scripts`

```pkl
scripts: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/package-json/PackageJson.pkl#L44-L44)

#### `dependencies`

```pkl
dependencies: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/package-json/PackageJson.pkl#L45-L45)

#### `devDependencies`

```pkl
devDependencies: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/package-json/PackageJson.pkl#L46-L46)

#### `peerDependencies`

```pkl
peerDependencies: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/package-json/PackageJson.pkl#L47-L47)

#### `optionalDependencies`

```pkl
optionalDependencies: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/package-json/PackageJson.pkl#L48-L48)

#### `imports`

```pkl
imports: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/package-json/PackageJson.pkl#L49-L49)

#### `config`

```pkl
config: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/package-json/PackageJson.pkl#L50-L50)

#### `pnpm`

```pkl
pnpm: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/package-json/PackageJson.pkl#L51-L51)

#### `publishConfig`

```pkl
publishConfig: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/package-json/PackageJson.pkl#L52-L52)

#### `exports`

```pkl
exports: Any? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/package-json/PackageJson.pkl#L53-L53)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/package-json/PackageJson.pkl#L54-L54)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/package-json/PackageJson.pkl#L157-L157)

#### `renderer`

```pkl
renderer = new JsonRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/package-json/PackageJson.pkl#L158-L158)

## Classes

### `Person`

#### `name`

```pkl
name: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/package-json/PackageJson.pkl#L11-L11)

#### `email`

```pkl
email: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/package-json/PackageJson.pkl#L12-L12)

#### `url`

```pkl
url: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/package-json/PackageJson.pkl#L13-L13)

### `Repository`

#### `type`

```pkl
type: String = "git"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/package-json/PackageJson.pkl#L17-L17)

#### `url`

```pkl
url: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/package-json/PackageJson.pkl#L18-L18)

#### `directory`

```pkl
directory: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/package-json/PackageJson.pkl#L19-L19)

### `Bugs`

#### `url`

```pkl
url: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/package-json/PackageJson.pkl#L23-L23)

#### `email`

```pkl
email: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/package-json/PackageJson.pkl#L24-L24)


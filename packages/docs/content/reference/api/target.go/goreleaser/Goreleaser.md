---
title: target.go.goreleaser.Goreleaser
description: A typed authoring surface for `.goreleaser.yml`.
---

# `target.go.goreleaser.Goreleaser`

A typed authoring surface for `.goreleaser.yml`.

## Fields

#### `projectName`

```pkl
projectName: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L73-L73)

#### `version`

```pkl
version: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L74-L74)

#### ``before``

```pkl
`before`: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L75-L75)

#### `builds`

```pkl
builds: Listing<Build> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L76-L76)

#### `archives`

```pkl
archives: Listing<Archive> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L77-L77)

#### `checksum`

```pkl
checksum: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L78-L78)

#### `snapshot`

```pkl
snapshot: Snapshot? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L79-L79)

#### `changelog`

```pkl
changelog: Changelog? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L80-L80)

#### `release`

```pkl
release: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L81-L81)

#### `brews`

```pkl
brews: Listing<Brew> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L82-L82)

#### `nfpms`

```pkl
nfpms: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L83-L83)

#### `dockers`

```pkl
dockers: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L84-L84)

#### `sboms`

```pkl
sboms: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L85-L85)

#### `signs`

```pkl
signs: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L86-L86)

#### `universalBinaries`

```pkl
universalBinaries: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L87-L87)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L88-L88)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L272-L272)

#### `renderer`

```pkl
renderer = new YamlRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L273-L273)

## Classes

### `Build`

#### `id`

```pkl
id: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L7-L7)

#### `main`

```pkl
main: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L8-L8)

#### `binary`

```pkl
binary: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L9-L9)

#### `dir`

```pkl
dir: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L10-L10)

#### `goos`

```pkl
goos: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L11-L11)

#### `goarch`

```pkl
goarch: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L12-L12)

#### `goarm`

```pkl
goarm: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L13-L13)

#### `gomips`

```pkl
gomips: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L14-L14)

#### `ignore`

```pkl
ignore: Listing<Mapping<String, String>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L15-L15)

#### `env`

```pkl
env: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L16-L16)

#### `flags`

```pkl
flags: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L17-L17)

#### `ldflags`

```pkl
ldflags: (String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L18-L18)

#### `tags`

```pkl
tags: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L19-L19)

#### `hooks`

```pkl
hooks: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L20-L20)

#### `buildmode`

```pkl
buildmode: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L21-L21)

#### `noUniqueDistDir`

```pkl
noUniqueDistDir: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L22-L22)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L23-L23)

### `Archive`

#### `id`

```pkl
id: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L27-L27)

#### `ids`

```pkl
ids: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L28-L28)

#### `formats`

```pkl
formats: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L29-L29)

#### `nameTemplate`

```pkl
nameTemplate: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L30-L30)

#### `wrapInDirectory`

```pkl
wrapInDirectory: (Boolean|String)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L31-L31)

#### `files`

```pkl
files: Listing<String|Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L32-L32)

#### `formatOverrides`

```pkl
formatOverrides: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L33-L33)

#### `builds`

```pkl
builds: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L34-L34)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L35-L35)

### `Snapshot`

#### `nameTemplate`

```pkl
nameTemplate: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L39-L39)

#### `versionTemplate`

```pkl
versionTemplate: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L40-L40)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L41-L41)

### `Changelog`

#### `use`

```pkl
use: ("git"|"github"|"gitlab")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L45-L45)

#### `sort`

```pkl
sort: ("asc"|"desc"|"")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L46-L46)

#### `skip`

```pkl
skip: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L47-L47)

#### `groups`

```pkl
groups: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L48-L48)

#### `filters`

```pkl
filters: Mapping<String, Listing<String>> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L49-L49)

#### `abbrev`

```pkl
abbrev: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L50-L50)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L51-L51)

### `Brew`

#### `name`

```pkl
name: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L55-L55)

#### `ids`

```pkl
ids: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L56-L56)

#### `goarm`

```pkl
goarm: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L57-L57)

#### `goamd64`

```pkl
goamd64: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L58-L58)

#### `description`

```pkl
description: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L59-L59)

#### `homepage`

```pkl
homepage: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L60-L60)

#### `license`

```pkl
license: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L61-L61)

#### `install`

```pkl
install: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L62-L62)

#### `test`

```pkl
test: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L63-L63)

#### `caveats`

```pkl
caveats: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L64-L64)

#### `commitAuthor`

```pkl
commitAuthor: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L65-L65)

#### `commitMsgTemplate`

```pkl
commitMsgTemplate: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L66-L66)

#### `repository`

```pkl
repository: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L67-L67)

#### `dependencies`

```pkl
dependencies: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L68-L68)

#### `conflicts`

```pkl
conflicts: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L69-L69)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.go/goreleaser/Goreleaser.pkl#L70-L70)


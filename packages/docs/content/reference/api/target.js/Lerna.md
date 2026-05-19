---
title: target.js.Lerna
description: A typed authoring surface for `lerna.json`.
---

# `target.js.Lerna`

A typed authoring surface for `lerna.json`.

Models Lerna v8+ surface: packages, npmClient, useNx, command-specific
settings under `command`, and changelog / versioning fields.

## Fields

#### ``$schema``

```pkl
`$schema`: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lerna/Lerna.pkl#L50-L50)

#### `version`

```pkl
version: String|"independent" = "independent"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lerna/Lerna.pkl#L51-L51)

#### `packages`

```pkl
packages: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lerna/Lerna.pkl#L52-L52)

#### `npmClient`

```pkl
npmClient: ("npm"|"yarn"|"pnpm")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lerna/Lerna.pkl#L53-L53)

#### `useNx`

```pkl
useNx: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lerna/Lerna.pkl#L54-L54)

#### `useWorkspaces`

```pkl
useWorkspaces: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lerna/Lerna.pkl#L55-L55)

#### `command`

```pkl
command: Command? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lerna/Lerna.pkl#L56-L56)

#### `changelogPreset`

```pkl
changelogPreset: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lerna/Lerna.pkl#L57-L57)

#### `ignoreChanges`

```pkl
ignoreChanges: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lerna/Lerna.pkl#L58-L58)

#### `loglevel`

```pkl
loglevel: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lerna/Lerna.pkl#L59-L59)

#### `ci`

```pkl
ci: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lerna/Lerna.pkl#L60-L60)

#### `granularPathspec`

```pkl
granularPathspec: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lerna/Lerna.pkl#L61-L61)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lerna/Lerna.pkl#L62-L62)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lerna/Lerna.pkl#L177-L177)

#### `renderer`

```pkl
renderer = new JsonRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lerna/Lerna.pkl#L178-L178)

## Classes

### `PublishCommand`

#### `conventionalCommits`

```pkl
conventionalCommits: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lerna/Lerna.pkl#L10-L10)

#### `message`

```pkl
message: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lerna/Lerna.pkl#L11-L11)

#### `registry`

```pkl
registry: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lerna/Lerna.pkl#L12-L12)

#### `ignoreChanges`

```pkl
ignoreChanges: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lerna/Lerna.pkl#L13-L13)

#### `graphType`

```pkl
graphType: ("all"|"dependencies")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lerna/Lerna.pkl#L14-L14)

#### `yes`

```pkl
yes: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lerna/Lerna.pkl#L15-L15)

#### `push`

```pkl
push: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lerna/Lerna.pkl#L16-L16)

#### `gitRemote`

```pkl
gitRemote: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lerna/Lerna.pkl#L17-L17)

#### `noVerifyAccess`

```pkl
noVerifyAccess: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lerna/Lerna.pkl#L18-L18)

#### `distTag`

```pkl
distTag: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lerna/Lerna.pkl#L19-L19)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lerna/Lerna.pkl#L20-L20)

### `VersionCommand`

#### `conventionalCommits`

```pkl
conventionalCommits: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lerna/Lerna.pkl#L24-L24)

#### `conventionalGraduate`

```pkl
conventionalGraduate: (Boolean|String)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lerna/Lerna.pkl#L25-L25)

#### `changelogPreset`

```pkl
changelogPreset: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lerna/Lerna.pkl#L26-L26)

#### `message`

```pkl
message: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lerna/Lerna.pkl#L27-L27)

#### `exact`

```pkl
exact: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lerna/Lerna.pkl#L28-L28)

#### `push`

```pkl
push: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lerna/Lerna.pkl#L29-L29)

#### `gitTagVersion`

```pkl
gitTagVersion: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lerna/Lerna.pkl#L30-L30)

#### `forceGitTag`

```pkl
forceGitTag: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lerna/Lerna.pkl#L31-L31)

#### `signGitCommit`

```pkl
signGitCommit: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lerna/Lerna.pkl#L32-L32)

#### `signGitTag`

```pkl
signGitTag: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lerna/Lerna.pkl#L33-L33)

#### `amend`

```pkl
amend: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lerna/Lerna.pkl#L34-L34)

#### `allowBranch`

```pkl
allowBranch: (String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lerna/Lerna.pkl#L35-L35)

#### `ignoreChanges`

```pkl
ignoreChanges: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lerna/Lerna.pkl#L36-L36)

#### `yes`

```pkl
yes: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lerna/Lerna.pkl#L37-L37)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lerna/Lerna.pkl#L38-L38)

### `Command`

#### `publish`

```pkl
publish: PublishCommand? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lerna/Lerna.pkl#L42-L42)

#### `version`

```pkl
version: VersionCommand? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lerna/Lerna.pkl#L43-L43)

#### `bootstrap`

```pkl
bootstrap: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lerna/Lerna.pkl#L44-L44)

#### `init`

```pkl
init: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lerna/Lerna.pkl#L45-L45)

#### `run`

```pkl
run: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lerna/Lerna.pkl#L46-L46)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/lerna/Lerna.pkl#L47-L47)


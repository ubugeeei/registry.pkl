---
title: target.js.Nx
description: A typed authoring surface for `nx.json`.
---

# `target.js.Nx`

A typed authoring surface for `nx.json`.

Nx's root config keys: `namedInputs`, `targetDefaults`, `tasksRunnerOptions`,
`plugins`, `affected`, `release`. Each target default declares cache
behavior, inputs, outputs, and dependsOn for a given target name.

## Type aliases

### `InputEntry`

```pkl
typealias InputEntry = String|Mapping<String, Any>
```

## Fields

#### ``$schema``

```pkl
`$schema`: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/nx/Nx.pkl#L42-L42)

#### `affected`

```pkl
affected: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/nx/Nx.pkl#L43-L43)

#### `defaultBase`

```pkl
defaultBase: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/nx/Nx.pkl#L44-L44)

#### `namedInputs`

```pkl
namedInputs: Mapping<String, Listing<InputEntry>> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/nx/Nx.pkl#L45-L45)

#### `targetDefaults`

```pkl
targetDefaults: Mapping<String, TargetDefault> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/nx/Nx.pkl#L46-L46)

#### `tasksRunnerOptions`

```pkl
tasksRunnerOptions: Mapping<String, Mapping<String, Any>> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/nx/Nx.pkl#L47-L47)

#### `plugins`

```pkl
plugins: Listing<String|PluginRef> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/nx/Nx.pkl#L48-L48)

#### `release`

```pkl
release: Release? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/nx/Nx.pkl#L49-L49)

#### `nxCloudAccessToken`

```pkl
nxCloudAccessToken: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/nx/Nx.pkl#L50-L50)

#### `nxCloudId`

```pkl
nxCloudId: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/nx/Nx.pkl#L51-L51)

#### `parallel`

```pkl
parallel: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/nx/Nx.pkl#L52-L52)

#### `useInferencePlugins`

```pkl
useInferencePlugins: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/nx/Nx.pkl#L53-L53)

#### `defaultProject`

```pkl
defaultProject: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/nx/Nx.pkl#L54-L54)

#### `generators`

```pkl
generators: Mapping<String, Mapping<String, Any>> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/nx/Nx.pkl#L55-L55)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/nx/Nx.pkl#L56-L56)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/nx/Nx.pkl#L175-L175)

#### `renderer`

```pkl
renderer = new JsonRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/nx/Nx.pkl#L176-L176)

## Classes

### `TargetDefault`

#### `dependsOn`

```pkl
dependsOn: Listing<String|Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/nx/Nx.pkl#L13-L13)

#### `inputs`

```pkl
inputs: Listing<InputEntry> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/nx/Nx.pkl#L14-L14)

#### `outputs`

```pkl
outputs: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/nx/Nx.pkl#L15-L15)

#### `cache`

```pkl
cache: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/nx/Nx.pkl#L16-L16)

#### `options`

```pkl
options: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/nx/Nx.pkl#L17-L17)

#### `executor`

```pkl
executor: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/nx/Nx.pkl#L18-L18)

#### `configurations`

```pkl
configurations: Mapping<String, Mapping<String, Any>> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/nx/Nx.pkl#L19-L19)

#### `parallelism`

```pkl
parallelism: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/nx/Nx.pkl#L20-L20)

#### `syncGenerators`

```pkl
syncGenerators: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/nx/Nx.pkl#L21-L21)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/nx/Nx.pkl#L22-L22)

### `PluginRef`

#### `plugin`

```pkl
plugin: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/nx/Nx.pkl#L26-L26)

#### `options`

```pkl
options: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/nx/Nx.pkl#L27-L27)

#### `include`

```pkl
include: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/nx/Nx.pkl#L28-L28)

#### `exclude`

```pkl
exclude: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/nx/Nx.pkl#L29-L29)

### `Release`

#### `projectsRelationship`

```pkl
projectsRelationship: ("fixed"|"independent")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/nx/Nx.pkl#L33-L33)

#### `releaseTagPattern`

```pkl
releaseTagPattern: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/nx/Nx.pkl#L34-L34)

#### `version`

```pkl
version: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/nx/Nx.pkl#L35-L35)

#### `changelog`

```pkl
changelog: (Mapping<String, Any>|Boolean)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/nx/Nx.pkl#L36-L36)

#### `git`

```pkl
git: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/nx/Nx.pkl#L37-L37)

#### `conventionalCommits`

```pkl
conventionalCommits: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/nx/Nx.pkl#L38-L38)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.js/nx/Nx.pkl#L39-L39)


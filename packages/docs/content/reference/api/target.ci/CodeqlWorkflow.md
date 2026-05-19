---
title: target.ci.CodeqlWorkflow
description: A typed GitHub Actions preset for CodeQL code scanning.
---

# `target.ci.CodeqlWorkflow`

A typed GitHub Actions preset for CodeQL code scanning.

`amends "@target.ci/github/CodeqlWorkflow.pkl"` declares a recurring
CodeQL analysis run that triggers on push, pull_request, and a weekly
schedule. Defaults to the languages CodeQL auto-detects; override
`languages` to pin a matrix.

## Type aliases

### `Language`

```pkl
typealias Language = "actions"|"c-cpp"|"csharp"|"go"|"java-kotlin"|"javascript-typescript"|"python"|"ruby"|"rust"|"swift"
```

## Fields

#### `name`

```pkl
name: String = "CodeQL"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/CodeqlWorkflow.pkl#L13-L13)

#### `branches`

```pkl
branches: Listing<String> = new Listing { "main" }
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/CodeqlWorkflow.pkl#L14-L14)

#### `languages`

```pkl
languages: Listing<Language> = new Listing {
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/CodeqlWorkflow.pkl#L15-L15)

#### `schedule`

```pkl
schedule: String = "30 4 * * 1"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/CodeqlWorkflow.pkl#L18-L18)

#### `runsOn`

```pkl
runsOn: String = "ubuntu-latest"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/CodeqlWorkflow.pkl#L19-L19)

#### `queries`

```pkl
queries: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/CodeqlWorkflow.pkl#L20-L20)

#### `configFile`

```pkl
configFile: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/CodeqlWorkflow.pkl#L21-L21)

#### `buildMode`

```pkl
buildMode: "none"|"autobuild"|"manual" = "none"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/CodeqlWorkflow.pkl#L22-L22)

#### `buildSteps`

```pkl
buildSteps: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/CodeqlWorkflow.pkl#L23-L23)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/CodeqlWorkflow.pkl#L24-L24)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/CodeqlWorkflow.pkl#L105-L105)

#### `renderer`

```pkl
renderer = new YamlRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/CodeqlWorkflow.pkl#L106-L106)


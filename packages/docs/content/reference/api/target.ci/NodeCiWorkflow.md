---
title: target.ci.NodeCiWorkflow
description: A batteries-included GitHub Actions workflow for Node-based repositories.
---

# `target.ci.NodeCiWorkflow`

A batteries-included GitHub Actions workflow for Node-based repositories.

## Fields

#### `name`

```pkl
name: String = "CI"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/NodeCiWorkflow.pkl#L6-L6)

#### `branches`

```pkl
branches: List<String> = List("main")
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/NodeCiWorkflow.pkl#L7-L7)

#### `nodeVersions`

```pkl
nodeVersions: List<String> = List("24")
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/NodeCiWorkflow.pkl#L8-L8)

#### `packageManager`

```pkl
packageManager: "npm"|"pnpm"|"yarn"|"bun" = "pnpm"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/NodeCiWorkflow.pkl#L9-L9)

#### `install`

```pkl
install: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/NodeCiWorkflow.pkl#L10-L10)

#### `check`

```pkl
check: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/NodeCiWorkflow.pkl#L11-L11)

#### `lint`

```pkl
lint: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/NodeCiWorkflow.pkl#L12-L12)

#### `test`

```pkl
test: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/NodeCiWorkflow.pkl#L13-L13)

#### `build`

```pkl
build: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/NodeCiWorkflow.pkl#L14-L14)

#### `workingDirectory`

```pkl
workingDirectory: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/NodeCiWorkflow.pkl#L15-L15)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/NodeCiWorkflow.pkl#L16-L16)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/NodeCiWorkflow.pkl#L117-L117)

#### `renderer`

```pkl
renderer = new YamlRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/NodeCiWorkflow.pkl#L118-L118)


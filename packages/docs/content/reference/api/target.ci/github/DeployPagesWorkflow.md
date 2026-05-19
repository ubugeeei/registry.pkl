---
title: target.ci.github.DeployPagesWorkflow
description: A typed GitHub Actions preset for deploying a static site to GitHub Pages.
---

# `target.ci.github.DeployPagesWorkflow`

A typed GitHub Actions preset for deploying a static site to GitHub Pages.

Pre-wires the `actions/configure-pages`, `upload-pages-artifact`, and
`deploy-pages` chain with the right scoped permissions and a separate
deploy job whose only privilege is to publish the uploaded artifact.

## Fields

#### `name`

```pkl
name: String = "Deploy Pages"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/DeployPagesWorkflow.pkl#L22-L22)

#### `branches`

```pkl
branches: Listing<String> = new Listing { "main" }
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/DeployPagesWorkflow.pkl#L23-L23)

#### `manualDispatch`

```pkl
manualDispatch: Boolean = true
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/DeployPagesWorkflow.pkl#L24-L24)

#### `runsOn`

```pkl
runsOn: String = "ubuntu-latest"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/DeployPagesWorkflow.pkl#L25-L25)

#### `artifactPath`

```pkl
artifactPath: String = "dist"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/DeployPagesWorkflow.pkl#L26-L26)

#### `environmentName`

```pkl
environmentName: String = "github-pages"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/DeployPagesWorkflow.pkl#L27-L27)

#### `concurrencyGroup`

```pkl
concurrencyGroup: String = "github-pages"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/DeployPagesWorkflow.pkl#L28-L28)

#### `cancelInProgress`

```pkl
cancelInProgress: Boolean = true
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/DeployPagesWorkflow.pkl#L29-L29)

#### `buildSteps`

```pkl
buildSteps: Listing<Step> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/DeployPagesWorkflow.pkl#L30-L30)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/DeployPagesWorkflow.pkl#L31-L31)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/DeployPagesWorkflow.pkl#L122-L122)

#### `renderer`

```pkl
renderer = new YamlRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/DeployPagesWorkflow.pkl#L123-L123)

## Classes

### `Step`

#### `name`

```pkl
name: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/DeployPagesWorkflow.pkl#L11-L11)

#### `uses`

```pkl
uses: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/DeployPagesWorkflow.pkl#L12-L12)

#### `run`

```pkl
run: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/DeployPagesWorkflow.pkl#L13-L13)

#### ``with``

```pkl
`with`: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/DeployPagesWorkflow.pkl#L14-L14)

#### `env`

```pkl
env: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/DeployPagesWorkflow.pkl#L15-L15)

#### `workingDirectory`

```pkl
workingDirectory: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/DeployPagesWorkflow.pkl#L16-L16)

#### `shell`

```pkl
shell: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/DeployPagesWorkflow.pkl#L17-L17)

#### ``if``

```pkl
`if`: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/DeployPagesWorkflow.pkl#L18-L18)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/DeployPagesWorkflow.pkl#L19-L19)


---
title: target.ci.github.ReleaseWorkflow
description: A typed GitHub Actions preset for cutting a tag-driven release.
---

# `target.ci.github.ReleaseWorkflow`

A typed GitHub Actions preset for cutting a tag-driven release.

`amends "@target.ci/github/ReleaseWorkflow.pkl"` is enough to declare
a workflow that triggers on a SemVer tag pattern, builds artifacts,
generates release notes, and publishes a draft GitHub Release. The
underlying pantry classes remain reachable via `extra` if a project
needs to add steps that this preset does not enumerate.

## Fields

#### `name`

```pkl
name: String = "Release"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/ReleaseWorkflow.pkl#L26-L26)

#### `tagPattern`

```pkl
tagPattern: String = "v*.*.*"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/ReleaseWorkflow.pkl#L27-L27)

#### `branches`

```pkl
branches: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/ReleaseWorkflow.pkl#L28-L28)

#### `manualDispatch`

```pkl
manualDispatch: Boolean = true
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/ReleaseWorkflow.pkl#L29-L29)

#### `runsOn`

```pkl
runsOn: String = "ubuntu-latest"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/ReleaseWorkflow.pkl#L30-L30)

#### `defaultShell`

```pkl
defaultShell: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/ReleaseWorkflow.pkl#L31-L31)

#### `permissions`

```pkl
permissions: "read-all"|Mapping<String, String> = new Mapping {
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/ReleaseWorkflow.pkl#L32-L32)

#### `concurrencyGroup`

```pkl
concurrencyGroup: String? = "release-${{ github.ref_name }}"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/ReleaseWorkflow.pkl#L36-L36)

#### `cancelInProgress`

```pkl
cancelInProgress: Boolean = false
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/ReleaseWorkflow.pkl#L37-L37)

#### `draft`

```pkl
draft: Boolean = true
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/ReleaseWorkflow.pkl#L38-L38)

#### `prerelease`

```pkl
prerelease: Boolean = false
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/ReleaseWorkflow.pkl#L39-L39)

#### `generateNotes`

```pkl
generateNotes: Boolean = true
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/ReleaseWorkflow.pkl#L40-L40)

#### `artifacts`

```pkl
artifacts: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/ReleaseWorkflow.pkl#L41-L41)

#### `buildSteps`

```pkl
buildSteps: Listing<BuildStep> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/ReleaseWorkflow.pkl#L42-L42)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/ReleaseWorkflow.pkl#L43-L43)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/ReleaseWorkflow.pkl#L149-L149)

#### `renderer`

```pkl
renderer = new YamlRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/ReleaseWorkflow.pkl#L150-L150)

## Classes

### `BuildStep`

#### `name`

```pkl
name: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/ReleaseWorkflow.pkl#L13-L13)

#### `run`

```pkl
run: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/ReleaseWorkflow.pkl#L14-L14)

#### `uses`

```pkl
uses: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/ReleaseWorkflow.pkl#L15-L15)

#### ``with``

```pkl
`with`: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/ReleaseWorkflow.pkl#L16-L16)

#### `env`

```pkl
env: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/ReleaseWorkflow.pkl#L17-L17)

#### `shell`

```pkl
shell: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/ReleaseWorkflow.pkl#L18-L18)

#### `workingDirectory`

```pkl
workingDirectory: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/ReleaseWorkflow.pkl#L19-L19)

#### ``if``

```pkl
`if`: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/ReleaseWorkflow.pkl#L20-L20)

#### `continueOnError`

```pkl
continueOnError: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/ReleaseWorkflow.pkl#L21-L21)

#### `timeoutMinutes`

```pkl
timeoutMinutes: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/ReleaseWorkflow.pkl#L22-L22)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/github/ReleaseWorkflow.pkl#L23-L23)


---
title: target.ci.CircleCi
description: A typed authoring surface for `.circleci/config.yml`.
---

# `target.ci.CircleCi`

A typed authoring surface for `.circleci/config.yml`.

Covers the most-frequently-used pipeline shape: version 2.1 with
orbs, parameters, executors, jobs (with steps), commands, and
workflows. `extra` escape hatches everywhere for less-common fields.

Reference: https://circleci.com/docs/configuration-reference/

## Type aliases

### `Step`

```pkl
typealias Step = String|Mapping<String, Any>
```

## Fields

#### `version`

```pkl
version: Float = 2.1
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L101-L101)

#### `orbs`

```pkl
orbs: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L102-L102)

#### `parameters`

```pkl
parameters: Mapping<String, Parameter> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L103-L103)

#### `executors`

```pkl
executors: Mapping<String, Executor> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L104-L104)

#### `commands`

```pkl
commands: Mapping<String, Command> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L105-L105)

#### `jobs`

```pkl
jobs: Mapping<String, Job> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L106-L106)

#### `workflows`

```pkl
workflows: Mapping<String, Workflow> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L107-L107)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L108-L108)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L335-L335)

#### `renderer`

```pkl
renderer = new YamlRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L336-L336)

## Classes

### `DockerImage`

#### `image`

```pkl
image: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L15-L15)

#### `name`

```pkl
name: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L16-L16)

#### `auth`

```pkl
auth: Mapping<String, String>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L17-L17)

#### `user`

```pkl
user: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L18-L18)

#### `command`

```pkl
command: (String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L19-L19)

#### `entrypoint`

```pkl
entrypoint: (String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L20-L20)

#### `environment`

```pkl
environment: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L21-L21)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L22-L22)

### `MachineExecutor`

#### `image`

```pkl
image: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L26-L26)

#### `dockerLayerCaching`

```pkl
dockerLayerCaching: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L27-L27)

#### `resourceClass`

```pkl
resourceClass: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L28-L28)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L29-L29)

### `MacosExecutor`

#### `xcode`

```pkl
xcode: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L33-L33)

#### `resourceClass`

```pkl
resourceClass: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L34-L34)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L35-L35)

### `Executor`

#### `docker`

```pkl
docker: Listing<DockerImage> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L39-L39)

#### `machine`

```pkl
machine: MachineExecutor? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L40-L40)

#### `macos`

```pkl
macos: MacosExecutor? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L41-L41)

#### `resourceClass`

```pkl
resourceClass: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L42-L42)

#### `workingDirectory`

```pkl
workingDirectory: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L43-L43)

#### `environment`

```pkl
environment: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L44-L44)

#### `shell`

```pkl
shell: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L45-L45)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L46-L46)

### `Parameter`

#### `type`

```pkl
type: ("string"|"boolean"|"integer"|"enum"|"executor"|"steps"|"env_var_name")
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L50-L50)

#### `default`

```pkl
default: Any? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L51-L51)

#### `description`

```pkl
description: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L52-L52)

#### `values`

```pkl
values: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L53-L53)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L54-L54)

### `Job`

#### `docker`

```pkl
docker: Listing<DockerImage> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L58-L58)

#### `machine`

```pkl
machine: MachineExecutor? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L59-L59)

#### `macos`

```pkl
macos: MacosExecutor? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L60-L60)

#### `executor`

```pkl
executor: (String|Mapping<String, Any>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L61-L61)

#### `resourceClass`

```pkl
resourceClass: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L62-L62)

#### `parameters`

```pkl
parameters: Mapping<String, Parameter> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L63-L63)

#### `environment`

```pkl
environment: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L64-L64)

#### `parallelism`

```pkl
parallelism: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L65-L65)

#### `shell`

```pkl
shell: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L66-L66)

#### `workingDirectory`

```pkl
workingDirectory: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L67-L67)

#### `circleciIpRanges`

```pkl
circleciIpRanges: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L68-L68)

#### `steps`

```pkl
steps: Listing<Step> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L69-L69)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L70-L70)

### `Command`

#### `description`

```pkl
description: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L74-L74)

#### `parameters`

```pkl
parameters: Mapping<String, Parameter> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L75-L75)

#### `steps`

```pkl
steps: Listing<Step> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L76-L76)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L77-L77)

### `WorkflowJob`

#### `name`

```pkl
name: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L81-L81)

#### `requires`

```pkl
requires: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L82-L82)

#### `context`

```pkl
context: (String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L83-L83)

#### `type`

```pkl
type: ("approval")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L84-L84)

#### `filters`

```pkl
filters: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L85-L85)

#### `matrix`

```pkl
matrix: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L86-L86)

#### `parameters`

```pkl
parameters: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L87-L87)

#### `preSteps`

```pkl
preSteps: Listing<Step> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L88-L88)

#### `postSteps`

```pkl
postSteps: Listing<Step> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L89-L89)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L90-L90)

### `Workflow`

#### `jobs`

```pkl
jobs: Listing<String|Mapping<String, WorkflowJob>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L94-L94)

#### `triggers`

```pkl
triggers: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L95-L95)

#### ``when``

```pkl
`when`: (String|Mapping<String, Any>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L96-L96)

#### `unless`

```pkl
unless: (String|Mapping<String, Any>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L97-L97)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/circleci/CircleCi.pkl#L98-L98)


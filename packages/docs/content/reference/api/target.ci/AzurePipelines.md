---
title: target.ci.AzurePipelines
description: A typed authoring surface for Azure DevOps Pipelines (`azure-pipelines.yml`).
---

# `target.ci.AzurePipelines`

A typed authoring surface for Azure DevOps Pipelines (`azure-pipelines.yml`).

Reference: https://learn.microsoft.com/azure/devops/pipelines/yaml-schema

## Fields

#### `name`

```pkl
name: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L106-L106)

#### `trigger`

```pkl
trigger: (TriggerBlock|String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L107-L107)

#### `pr`

```pkl
pr: (TriggerBlock|String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L108-L108)

#### `schedules`

```pkl
schedules: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L109-L109)

#### `resources`

```pkl
resources: Resources? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L110-L110)

#### `variables`

```pkl
variables: (Mapping<String, Any>|Listing<Mapping<String, Any>>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L111-L111)

#### `parameters`

```pkl
parameters: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L112-L112)

#### `pool`

```pkl
pool: Pool? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L113-L113)

#### `container`

```pkl
container: (String|Mapping<String, Any>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L114-L114)

#### `strategy`

```pkl
strategy: Strategy? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L115-L115)

#### `stages`

```pkl
stages: Listing<Stage> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L116-L116)

#### `jobs`

```pkl
jobs: Listing<Job> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L117-L117)

#### `steps`

```pkl
steps: Listing<Step> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L118-L118)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L119-L119)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L379-L379)

#### `renderer`

```pkl
renderer = new YamlRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L380-L380)

## Classes

### `Resources`

#### `pipelines`

```pkl
pipelines: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L9-L9)

#### `repositories`

```pkl
repositories: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L10-L10)

#### `containers`

```pkl
containers: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L11-L11)

#### `packages`

```pkl
packages: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L12-L12)

#### `webhooks`

```pkl
webhooks: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L13-L13)

#### `builds`

```pkl
builds: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L14-L14)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L15-L15)

### `TriggerBranches`

#### `include`

```pkl
include: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L19-L19)

#### `exclude`

```pkl
exclude: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L20-L20)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L21-L21)

### `TriggerBlock`

#### `batch`

```pkl
batch: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L25-L25)

#### `branches`

```pkl
branches: TriggerBranches? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L26-L26)

#### `paths`

```pkl
paths: TriggerBranches? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L27-L27)

#### `tags`

```pkl
tags: TriggerBranches? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L28-L28)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L29-L29)

### `Pool`

#### `name`

```pkl
name: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L33-L33)

#### `vmImage`

```pkl
vmImage: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L34-L34)

#### `demands`

```pkl
demands: (String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L35-L35)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L36-L36)

### `Strategy`

#### `matrix`

```pkl
matrix: Mapping<String, Mapping<String, Any>> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L40-L40)

#### `maxParallel`

```pkl
maxParallel: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L41-L41)

#### `parallel`

```pkl
parallel: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L42-L42)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L43-L43)

### `Step`

#### `script`

Step kind: usually `script`, `bash`, `pwsh`, `powershell`, `task`,
`template`, `publish`, `download`, `checkout`, `download`, etc.
We render whichever key is set first.

```pkl
script: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L50-L50)

#### `bash`

```pkl
bash: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L51-L51)

#### `pwsh`

```pkl
pwsh: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L52-L52)

#### `powershell`

```pkl
powershell: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L53-L53)

#### `task`

```pkl
task: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L54-L54)

#### `template`

```pkl
template: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L55-L55)

#### `publish`

```pkl
publish: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L56-L56)

#### `download`

```pkl
download: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L57-L57)

#### `checkout`

```pkl
checkout: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L58-L58)

#### `displayName`

```pkl
displayName: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L59-L59)

#### `name`

```pkl
name: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L60-L60)

#### `condition`

```pkl
condition: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L61-L61)

#### `continueOnError`

```pkl
continueOnError: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L62-L62)

#### `enabled`

```pkl
enabled: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L63-L63)

#### `timeoutInMinutes`

```pkl
timeoutInMinutes: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L64-L64)

#### `retryCountOnTaskFailure`

```pkl
retryCountOnTaskFailure: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L65-L65)

#### `env`

```pkl
env: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L66-L66)

#### `inputs`

```pkl
inputs: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L67-L67)

#### `parameters`

```pkl
parameters: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L68-L68)

#### `workingDirectory`

```pkl
workingDirectory: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L69-L69)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L70-L70)

### `Job`

#### `job`

```pkl
job: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L74-L74)

#### `displayName`

```pkl
displayName: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L75-L75)

#### `dependsOn`

```pkl
dependsOn: (String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L76-L76)

#### `condition`

```pkl
condition: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L77-L77)

#### `continueOnError`

```pkl
continueOnError: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L78-L78)

#### `timeoutInMinutes`

```pkl
timeoutInMinutes: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L79-L79)

#### `cancelTimeoutInMinutes`

```pkl
cancelTimeoutInMinutes: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L80-L80)

#### `variables`

```pkl
variables: (Mapping<String, Any>|Listing<Mapping<String, Any>>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L81-L81)

#### `strategy`

```pkl
strategy: Strategy? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L82-L82)

#### `pool`

```pkl
pool: Pool? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L83-L83)

#### `workspace`

```pkl
workspace: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L84-L84)

#### `container`

```pkl
container: (String|Mapping<String, Any>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L85-L85)

#### `services`

```pkl
services: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L86-L86)

#### `steps`

```pkl
steps: Listing<Step> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L87-L87)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L88-L88)

### `Stage`

#### `stage`

```pkl
stage: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L92-L92)

#### `displayName`

```pkl
displayName: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L93-L93)

#### `dependsOn`

```pkl
dependsOn: (String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L94-L94)

#### `condition`

```pkl
condition: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L95-L95)

#### `variables`

```pkl
variables: (Mapping<String, Any>|Listing<Mapping<String, Any>>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L96-L96)

#### `jobs`

```pkl
jobs: Listing<Job> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L97-L97)

#### `pool`

```pkl
pool: Pool? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L98-L98)

#### `lockBehavior`

```pkl
lockBehavior: ("sequential"|"runLatest")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L99-L99)

#### `isSkippable`

```pkl
isSkippable: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L100-L100)

#### `trigger`

```pkl
trigger: ("automatic"|"manual"|"none")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L101-L101)

#### `templateContext`

```pkl
templateContext: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L102-L102)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/azurePipelines/AzurePipelines.pkl#L103-L103)


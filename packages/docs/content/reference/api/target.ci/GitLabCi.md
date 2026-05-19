---
title: target.ci.GitLabCi
description: A typed authoring surface for `.gitlab-ci.yml`.
---

# `target.ci.GitLabCi`

A typed authoring surface for `.gitlab-ci.yml`.

Covers the most-frequently-overridden fields in the GitLab CI/CD
reference. Every nested class carries an `extra` escape hatch for
keys not yet enumerated here, but the public surface is wide enough
that `amends "@target.ci/gitlab/GitLabCi.pkl"` covers a real pipeline
without dropping to raw maps.

## Type aliases

### `WhenKind`

```pkl
typealias WhenKind = "on_success"|"on_failure"|"always"|"never"|"manual"|"delayed"
```

### `NeedRef`

```pkl
typealias NeedRef = String|Need
```

## Fields

#### `stages`

```pkl
stages: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L184-L184)

#### `include`

```pkl
include: (Listing<String>|Listing<Mapping<String, Any>>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L185-L185)

#### `variables`

```pkl
variables: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L186-L186)

#### `workflow`

```pkl
workflow: Workflow? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L187-L187)

#### `default`

```pkl
default: Defaults? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L188-L188)

#### `jobs`

```pkl
jobs: Mapping<String, Job> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L189-L189)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L190-L190)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L553-L553)

#### `renderer`

```pkl
renderer = new YamlRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L554-L554)

## Classes

### `Rule`

#### ``if``

```pkl
`if`: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L15-L15)

#### `changes`

```pkl
changes: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L16-L16)

#### `exists`

```pkl
exists: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L17-L17)

#### ``when``

```pkl
`when`: WhenKind? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L18-L18)

#### `allowFailure`

```pkl
allowFailure: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L19-L19)

#### `startIn`

```pkl
startIn: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L20-L20)

#### `variables`

```pkl
variables: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L21-L21)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L22-L22)

### `CacheKeyFiles`

#### `files`

```pkl
files: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L26-L26)

#### `prefix`

```pkl
prefix: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L27-L27)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L28-L28)

### `Cache`

#### `key`

```pkl
key: (String|CacheKeyFiles)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L32-L32)

#### `paths`

```pkl
paths: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L33-L33)

#### `untracked`

```pkl
untracked: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L34-L34)

#### `policy`

```pkl
policy: "pull"|"push"|"pull-push"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L35-L35)

#### ``when``

```pkl
`when`: "on_success"|"on_failure"|"always"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L36-L36)

#### `unprotect`

```pkl
unprotect: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L37-L37)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L38-L38)

### `Artifacts`

#### `paths`

```pkl
paths: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L42-L42)

#### `exclude`

```pkl
exclude: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L43-L43)

#### `reports`

```pkl
reports: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L44-L44)

#### `name`

```pkl
name: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L45-L45)

#### `expose_as`

```pkl
expose_as: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L46-L46)

#### `untracked`

```pkl
untracked: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L47-L47)

#### ``when``

```pkl
`when`: "on_success"|"on_failure"|"always"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L48-L48)

#### `expireIn`

```pkl
expireIn: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L49-L49)

#### `publicArtifact`

```pkl
publicArtifact: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L50-L50)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L51-L51)

### `Image`

#### `name`

```pkl
name: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L55-L55)

#### `entrypoint`

```pkl
entrypoint: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L56-L56)

#### `pullPolicy`

```pkl
pullPolicy: ("always"|"if-not-present"|"never"|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L57-L57)

#### `dockerUser`

```pkl
dockerUser: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L58-L58)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L59-L59)

### `Service`

#### `name`

```pkl
name: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L63-L63)

#### `alias`

```pkl
alias: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L64-L64)

#### `entrypoint`

```pkl
entrypoint: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L65-L65)

#### `command`

```pkl
command: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L66-L66)

#### `variables`

```pkl
variables: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L67-L67)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L68-L68)

### `Retry`

#### `max`

```pkl
max: Int
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L72-L72)

#### ``when``

```pkl
`when`: (String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L73-L73)

#### `exitCodes`

```pkl
exitCodes: (Int|Listing<Int>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L74-L74)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L75-L75)

### `Trigger`

#### `project`

```pkl
project: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L79-L79)

#### `branch`

```pkl
branch: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L80-L80)

#### `strategy`

```pkl
strategy: ("depend")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L81-L81)

#### `include`

```pkl
include: (String|Listing<String>|Listing<Mapping<String, Any>>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L82-L82)

#### `forward`

```pkl
forward: Mapping<String, Boolean> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L83-L83)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L84-L84)

### `Environment`

#### `name`

```pkl
name: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L88-L88)

#### `url`

```pkl
url: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L89-L89)

#### `action`

```pkl
action: "start"|"prepare"|"stop"|"verify"|"access"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L90-L90)

#### `onStop`

```pkl
onStop: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L91-L91)

#### `autoStopIn`

```pkl
autoStopIn: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L92-L92)

#### `kubernetes`

```pkl
kubernetes: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L93-L93)

#### `deploymentTier`

```pkl
deploymentTier: "production"|"staging"|"testing"|"development"|"other"? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L94-L94)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L95-L95)

### `Coverage`

#### `pattern`

```pkl
pattern: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L99-L99)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L100-L100)

### `Need`

#### `job`

```pkl
job: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L104-L104)

#### `artifacts`

```pkl
artifacts: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L105-L105)

#### `optional`

```pkl
optional: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L106-L106)

#### `project`

```pkl
project: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L107-L107)

#### `ref`

```pkl
ref: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L108-L108)

#### `pipeline`

```pkl
pipeline: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L109-L109)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L110-L110)

### `Job`

#### `stage`

```pkl
stage: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L116-L116)

#### `image`

```pkl
image: (String|Image)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L117-L117)

#### `script`

```pkl
script: (String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L118-L118)

#### `beforeScript`

```pkl
beforeScript: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L119-L119)

#### `afterScript`

```pkl
afterScript: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L120-L120)

#### `needs`

```pkl
needs: Listing<NeedRef> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L121-L121)

#### `tags`

```pkl
tags: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L122-L122)

#### `services`

```pkl
services: Listing<String|Service> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L123-L123)

#### `variables`

```pkl
variables: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L124-L124)

#### `rules`

```pkl
rules: Listing<Rule> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L125-L125)

#### `only`

```pkl
only: (Listing<String>|Mapping<String, Any>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L126-L126)

#### `except`

```pkl
except: (Listing<String>|Mapping<String, Any>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L127-L127)

#### `cache`

```pkl
cache: (Cache|Listing<Cache>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L128-L128)

#### `artifacts`

```pkl
artifacts: Artifacts? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L129-L129)

#### `interruptible`

```pkl
interruptible: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L130-L130)

#### `retry`

```pkl
retry: (Int|Retry)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L131-L131)

#### `timeout`

```pkl
timeout: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L132-L132)

#### `parallel`

```pkl
parallel: (Int|Mapping<String, Any>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L133-L133)

#### `resourceGroup`

```pkl
resourceGroup: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L134-L134)

#### `allowFailure`

```pkl
allowFailure: (Boolean|Mapping<String, Any>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L135-L135)

#### `trigger`

```pkl
trigger: Trigger? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L136-L136)

#### `environment`

```pkl
environment: (String|Environment)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L137-L137)

#### `coverage`

```pkl
coverage: (String|Coverage)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L138-L138)

#### `dependencies`

```pkl
dependencies: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L139-L139)

#### ``extends``

```pkl
`extends`: (String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L140-L140)

#### ``when``

```pkl
`when`: WhenKind? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L141-L141)

#### `startIn`

```pkl
startIn: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L142-L142)

#### `manualConfirmation`

```pkl
manualConfirmation: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L143-L143)

#### `hooks`

```pkl
hooks: Mapping<String, Listing<String>> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L144-L144)

#### `release`

```pkl
release: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L145-L145)

#### `pages`

```pkl
pages: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L146-L146)

#### `identity`

```pkl
identity: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L147-L147)

#### `inherit`

```pkl
inherit: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L148-L148)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L149-L149)

### `WorkflowRule`

#### ``if``

```pkl
`if`: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L153-L153)

#### `changes`

```pkl
changes: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L154-L154)

#### `exists`

```pkl
exists: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L155-L155)

#### ``when``

```pkl
`when`: WhenKind? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L156-L156)

#### `variables`

```pkl
variables: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L157-L157)

#### `autoCancel`

```pkl
autoCancel: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L158-L158)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L159-L159)

### `Workflow`

#### `rules`

```pkl
rules: Listing<WorkflowRule> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L163-L163)

#### `name`

```pkl
name: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L164-L164)

#### `autoCancel`

```pkl
autoCancel: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L165-L165)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L166-L166)

### `Defaults`

#### `image`

```pkl
image: (String|Image)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L170-L170)

#### `services`

```pkl
services: Listing<String|Service> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L171-L171)

#### `cache`

```pkl
cache: (Cache|Listing<Cache>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L172-L172)

#### `beforeScript`

```pkl
beforeScript: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L173-L173)

#### `afterScript`

```pkl
afterScript: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L174-L174)

#### `tags`

```pkl
tags: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L175-L175)

#### `artifacts`

```pkl
artifacts: Artifacts? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L176-L176)

#### `retry`

```pkl
retry: (Int|Retry)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L177-L177)

#### `timeout`

```pkl
timeout: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L178-L178)

#### `interruptible`

```pkl
interruptible: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L179-L179)

#### `hooks`

```pkl
hooks: Mapping<String, Listing<String>> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L180-L180)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/gitlab/GitLabCi.pkl#L181-L181)


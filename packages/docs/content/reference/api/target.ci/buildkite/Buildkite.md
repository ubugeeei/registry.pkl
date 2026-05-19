---
title: target.ci.buildkite.Buildkite
description: A typed authoring surface for Buildkite's `.buildkite/pipeline.yml`.
---

# `target.ci.buildkite.Buildkite`

A typed authoring surface for Buildkite's `.buildkite/pipeline.yml`.

Buildkite pipelines are a YAML document with `steps:` listing
command/wait/block/trigger/group entries. This module covers all
five step kinds with a tagged union; the rest of the fields fall
through to `extra`.

Reference: https://buildkite.com/docs/pipelines/defining-steps

## Type aliases

### `AgentTags`

```pkl
typealias AgentTags = Mapping<String, String|Listing<String>>
```

### `Step`

```pkl
typealias Step = 
```

## Fields

#### `env`

```pkl
env: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L120-L120)

#### `agents`

```pkl
agents: AgentTags = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L121-L121)

#### `steps`

```pkl
steps: Listing<Step> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L122-L122)

#### `notify`

```pkl
notify: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L123-L123)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L124-L124)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L364-L364)

#### `renderer`

```pkl
renderer = new YamlRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L365-L365)

## Classes

### `Retry`

#### `automatic`

```pkl
automatic: (Boolean|Listing<Mapping<String, Any>>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L14-L14)

#### `manual`

```pkl
manual: (Boolean|Mapping<String, Any>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L15-L15)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L16-L16)

### `CommandStep`

#### `kind`

```pkl
kind: "command" = "command"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L22-L22)

#### `label`

```pkl
label: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L23-L23)

#### `key`

```pkl
key: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L24-L24)

#### `command`

```pkl
command: (String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L25-L25)

#### `commands`

```pkl
commands: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L26-L26)

#### `env`

```pkl
env: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L27-L27)

#### `agents`

```pkl
agents: AgentTags = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L28-L28)

#### `artifactPaths`

```pkl
artifactPaths: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L29-L29)

#### `branches`

```pkl
branches: (String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L30-L30)

#### ``if``

```pkl
`if`: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L31-L31)

#### `dependsOn`

```pkl
dependsOn: Listing<String|Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L32-L32)

#### `allow_dependency_failure`

```pkl
allow_dependency_failure: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L33-L33)

#### `retry`

```pkl
retry: Retry? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L34-L34)

#### `timeout_in_minutes`

```pkl
timeout_in_minutes: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L35-L35)

#### `parallelism`

```pkl
parallelism: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L36-L36)

#### `concurrency`

```pkl
concurrency: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L37-L37)

#### `concurrency_group`

```pkl
concurrency_group: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L38-L38)

#### `concurrency_method`

```pkl
concurrency_method: ("ordered"|"eager")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L39-L39)

#### `plugins`

```pkl
plugins: Listing<Mapping<String, Mapping<String, Any>>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L40-L40)

#### `matrix`

```pkl
matrix: (Listing<Mapping<String, Any>>|Mapping<String, Any>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L41-L41)

#### `soft_fail`

```pkl
soft_fail: (Boolean|Listing<Mapping<String, Int>>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L42-L42)

#### `skip`

```pkl
skip: (Boolean|String)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L43-L43)

#### `cancel_on_build_failing`

```pkl
cancel_on_build_failing: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L44-L44)

#### `notify`

```pkl
notify: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L45-L45)

#### `signature`

```pkl
signature: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L46-L46)

#### `priority`

```pkl
priority: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L47-L47)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L48-L48)

### `WaitStep`

#### `kind`

```pkl
kind: "wait" = "wait"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L52-L52)

#### `wait`

```pkl
wait: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L53-L53)

#### `continue_on_failure`

```pkl
continue_on_failure: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L54-L54)

#### ``if``

```pkl
`if`: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L55-L55)

#### `allow_dependency_failure`

```pkl
allow_dependency_failure: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L56-L56)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L57-L57)

### `BlockStep`

#### `kind`

```pkl
kind: "block" = "block"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L61-L61)

#### `block`

```pkl
block: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L62-L62)

#### `prompt`

```pkl
prompt: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L63-L63)

#### `blocked_state`

```pkl
blocked_state: ("passed"|"failed"|"running")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L64-L64)

#### `fields`

```pkl
fields: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L65-L65)

#### `branches`

```pkl
branches: (String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L66-L66)

#### ``if``

```pkl
`if`: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L67-L67)

#### `depends_on`

```pkl
depends_on: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L68-L68)

#### `key`

```pkl
key: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L69-L69)

#### `allow_dependency_failure`

```pkl
allow_dependency_failure: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L70-L70)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L71-L71)

### `InputStep`

#### `kind`

```pkl
kind: "input" = "input"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L75-L75)

#### `input`

```pkl
input: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L76-L76)

#### `prompt`

```pkl
prompt: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L77-L77)

#### `fields`

```pkl
fields: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L78-L78)

#### `branches`

```pkl
branches: (String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L79-L79)

#### ``if``

```pkl
`if`: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L80-L80)

#### `depends_on`

```pkl
depends_on: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L81-L81)

#### `key`

```pkl
key: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L82-L82)

#### `allow_dependency_failure`

```pkl
allow_dependency_failure: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L83-L83)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L84-L84)

### `TriggerStep`

#### `kind`

```pkl
kind: "trigger" = "trigger"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L88-L88)

#### `trigger`

```pkl
trigger: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L89-L89)

#### `label`

```pkl
label: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L90-L90)

#### `build`

```pkl
build: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L91-L91)

#### `async`

```pkl
async: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L92-L92)

#### `branches`

```pkl
branches: (String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L93-L93)

#### ``if``

```pkl
`if`: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L94-L94)

#### `depends_on`

```pkl
depends_on: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L95-L95)

#### `key`

```pkl
key: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L96-L96)

#### `allow_dependency_failure`

```pkl
allow_dependency_failure: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L97-L97)

#### `soft_fail`

```pkl
soft_fail: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L98-L98)

#### `skip`

```pkl
skip: (Boolean|String)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L99-L99)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L100-L100)

### `GroupStep`

#### `kind`

```pkl
kind: "group" = "group"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L104-L104)

#### `group`

```pkl
group: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L105-L105)

#### `key`

```pkl
key: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L106-L106)

#### `steps`

Nested steps. Typed loosely (CommandStep|WaitStep|BlockStep|InputStep|
TriggerStep) to avoid cyclic typealiases — groups cannot nest groups.

```pkl
steps: Listing<CommandStep|WaitStep|BlockStep|InputStep|TriggerStep>
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L109-L109)

#### `depends_on`

```pkl
depends_on: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L110-L110)

#### ``if``

```pkl
`if`: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L111-L111)

#### `allow_dependency_failure`

```pkl
allow_dependency_failure: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L112-L112)

#### `notify`

```pkl
notify: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L113-L113)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/buildkite/Buildkite.pkl#L114-L114)


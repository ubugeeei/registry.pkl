---
title: target.ci.woodpecker.Woodpecker
description: A typed authoring surface for Woodpecker's `.woodpecker.yml` /
---

# `target.ci.woodpecker.Woodpecker`

A typed authoring surface for Woodpecker's `.woodpecker.yml` /
`.woodpecker/*.yml`.

Reference: https://woodpecker-ci.org/docs/usage/workflow-syntax

## Type aliases

### `WhenValue`

```pkl
typealias WhenValue = String|Listing<String>
```

## Fields

#### ``when``

```pkl
`when`: (WhenBlock|Listing<WhenBlock>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/woodpecker/Woodpecker.pkl#L62-L62)

#### `labels`

```pkl
labels: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/woodpecker/Woodpecker.pkl#L63-L63)

#### `variables`

```pkl
variables: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/woodpecker/Woodpecker.pkl#L64-L64)

#### `matrix`

```pkl
matrix: Mapping<String, Listing<String>> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/woodpecker/Woodpecker.pkl#L65-L65)

#### `clone`

```pkl
clone: Clone? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/woodpecker/Woodpecker.pkl#L66-L66)

#### `skip_clone`

```pkl
skip_clone: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/woodpecker/Woodpecker.pkl#L67-L67)

#### `steps`

```pkl
steps: Mapping<String, Step> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/woodpecker/Woodpecker.pkl#L68-L68)

#### `services`

```pkl
services: Mapping<String, Service> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/woodpecker/Woodpecker.pkl#L69-L69)

#### `depends_on`

```pkl
depends_on: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/woodpecker/Woodpecker.pkl#L70-L70)

#### `runs_on`

```pkl
runs_on: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/woodpecker/Woodpecker.pkl#L71-L71)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/woodpecker/Woodpecker.pkl#L72-L72)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/woodpecker/Woodpecker.pkl#L237-L237)

#### `renderer`

```pkl
renderer = new YamlRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/woodpecker/Woodpecker.pkl#L238-L238)

## Classes

### `WhenBlock`

#### `branch`

```pkl
branch: WhenValue? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/woodpecker/Woodpecker.pkl#L12-L12)

#### `event`

```pkl
event: WhenValue? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/woodpecker/Woodpecker.pkl#L13-L13)

#### `status`

```pkl
status: WhenValue? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/woodpecker/Woodpecker.pkl#L14-L14)

#### `path`

```pkl
path: WhenValue? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/woodpecker/Woodpecker.pkl#L15-L15)

#### `ref`

```pkl
ref: WhenValue? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/woodpecker/Woodpecker.pkl#L16-L16)

#### `repo`

```pkl
repo: WhenValue? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/woodpecker/Woodpecker.pkl#L17-L17)

#### `platform`

```pkl
platform: WhenValue? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/woodpecker/Woodpecker.pkl#L18-L18)

#### `environment`

```pkl
environment: WhenValue? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/woodpecker/Woodpecker.pkl#L19-L19)

#### `matrix`

```pkl
matrix: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/woodpecker/Woodpecker.pkl#L20-L20)

#### `evaluate`

```pkl
evaluate: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/woodpecker/Woodpecker.pkl#L21-L21)

#### `cron`

```pkl
cron: WhenValue? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/woodpecker/Woodpecker.pkl#L22-L22)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/woodpecker/Woodpecker.pkl#L23-L23)

### `Step`

#### `name`

```pkl
name: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/woodpecker/Woodpecker.pkl#L27-L27)

#### `image`

```pkl
image: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/woodpecker/Woodpecker.pkl#L28-L28)

#### `commands`

```pkl
commands: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/woodpecker/Woodpecker.pkl#L29-L29)

#### `entrypoint`

```pkl
entrypoint: (String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/woodpecker/Woodpecker.pkl#L30-L30)

#### `environment`

```pkl
environment: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/woodpecker/Woodpecker.pkl#L31-L31)

#### `secrets`

```pkl
secrets: Listing<String|Mapping<String, String>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/woodpecker/Woodpecker.pkl#L32-L32)

#### `settings`

```pkl
settings: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/woodpecker/Woodpecker.pkl#L33-L33)

#### `failure`

```pkl
failure: ("fail"|"ignore")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/woodpecker/Woodpecker.pkl#L34-L34)

#### `detach`

```pkl
detach: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/woodpecker/Woodpecker.pkl#L35-L35)

#### `privileged`

```pkl
privileged: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/woodpecker/Woodpecker.pkl#L36-L36)

#### `group`

```pkl
group: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/woodpecker/Woodpecker.pkl#L37-L37)

#### `pull`

```pkl
pull: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/woodpecker/Woodpecker.pkl#L38-L38)

#### `volumes`

```pkl
volumes: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/woodpecker/Woodpecker.pkl#L39-L39)

#### ``when``

```pkl
`when`: (WhenBlock|Listing<WhenBlock>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/woodpecker/Woodpecker.pkl#L40-L40)

#### `depends_on`

```pkl
depends_on: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/woodpecker/Woodpecker.pkl#L41-L41)

#### `directory`

```pkl
directory: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/woodpecker/Woodpecker.pkl#L42-L42)

#### `backend_options`

```pkl
backend_options: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/woodpecker/Woodpecker.pkl#L43-L43)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/woodpecker/Woodpecker.pkl#L44-L44)

### `Service`

#### `image`

```pkl
image: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/woodpecker/Woodpecker.pkl#L48-L48)

#### `ports`

```pkl
ports: Listing<String|Int> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/woodpecker/Woodpecker.pkl#L49-L49)

#### `environment`

```pkl
environment: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/woodpecker/Woodpecker.pkl#L50-L50)

#### `entrypoint`

```pkl
entrypoint: (String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/woodpecker/Woodpecker.pkl#L51-L51)

#### `privileged`

```pkl
privileged: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/woodpecker/Woodpecker.pkl#L52-L52)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/woodpecker/Woodpecker.pkl#L53-L53)

### `Clone`

#### `image`

```pkl
image: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/woodpecker/Woodpecker.pkl#L57-L57)

#### `settings`

```pkl
settings: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/woodpecker/Woodpecker.pkl#L58-L58)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/woodpecker/Woodpecker.pkl#L59-L59)


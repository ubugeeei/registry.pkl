---
title: target.ci.Drone
description: A typed authoring surface for Drone's `.drone.yml`.
---

# `target.ci.Drone`

A typed authoring surface for Drone's `.drone.yml`.

Reference: https://docs.drone.io/pipeline/overview/

## Fields

#### `kind`

```pkl
kind: ("pipeline"|"secret"|"signature") = "pipeline"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/drone/Drone.pkl#L54-L54)

#### `type`

```pkl
type: ("docker"|"exec"|"kubernetes"|"ssh"|"digitalocean"|"macstadium")? = "docker"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/drone/Drone.pkl#L55-L55)

#### `name`

```pkl
name: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/drone/Drone.pkl#L56-L56)

#### `clone`

```pkl
clone: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/drone/Drone.pkl#L57-L57)

#### `trigger`

```pkl
trigger: Trigger? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/drone/Drone.pkl#L58-L58)

#### `workspace`

```pkl
workspace: Workspace? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/drone/Drone.pkl#L59-L59)

#### `volumes`

```pkl
volumes: Listing<Volume> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/drone/Drone.pkl#L60-L60)

#### `steps`

```pkl
steps: Listing<Step> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/drone/Drone.pkl#L61-L61)

#### `services`

```pkl
services: Listing<Step> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/drone/Drone.pkl#L62-L62)

#### `node`

```pkl
node: Node? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/drone/Drone.pkl#L63-L63)

#### `platform`

```pkl
platform: Mapping<String, String>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/drone/Drone.pkl#L64-L64)

#### `depends_on`

```pkl
depends_on: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/drone/Drone.pkl#L65-L65)

#### `imagePullSecrets`

```pkl
imagePullSecrets: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/drone/Drone.pkl#L66-L66)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/drone/Drone.pkl#L67-L67)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/drone/Drone.pkl#L201-L201)

#### `renderer`

```pkl
renderer = new YamlRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/drone/Drone.pkl#L202-L202)

## Classes

### `Step`

#### `name`

```pkl
name: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/drone/Drone.pkl#L9-L9)

#### `image`

```pkl
image: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/drone/Drone.pkl#L10-L10)

#### `commands`

```pkl
commands: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/drone/Drone.pkl#L11-L11)

#### `environment`

```pkl
environment: Mapping<String, String|Mapping<String, String>> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/drone/Drone.pkl#L12-L12)

#### `failure`

```pkl
failure: ("always"|"ignore"|"never")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/drone/Drone.pkl#L13-L13)

#### `detach`

```pkl
detach: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/drone/Drone.pkl#L14-L14)

#### `privileged`

```pkl
privileged: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/drone/Drone.pkl#L15-L15)

#### `pull`

```pkl
pull: ("always"|"if-not-exists"|"never")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/drone/Drone.pkl#L16-L16)

#### `user`

```pkl
user: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/drone/Drone.pkl#L17-L17)

#### `volumes`

```pkl
volumes: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/drone/Drone.pkl#L18-L18)

#### ``when``

```pkl
`when`: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/drone/Drone.pkl#L19-L19)

#### `depends_on`

```pkl
depends_on: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/drone/Drone.pkl#L20-L20)

#### `settings`

```pkl
settings: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/drone/Drone.pkl#L21-L21)

#### `resources`

```pkl
resources: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/drone/Drone.pkl#L22-L22)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/drone/Drone.pkl#L23-L23)

### `Trigger`

#### `branch`

```pkl
branch: (String|Listing<String>|Mapping<String, Any>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/drone/Drone.pkl#L27-L27)

#### `event`

```pkl
event: (String|Listing<String>|Mapping<String, Any>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/drone/Drone.pkl#L28-L28)

#### `ref`

```pkl
ref: (String|Listing<String>|Mapping<String, Any>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/drone/Drone.pkl#L29-L29)

#### `status`

```pkl
status: (String|Listing<String>|Mapping<String, Any>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/drone/Drone.pkl#L30-L30)

#### `cron`

```pkl
cron: (String|Listing<String>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/drone/Drone.pkl#L31-L31)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/drone/Drone.pkl#L32-L32)

### `Workspace`

#### `path`

```pkl
path: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/drone/Drone.pkl#L36-L36)

#### `base`

```pkl
base: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/drone/Drone.pkl#L37-L37)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/drone/Drone.pkl#L38-L38)

### `Volume`

#### `name`

```pkl
name: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/drone/Drone.pkl#L42-L42)

#### `host`

```pkl
host: Mapping<String, String>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/drone/Drone.pkl#L43-L43)

#### `temp`

```pkl
temp: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/drone/Drone.pkl#L44-L44)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/drone/Drone.pkl#L45-L45)

### `Node`

#### `exclusive`

```pkl
exclusive: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/drone/Drone.pkl#L49-L49)

#### `selector`

```pkl
selector: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/drone/Drone.pkl#L50-L50)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.ci/drone/Drone.pkl#L51-L51)


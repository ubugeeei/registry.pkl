---
title: target.deploy.koyeb.Koyeb
description: A typed authoring surface for Koyeb's `koyeb.yaml`.
---

# `target.deploy.koyeb.Koyeb`

A typed authoring surface for Koyeb's `koyeb.yaml`.

Koyeb's app config is YAML — a top-level `services` list plus
shared databases/regions. This module covers the common service
shape (build/docker, instance, ports, env, scaling, healthchecks).

Reference: https://www.koyeb.com/docs/build-and-deploy/build-from-git

## Fields

#### `services`

```pkl
services: Listing<Service> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/koyeb/Koyeb.pkl#L72-L72)

#### `databases`

```pkl
databases: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/koyeb/Koyeb.pkl#L73-L73)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/koyeb/Koyeb.pkl#L74-L74)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/koyeb/Koyeb.pkl#L200-L200)

#### `renderer`

```pkl
renderer = new YamlRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/koyeb/Koyeb.pkl#L201-L201)

## Classes

### `Build`

#### `buildpack`

```pkl
buildpack: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/koyeb/Koyeb.pkl#L13-L13)

#### `dockerfile`

```pkl
dockerfile: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/koyeb/Koyeb.pkl#L14-L14)

#### `dockerContext`

```pkl
dockerContext: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/koyeb/Koyeb.pkl#L15-L15)

#### `dockerTarget`

```pkl
dockerTarget: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/koyeb/Koyeb.pkl#L16-L16)

#### `dockerArgs`

```pkl
dockerArgs: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/koyeb/Koyeb.pkl#L17-L17)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/koyeb/Koyeb.pkl#L18-L18)

### `Port`

#### `port`

```pkl
port: Int
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/koyeb/Koyeb.pkl#L22-L22)

#### `protocol`

```pkl
protocol: ("http"|"http2"|"tcp")
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/koyeb/Koyeb.pkl#L23-L23)

### `Route`

#### `path`

```pkl
path: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/koyeb/Koyeb.pkl#L27-L27)

#### `port`

```pkl
port: Int
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/koyeb/Koyeb.pkl#L28-L28)

### `HealthCheck`

#### `http`

```pkl
http: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/koyeb/Koyeb.pkl#L32-L32)

#### `tcp`

```pkl
tcp: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/koyeb/Koyeb.pkl#L33-L33)

#### `grace_period`

```pkl
grace_period: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/koyeb/Koyeb.pkl#L34-L34)

#### `interval`

```pkl
interval: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/koyeb/Koyeb.pkl#L35-L35)

#### `restart_limit`

```pkl
restart_limit: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/koyeb/Koyeb.pkl#L36-L36)

#### `timeout`

```pkl
timeout: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/koyeb/Koyeb.pkl#L37-L37)

### `Scaling`

#### `min`

```pkl
min: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/koyeb/Koyeb.pkl#L41-L41)

#### `max`

```pkl
max: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/koyeb/Koyeb.pkl#L42-L42)

#### `targets`

```pkl
targets: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/koyeb/Koyeb.pkl#L43-L43)

### `Env`

#### `key`

```pkl
key: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/koyeb/Koyeb.pkl#L47-L47)

#### `value`

```pkl
value: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/koyeb/Koyeb.pkl#L48-L48)

#### `secret`

```pkl
secret: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/koyeb/Koyeb.pkl#L49-L49)

#### `scopes`

```pkl
scopes: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/koyeb/Koyeb.pkl#L50-L50)

### `Service`

#### `name`

```pkl
name: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/koyeb/Koyeb.pkl#L54-L54)

#### `type`

```pkl
type: ("web"|"worker") = "web"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/koyeb/Koyeb.pkl#L55-L55)

#### `regions`

```pkl
regions: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/koyeb/Koyeb.pkl#L56-L56)

#### `instance_types`

```pkl
instance_types: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/koyeb/Koyeb.pkl#L57-L57)

#### `ports`

```pkl
ports: Listing<Port> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/koyeb/Koyeb.pkl#L58-L58)

#### `routes`

```pkl
routes: Listing<Route> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/koyeb/Koyeb.pkl#L59-L59)

#### `env`

```pkl
env: Listing<Env> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/koyeb/Koyeb.pkl#L60-L60)

#### `scaling`

```pkl
scaling: Scaling? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/koyeb/Koyeb.pkl#L61-L61)

#### `health_checks`

```pkl
health_checks: Listing<HealthCheck> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/koyeb/Koyeb.pkl#L62-L62)

#### `git`

```pkl
git: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/koyeb/Koyeb.pkl#L63-L63)

#### `docker`

```pkl
docker: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/koyeb/Koyeb.pkl#L64-L64)

#### `build`

```pkl
build: Build? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/koyeb/Koyeb.pkl#L65-L65)

#### `privileged`

```pkl
privileged: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/koyeb/Koyeb.pkl#L66-L66)

#### `skip_cache`

```pkl
skip_cache: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/koyeb/Koyeb.pkl#L67-L67)

#### `run_command`

```pkl
run_command: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/koyeb/Koyeb.pkl#L68-L68)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/koyeb/Koyeb.pkl#L69-L69)


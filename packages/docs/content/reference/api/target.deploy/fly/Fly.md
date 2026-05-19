---
title: target.deploy.fly.Fly
description: A typed authoring surface for `fly.toml`.
---

# `target.deploy.fly.Fly`

A typed authoring surface for `fly.toml`.

## Fields

#### `app`

```pkl
app: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/fly/Fly.pkl#L56-L56)

#### `primaryRegion`

```pkl
primaryRegion: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/fly/Fly.pkl#L57-L57)

#### `killSignal`

```pkl
killSignal: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/fly/Fly.pkl#L58-L58)

#### `killTimeout`

```pkl
killTimeout: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/fly/Fly.pkl#L59-L59)

#### `swapSizeMb`

```pkl
swapSizeMb: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/fly/Fly.pkl#L60-L60)

#### `build`

```pkl
build: Build? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/fly/Fly.pkl#L61-L61)

#### `env`

```pkl
env: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/fly/Fly.pkl#L62-L62)

#### `experimental`

```pkl
experimental: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/fly/Fly.pkl#L63-L63)

#### `processes`

```pkl
processes: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/fly/Fly.pkl#L64-L64)

#### `httpService`

```pkl
httpService: HttpService? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/fly/Fly.pkl#L65-L65)

#### `services`

```pkl
services: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/fly/Fly.pkl#L66-L66)

#### `vm`

```pkl
vm: Listing<VmSpec> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/fly/Fly.pkl#L67-L67)

#### `mounts`

```pkl
mounts: Listing<MountConfig> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/fly/Fly.pkl#L68-L68)

#### `statics`

```pkl
statics: Listing<Statics> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/fly/Fly.pkl#L69-L69)

#### `checks`

```pkl
checks: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/fly/Fly.pkl#L70-L70)

#### `deploy`

```pkl
deploy: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/fly/Fly.pkl#L71-L71)

#### `metrics`

```pkl
metrics: (Mapping<String, Any>|Listing<Mapping<String, Any>>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/fly/Fly.pkl#L72-L72)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/fly/Fly.pkl#L73-L73)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/fly/Fly.pkl#L226-L226)

#### `renderer`

```pkl
renderer = new toml.Renderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/fly/Fly.pkl#L227-L227)

## Classes

### `Build`

#### `builder`

```pkl
builder: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/fly/Fly.pkl#L8-L8)

#### `image`

```pkl
image: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/fly/Fly.pkl#L9-L9)

#### `dockerfile`

```pkl
dockerfile: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/fly/Fly.pkl#L10-L10)

#### `buildArgs`

```pkl
buildArgs: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/fly/Fly.pkl#L11-L11)

#### `buildTarget`

```pkl
buildTarget: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/fly/Fly.pkl#L12-L12)

#### `ignorefile`

```pkl
ignorefile: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/fly/Fly.pkl#L13-L13)

#### `args`

```pkl
args: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/fly/Fly.pkl#L14-L14)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/fly/Fly.pkl#L15-L15)

### `HttpService`

#### `internalPort`

```pkl
internalPort: Int
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/fly/Fly.pkl#L19-L19)

#### `forceHttps`

```pkl
forceHttps: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/fly/Fly.pkl#L20-L20)

#### `autoStopMachines`

```pkl
autoStopMachines: ("off"|"stop"|"suspend"|Boolean)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/fly/Fly.pkl#L21-L21)

#### `autoStartMachines`

```pkl
autoStartMachines: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/fly/Fly.pkl#L22-L22)

#### `minMachinesRunning`

```pkl
minMachinesRunning: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/fly/Fly.pkl#L23-L23)

#### `processes`

```pkl
processes: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/fly/Fly.pkl#L24-L24)

#### `concurrency`

```pkl
concurrency: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/fly/Fly.pkl#L25-L25)

#### `httpChecks`

```pkl
httpChecks: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/fly/Fly.pkl#L26-L26)

#### `tcpChecks`

```pkl
tcpChecks: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/fly/Fly.pkl#L27-L27)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/fly/Fly.pkl#L28-L28)

### `VmSpec`

#### `cpus`

```pkl
cpus: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/fly/Fly.pkl#L32-L32)

#### `memory`

```pkl
memory: (String|Int)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/fly/Fly.pkl#L33-L33)

#### `cpuKind`

```pkl
cpuKind: ("shared"|"performance")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/fly/Fly.pkl#L34-L34)

#### `gpus`

```pkl
gpus: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/fly/Fly.pkl#L35-L35)

#### `gpuKind`

```pkl
gpuKind: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/fly/Fly.pkl#L36-L36)

#### `size`

```pkl
size: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/fly/Fly.pkl#L37-L37)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/fly/Fly.pkl#L38-L38)

### `MountConfig`

#### `source`

```pkl
source: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/fly/Fly.pkl#L42-L42)

#### `destination`

```pkl
destination: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/fly/Fly.pkl#L43-L43)

#### `initialSize`

```pkl
initialSize: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/fly/Fly.pkl#L44-L44)

#### `snapshotRetention`

```pkl
snapshotRetention: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/fly/Fly.pkl#L45-L45)

#### `autoExtendSize`

```pkl
autoExtendSize: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/fly/Fly.pkl#L46-L46)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/fly/Fly.pkl#L47-L47)

### `Statics`

#### `guestPath`

```pkl
guestPath: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/fly/Fly.pkl#L51-L51)

#### `urlPrefix`

```pkl
urlPrefix: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/fly/Fly.pkl#L52-L52)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.deploy/fly/Fly.pkl#L53-L53)


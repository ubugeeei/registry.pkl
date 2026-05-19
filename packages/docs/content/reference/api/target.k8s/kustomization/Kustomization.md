---
title: target.k8s.kustomization.Kustomization
description: A typed authoring surface for `kustomization.yaml`.
---

# `target.k8s.kustomization.Kustomization`

A typed authoring surface for `kustomization.yaml`.

## Fields

#### `apiVersion`

```pkl
apiVersion: String = "kustomize.config.k8s.io/v1beta1"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L67-L67)

#### `kind`

```pkl
kind: String = "Kustomization"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L68-L68)

#### `namespace`

```pkl
namespace: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L69-L69)

#### `namePrefix`

```pkl
namePrefix: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L70-L70)

#### `nameSuffix`

```pkl
nameSuffix: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L71-L71)

#### `commonLabels`

```pkl
commonLabels: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L72-L72)

#### `commonAnnotations`

```pkl
commonAnnotations: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L73-L73)

#### `labels`

```pkl
labels: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L74-L74)

#### `annotations`

```pkl
annotations: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L75-L75)

#### `resources`

```pkl
resources: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L76-L76)

#### `components`

```pkl
components: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L77-L77)

#### `configurations`

```pkl
configurations: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L78-L78)

#### `crds`

```pkl
crds: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L79-L79)

#### `images`

```pkl
images: Listing<Image> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L80-L80)

#### `replicas`

```pkl
replicas: Listing<Replicas> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L81-L81)

#### `patches`

```pkl
patches: Listing<Patch> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L82-L82)

#### `patchesStrategicMerge`

```pkl
patchesStrategicMerge: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L83-L83)

#### `patchesJson6902`

```pkl
patchesJson6902: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L84-L84)

#### `configMapGenerator`

```pkl
configMapGenerator: Listing<ConfigMapGen> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L85-L85)

#### `secretGenerator`

```pkl
secretGenerator: Listing<SecretGen> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L86-L86)

#### `generators`

```pkl
generators: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L87-L87)

#### `transformers`

```pkl
transformers: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L88-L88)

#### `helmCharts`

```pkl
helmCharts: Listing<HelmChart> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L89-L89)

#### `helmGlobals`

```pkl
helmGlobals: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L90-L90)

#### `buildMetadata`

```pkl
buildMetadata: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L91-L91)

#### `sortOptions`

```pkl
sortOptions: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L92-L92)

#### `openapi`

```pkl
openapi: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L93-L93)

#### `vars`

```pkl
vars: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L94-L94)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L95-L95)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L305-L305)

#### `renderer`

```pkl
renderer = new YamlRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L306-L306)

## Classes

### `Patch`

#### `path`

```pkl
path: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L7-L7)

#### `patch`

```pkl
patch: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L8-L8)

#### `target`

```pkl
target: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L9-L9)

#### `options`

```pkl
options: Mapping<String, Boolean> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L10-L10)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L11-L11)

### `ConfigMapGen`

#### `name`

```pkl
name: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L15-L15)

#### `namespace`

```pkl
namespace: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L16-L16)

#### `behavior`

```pkl
behavior: ("create"|"replace"|"merge")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L17-L17)

#### `literals`

```pkl
literals: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L18-L18)

#### `files`

```pkl
files: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L19-L19)

#### `envs`

```pkl
envs: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L20-L20)

#### `options`

```pkl
options: Mapping<String, Boolean> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L21-L21)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L22-L22)

### `SecretGen`

#### `name`

```pkl
name: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L26-L26)

#### `namespace`

```pkl
namespace: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L27-L27)

#### `behavior`

```pkl
behavior: ("create"|"replace"|"merge")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L28-L28)

#### `type`

```pkl
type: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L29-L29)

#### `literals`

```pkl
literals: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L30-L30)

#### `files`

```pkl
files: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L31-L31)

#### `envs`

```pkl
envs: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L32-L32)

#### `options`

```pkl
options: Mapping<String, Boolean> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L33-L33)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L34-L34)

### `Image`

#### `name`

```pkl
name: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L38-L38)

#### `newName`

```pkl
newName: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L39-L39)

#### `newTag`

```pkl
newTag: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L40-L40)

#### `digest`

```pkl
digest: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L41-L41)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L42-L42)

### `Replicas`

#### `name`

```pkl
name: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L46-L46)

#### `count`

```pkl
count: Int
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L47-L47)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L48-L48)

### `HelmChart`

#### `name`

```pkl
name: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L52-L52)

#### `repo`

```pkl
repo: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L53-L53)

#### `version`

```pkl
version: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L54-L54)

#### `releaseName`

```pkl
releaseName: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L55-L55)

#### `namespace`

```pkl
namespace: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L56-L56)

#### `valuesFile`

```pkl
valuesFile: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L57-L57)

#### `valuesInline`

```pkl
valuesInline: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L58-L58)

#### `valuesMerge`

```pkl
valuesMerge: ("override"|"merge"|"replace")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L59-L59)

#### `includeCRDs`

```pkl
includeCRDs: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L60-L60)

#### `skipHooks`

```pkl
skipHooks: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L61-L61)

#### `skipTests`

```pkl
skipTests: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L62-L62)

#### `apiVersions`

```pkl
apiVersions: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L63-L63)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/kustomization/Kustomization.pkl#L64-L64)


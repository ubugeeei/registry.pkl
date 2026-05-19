---
title: target.k8s.configmap.ConfigMap
description: A typed authoring surface for a `v1.ConfigMap`.
---

# `target.k8s.configmap.ConfigMap`

A typed authoring surface for a `v1.ConfigMap`.

Reference: https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.31/#configmap-v1-core

## Fields

#### `apiVersion`

```pkl
apiVersion: String = "v1"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/configmap/ConfigMap.pkl#L9-L9)

#### `kind`

```pkl
kind: String = "ConfigMap"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/configmap/ConfigMap.pkl#L10-L10)

#### `metadata`

```pkl
metadata: Pod.ObjectMeta
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/configmap/ConfigMap.pkl#L11-L11)

#### `data`

```pkl
data: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/configmap/ConfigMap.pkl#L12-L12)

#### `binaryData`

```pkl
binaryData: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/configmap/ConfigMap.pkl#L13-L13)

#### `immutable`

```pkl
immutable: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/configmap/ConfigMap.pkl#L14-L14)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/configmap/ConfigMap.pkl#L15-L15)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/configmap/ConfigMap.pkl#L48-L48)

#### `renderer`

```pkl
renderer = new YamlRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/configmap/ConfigMap.pkl#L49-L49)


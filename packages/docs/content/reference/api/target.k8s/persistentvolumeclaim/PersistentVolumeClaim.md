---
title: target.k8s.persistentvolumeclaim.PersistentVolumeClaim
description: A typed authoring surface for `v1.PersistentVolumeClaim`.
---

# `target.k8s.persistentvolumeclaim.PersistentVolumeClaim`

A typed authoring surface for `v1.PersistentVolumeClaim`.

Reference: https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.31/#persistentvolumeclaim-v1-core

## Fields

#### `apiVersion`

```pkl
apiVersion: String = "v1"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/persistentvolumeclaim/PersistentVolumeClaim.pkl#L27-L27)

#### `kind`

```pkl
kind: String = "PersistentVolumeClaim"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/persistentvolumeclaim/PersistentVolumeClaim.pkl#L28-L28)

#### `metadata`

```pkl
metadata: Pod.ObjectMeta
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/persistentvolumeclaim/PersistentVolumeClaim.pkl#L29-L29)

#### `spec`

```pkl
spec: Spec
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/persistentvolumeclaim/PersistentVolumeClaim.pkl#L30-L30)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/persistentvolumeclaim/PersistentVolumeClaim.pkl#L31-L31)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/persistentvolumeclaim/PersistentVolumeClaim.pkl#L112-L112)

#### `renderer`

```pkl
renderer = new YamlRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/persistentvolumeclaim/PersistentVolumeClaim.pkl#L113-L113)

## Classes

### `ResourceRequirements`

#### `limits`

```pkl
limits: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/persistentvolumeclaim/PersistentVolumeClaim.pkl#L11-L11)

#### `requests`

```pkl
requests: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/persistentvolumeclaim/PersistentVolumeClaim.pkl#L12-L12)

### `Spec`

#### `accessModes`

```pkl
accessModes: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/persistentvolumeclaim/PersistentVolumeClaim.pkl#L16-L16)

#### `selector`

```pkl
selector: Dep.LabelSelector? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/persistentvolumeclaim/PersistentVolumeClaim.pkl#L17-L17)

#### `resources`

```pkl
resources: ResourceRequirements? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/persistentvolumeclaim/PersistentVolumeClaim.pkl#L18-L18)

#### `storageClassName`

```pkl
storageClassName: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/persistentvolumeclaim/PersistentVolumeClaim.pkl#L19-L19)

#### `volumeName`

```pkl
volumeName: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/persistentvolumeclaim/PersistentVolumeClaim.pkl#L20-L20)

#### `volumeMode`

```pkl
volumeMode: ("Filesystem"|"Block")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/persistentvolumeclaim/PersistentVolumeClaim.pkl#L21-L21)

#### `dataSource`

```pkl
dataSource: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/persistentvolumeclaim/PersistentVolumeClaim.pkl#L22-L22)

#### `dataSourceRef`

```pkl
dataSourceRef: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/persistentvolumeclaim/PersistentVolumeClaim.pkl#L23-L23)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/persistentvolumeclaim/PersistentVolumeClaim.pkl#L24-L24)


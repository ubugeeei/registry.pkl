---
title: target.k8s.statefulset.StatefulSet
description: A typed authoring surface for `apps/v1.StatefulSet`.
---

# `target.k8s.statefulset.StatefulSet`

A typed authoring surface for `apps/v1.StatefulSet`.

Reference: https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.31/#statefulset-v1-apps

## Fields

#### `apiVersion`

```pkl
apiVersion: String = "apps/v1"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/statefulset/StatefulSet.pkl#L47-L47)

#### `kind`

```pkl
kind: String = "StatefulSet"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/statefulset/StatefulSet.pkl#L48-L48)

#### `metadata`

```pkl
metadata: Pod.ObjectMeta
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/statefulset/StatefulSet.pkl#L49-L49)

#### `spec`

```pkl
spec: Spec
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/statefulset/StatefulSet.pkl#L50-L50)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/statefulset/StatefulSet.pkl#L51-L51)

#### `spec`

```pkl
spec = value
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/statefulset/StatefulSet.pkl#L89-L89)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/statefulset/StatefulSet.pkl#L183-L183)

#### `renderer`

```pkl
renderer = new YamlRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/statefulset/StatefulSet.pkl#L184-L184)

## Classes

### `PvcSpec`

#### `accessModes`

```pkl
accessModes: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/statefulset/StatefulSet.pkl#L11-L11)

#### `resources`

```pkl
resources: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/statefulset/StatefulSet.pkl#L12-L12)

#### `selector`

```pkl
selector: Dep.LabelSelector? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/statefulset/StatefulSet.pkl#L13-L13)

#### `storageClassName`

```pkl
storageClassName: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/statefulset/StatefulSet.pkl#L14-L14)

#### `volumeMode`

```pkl
volumeMode: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/statefulset/StatefulSet.pkl#L15-L15)

#### `volumeName`

```pkl
volumeName: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/statefulset/StatefulSet.pkl#L16-L16)

#### `dataSource`

```pkl
dataSource: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/statefulset/StatefulSet.pkl#L17-L17)

#### `dataSourceRef`

```pkl
dataSourceRef: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/statefulset/StatefulSet.pkl#L18-L18)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/statefulset/StatefulSet.pkl#L19-L19)

### `VolumeClaimTemplate`

#### `metadata`

```pkl
metadata: Pod.ObjectMeta
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/statefulset/StatefulSet.pkl#L23-L23)

#### `spec`

```pkl
spec: PvcSpec
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/statefulset/StatefulSet.pkl#L24-L24)

### `UpdateStrategy`

#### `type`

```pkl
type: ("RollingUpdate"|"OnDelete")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/statefulset/StatefulSet.pkl#L28-L28)

#### `rollingUpdate`

```pkl
rollingUpdate: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/statefulset/StatefulSet.pkl#L29-L29)

### `Spec`

#### `replicas`

```pkl
replicas: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/statefulset/StatefulSet.pkl#L33-L33)

#### `selector`

```pkl
selector: Dep.LabelSelector
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/statefulset/StatefulSet.pkl#L34-L34)

#### `template`

```pkl
template: Dep.Template
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/statefulset/StatefulSet.pkl#L35-L35)

#### `serviceName`

```pkl
serviceName: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/statefulset/StatefulSet.pkl#L36-L36)

#### `volumeClaimTemplates`

```pkl
volumeClaimTemplates: Listing<VolumeClaimTemplate> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/statefulset/StatefulSet.pkl#L37-L37)

#### `podManagementPolicy`

```pkl
podManagementPolicy: ("OrderedReady"|"Parallel")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/statefulset/StatefulSet.pkl#L38-L38)

#### `updateStrategy`

```pkl
updateStrategy: UpdateStrategy? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/statefulset/StatefulSet.pkl#L39-L39)

#### `revisionHistoryLimit`

```pkl
revisionHistoryLimit: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/statefulset/StatefulSet.pkl#L40-L40)

#### `minReadySeconds`

```pkl
minReadySeconds: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/statefulset/StatefulSet.pkl#L41-L41)

#### `persistentVolumeClaimRetentionPolicy`

```pkl
persistentVolumeClaimRetentionPolicy: Mapping<String, String>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/statefulset/StatefulSet.pkl#L42-L42)

#### `ordinals`

```pkl
ordinals: Mapping<String, Int>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/statefulset/StatefulSet.pkl#L43-L43)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/statefulset/StatefulSet.pkl#L44-L44)


---
title: target.k8s.daemonset.DaemonSet
description: A typed authoring surface for `apps/v1.DaemonSet`.
---

# `target.k8s.daemonset.DaemonSet`

A typed authoring surface for `apps/v1.DaemonSet`.

Reference: https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.31/#daemonset-v1-apps

## Fields

#### `apiVersion`

```pkl
apiVersion: String = "apps/v1"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/daemonset/DaemonSet.pkl#L24-L24)

#### `kind`

```pkl
kind: String = "DaemonSet"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/daemonset/DaemonSet.pkl#L25-L25)

#### `metadata`

```pkl
metadata: Pod.ObjectMeta
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/daemonset/DaemonSet.pkl#L26-L26)

#### `spec`

```pkl
spec: Spec
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/daemonset/DaemonSet.pkl#L27-L27)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/daemonset/DaemonSet.pkl#L28-L28)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/daemonset/DaemonSet.pkl#L102-L102)

#### `renderer`

```pkl
renderer = new YamlRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/daemonset/DaemonSet.pkl#L103-L103)

## Classes

### `UpdateStrategy`

#### `type`

```pkl
type: ("RollingUpdate"|"OnDelete")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/daemonset/DaemonSet.pkl#L11-L11)

#### `rollingUpdate`

```pkl
rollingUpdate: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/daemonset/DaemonSet.pkl#L12-L12)

### `Spec`

#### `selector`

```pkl
selector: Dep.LabelSelector
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/daemonset/DaemonSet.pkl#L16-L16)

#### `template`

```pkl
template: Dep.Template
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/daemonset/DaemonSet.pkl#L17-L17)

#### `updateStrategy`

```pkl
updateStrategy: UpdateStrategy? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/daemonset/DaemonSet.pkl#L18-L18)

#### `minReadySeconds`

```pkl
minReadySeconds: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/daemonset/DaemonSet.pkl#L19-L19)

#### `revisionHistoryLimit`

```pkl
revisionHistoryLimit: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/daemonset/DaemonSet.pkl#L20-L20)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/daemonset/DaemonSet.pkl#L21-L21)


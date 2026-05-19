---
title: target.k8s.deployment.Deployment
description: A typed authoring surface for a `apps/v1.Deployment`.
---

# `target.k8s.deployment.Deployment`

A typed authoring surface for a `apps/v1.Deployment`.

The pod-spec half is delegated to `@target.k8s/podtemplate/PodTemplate.pkl`
so Deployment / StatefulSet / DaemonSet share the same container
modeling.

Reference: https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.31/#deployment-v1-apps

## Fields

#### `apiVersion`

```pkl
apiVersion: String = "apps/v1"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/deployment/Deployment.pkl#L46-L46)

#### `kind`

```pkl
kind: String = "Deployment"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/deployment/Deployment.pkl#L47-L47)

#### `metadata`

```pkl
metadata: Pod.ObjectMeta
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/deployment/Deployment.pkl#L48-L48)

#### `spec`

```pkl
spec: Spec
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/deployment/Deployment.pkl#L49-L49)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/deployment/Deployment.pkl#L50-L50)

#### `apiVersion`

```pkl
apiVersion = "v1"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/deployment/Deployment.pkl#L109-L109)

#### `kind`

```pkl
kind = "Pod"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/deployment/Deployment.pkl#L110-L110)

#### `spec`

```pkl
spec = value
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/deployment/Deployment.pkl#L111-L111)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/deployment/Deployment.pkl#L149-L149)

#### `renderer`

```pkl
renderer = new YamlRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/deployment/Deployment.pkl#L150-L150)

## Classes

### `RollingUpdate`

#### `maxSurge`

```pkl
maxSurge: (String|Int)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/deployment/Deployment.pkl#L14-L14)

#### `maxUnavailable`

```pkl
maxUnavailable: (String|Int)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/deployment/Deployment.pkl#L15-L15)

### `Strategy`

#### `type`

```pkl
type: ("Recreate"|"RollingUpdate")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/deployment/Deployment.pkl#L19-L19)

#### `rollingUpdate`

```pkl
rollingUpdate: RollingUpdate? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/deployment/Deployment.pkl#L20-L20)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/deployment/Deployment.pkl#L21-L21)

### `LabelSelector`

#### `matchLabels`

```pkl
matchLabels: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/deployment/Deployment.pkl#L25-L25)

#### `matchExpressions`

```pkl
matchExpressions: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/deployment/Deployment.pkl#L26-L26)

### `Template`

#### `metadata`

```pkl
metadata: Pod.ObjectMeta? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/deployment/Deployment.pkl#L30-L30)

#### `spec`

```pkl
spec: Pod.PodTemplateSpec
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/deployment/Deployment.pkl#L31-L31)

### `Spec`

#### `replicas`

```pkl
replicas: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/deployment/Deployment.pkl#L35-L35)

#### `selector`

```pkl
selector: LabelSelector
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/deployment/Deployment.pkl#L36-L36)

#### `template`

```pkl
template: Template
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/deployment/Deployment.pkl#L37-L37)

#### `strategy`

```pkl
strategy: Strategy? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/deployment/Deployment.pkl#L38-L38)

#### `minReadySeconds`

```pkl
minReadySeconds: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/deployment/Deployment.pkl#L39-L39)

#### `revisionHistoryLimit`

```pkl
revisionHistoryLimit: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/deployment/Deployment.pkl#L40-L40)

#### `progressDeadlineSeconds`

```pkl
progressDeadlineSeconds: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/deployment/Deployment.pkl#L41-L41)

#### `paused`

```pkl
paused: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/deployment/Deployment.pkl#L42-L42)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/deployment/Deployment.pkl#L43-L43)


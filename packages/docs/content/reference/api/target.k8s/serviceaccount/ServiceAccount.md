---
title: target.k8s.serviceaccount.ServiceAccount
description: A typed authoring surface for `v1.ServiceAccount`.
---

# `target.k8s.serviceaccount.ServiceAccount`

A typed authoring surface for `v1.ServiceAccount`.

Reference: https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.31/#serviceaccount-v1-core

## Fields

#### `apiVersion`

```pkl
apiVersion: String = "v1"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/serviceaccount/ServiceAccount.pkl#L13-L13)

#### `kind`

```pkl
kind: String = "ServiceAccount"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/serviceaccount/ServiceAccount.pkl#L14-L14)

#### `metadata`

```pkl
metadata: Pod.ObjectMeta
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/serviceaccount/ServiceAccount.pkl#L15-L15)

#### `automountServiceAccountToken`

```pkl
automountServiceAccountToken: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/serviceaccount/ServiceAccount.pkl#L16-L16)

#### `imagePullSecrets`

```pkl
imagePullSecrets: Listing<LocalObjectReference> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/serviceaccount/ServiceAccount.pkl#L17-L17)

#### `secrets`

```pkl
secrets: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/serviceaccount/ServiceAccount.pkl#L18-L18)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/serviceaccount/ServiceAccount.pkl#L19-L19)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/serviceaccount/ServiceAccount.pkl#L57-L57)

#### `renderer`

```pkl
renderer = new YamlRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/serviceaccount/ServiceAccount.pkl#L58-L58)

## Classes

### `LocalObjectReference`

#### `name`

```pkl
name: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/serviceaccount/ServiceAccount.pkl#L10-L10)


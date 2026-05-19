---
title: target.k8s.rolebinding.RoleBinding
description: A typed authoring surface for `rbac.authorization.k8s.io/v1.RoleBinding`.
---

# `target.k8s.rolebinding.RoleBinding`

A typed authoring surface for `rbac.authorization.k8s.io/v1.RoleBinding`.

Namespaced binding: ties Subjects to a Role or ClusterRole via roleRef.

Reference: https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.31/#rolebinding-v1-rbac-authorization-k8s-io

## Fields

#### `apiVersion`

```pkl
apiVersion: String = "rbac.authorization.k8s.io/v1"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/rolebinding/RoleBinding.pkl#L24-L24)

#### `kind`

```pkl
kind: String = "RoleBinding"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/rolebinding/RoleBinding.pkl#L25-L25)

#### `metadata`

```pkl
metadata: Pod.ObjectMeta
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/rolebinding/RoleBinding.pkl#L26-L26)

#### `subjects`

```pkl
subjects: Listing<Subject> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/rolebinding/RoleBinding.pkl#L27-L27)

#### `roleRef`

```pkl
roleRef: RoleRef
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/rolebinding/RoleBinding.pkl#L28-L28)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/rolebinding/RoleBinding.pkl#L29-L29)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/rolebinding/RoleBinding.pkl#L76-L76)

#### `renderer`

```pkl
renderer = new YamlRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/rolebinding/RoleBinding.pkl#L77-L77)

## Classes

### `Subject`

#### `kind`

```pkl
kind: ("User"|"Group"|"ServiceAccount")
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/rolebinding/RoleBinding.pkl#L12-L12)

#### `name`

```pkl
name: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/rolebinding/RoleBinding.pkl#L13-L13)

#### `namespace`

```pkl
namespace: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/rolebinding/RoleBinding.pkl#L14-L14)

#### `apiGroup`

```pkl
apiGroup: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/rolebinding/RoleBinding.pkl#L15-L15)

### `RoleRef`

#### `apiGroup`

```pkl
apiGroup: String = "rbac.authorization.k8s.io"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/rolebinding/RoleBinding.pkl#L19-L19)

#### `kind`

```pkl
kind: ("Role"|"ClusterRole")
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/rolebinding/RoleBinding.pkl#L20-L20)

#### `name`

```pkl
name: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/rolebinding/RoleBinding.pkl#L21-L21)


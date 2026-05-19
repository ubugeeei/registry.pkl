---
title: target.k8s.clusterrolebinding.ClusterRoleBinding
description: A typed authoring surface for `rbac.authorization.k8s.io/v1.ClusterRoleBinding`.
---

# `target.k8s.clusterrolebinding.ClusterRoleBinding`

A typed authoring surface for `rbac.authorization.k8s.io/v1.ClusterRoleBinding`.

Cluster-scoped equivalent of RoleBinding; reuses RoleBinding's
Subject / RoleRef classes.

Reference: https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.31/#clusterrolebinding-v1-rbac-authorization-k8s-io

## Fields

#### `apiVersion`

```pkl
apiVersion: String = "rbac.authorization.k8s.io/v1"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/clusterrolebinding/ClusterRoleBinding.pkl#L13-L13)

#### `kind`

```pkl
kind: String = "ClusterRoleBinding"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/clusterrolebinding/ClusterRoleBinding.pkl#L14-L14)

#### `metadata`

```pkl
metadata: Pod.ObjectMeta
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/clusterrolebinding/ClusterRoleBinding.pkl#L15-L15)

#### `subjects`

```pkl
subjects: Listing<Rb.Subject> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/clusterrolebinding/ClusterRoleBinding.pkl#L16-L16)

#### `roleRef`

```pkl
roleRef: Rb.RoleRef
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/clusterrolebinding/ClusterRoleBinding.pkl#L17-L17)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/clusterrolebinding/ClusterRoleBinding.pkl#L18-L18)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/clusterrolebinding/ClusterRoleBinding.pkl#L65-L65)

#### `renderer`

```pkl
renderer = new YamlRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/clusterrolebinding/ClusterRoleBinding.pkl#L66-L66)


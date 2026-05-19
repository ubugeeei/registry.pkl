---
title: target.k8s.clusterrole.ClusterRole
description: A typed authoring surface for `rbac.authorization.k8s.io/v1.ClusterRole`.
---

# `target.k8s.clusterrole.ClusterRole`

A typed authoring surface for `rbac.authorization.k8s.io/v1.ClusterRole`.

Cluster-scoped role; reuses Role.PolicyRule for the rules list.
Adds aggregationRule for composing roles from labeled selectors.

Reference: https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.31/#clusterrole-v1-rbac-authorization-k8s-io

## Fields

#### `apiVersion`

```pkl
apiVersion: String = "rbac.authorization.k8s.io/v1"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/clusterrole/ClusterRole.pkl#L18-L18)

#### `kind`

```pkl
kind: String = "ClusterRole"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/clusterrole/ClusterRole.pkl#L19-L19)

#### `metadata`

```pkl
metadata: Pod.ObjectMeta
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/clusterrole/ClusterRole.pkl#L20-L20)

#### `rules`

```pkl
rules: Listing<Role.PolicyRule> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/clusterrole/ClusterRole.pkl#L21-L21)

#### `aggregationRule`

```pkl
aggregationRule: AggregationRule? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/clusterrole/ClusterRole.pkl#L22-L22)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/clusterrole/ClusterRole.pkl#L23-L23)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/clusterrole/ClusterRole.pkl#L91-L91)

#### `renderer`

```pkl
renderer = new YamlRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/clusterrole/ClusterRole.pkl#L92-L92)

## Classes

### `AggregationRule`

#### `clusterRoleSelectors`

```pkl
clusterRoleSelectors: Listing<Dep.LabelSelector> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/clusterrole/ClusterRole.pkl#L15-L15)


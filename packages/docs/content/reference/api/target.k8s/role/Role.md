---
title: target.k8s.role.Role
description: A typed authoring surface for `rbac.authorization.k8s.io/v1.Role`.
---

# `target.k8s.role.Role`

A typed authoring surface for `rbac.authorization.k8s.io/v1.Role`.

PolicyRule is shared between Role and ClusterRole.

Reference: https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.31/#role-v1-rbac-authorization-k8s-io

## Fields

#### `apiVersion`

```pkl
apiVersion: String = "rbac.authorization.k8s.io/v1"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/role/Role.pkl#L20-L20)

#### `kind`

```pkl
kind: String = "Role"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/role/Role.pkl#L21-L21)

#### `metadata`

```pkl
metadata: Pod.ObjectMeta
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/role/Role.pkl#L22-L22)

#### `rules`

```pkl
rules: Listing<PolicyRule>
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/role/Role.pkl#L23-L23)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/role/Role.pkl#L24-L24)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/role/Role.pkl#L79-L79)

#### `renderer`

```pkl
renderer = new YamlRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/role/Role.pkl#L80-L80)

## Classes

### `PolicyRule`

#### `verbs`

```pkl
verbs: Listing<String>
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/role/Role.pkl#L12-L12)

#### `apiGroups`

```pkl
apiGroups: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/role/Role.pkl#L13-L13)

#### `resources`

```pkl
resources: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/role/Role.pkl#L14-L14)

#### `resourceNames`

```pkl
resourceNames: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/role/Role.pkl#L15-L15)

#### `nonResourceURLs`

```pkl
nonResourceURLs: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/role/Role.pkl#L16-L16)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/role/Role.pkl#L17-L17)


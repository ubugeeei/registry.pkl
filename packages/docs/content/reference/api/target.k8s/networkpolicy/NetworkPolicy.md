---
title: target.k8s.networkpolicy.NetworkPolicy
description: A typed authoring surface for `networking.k8s.io/v1.NetworkPolicy`.
---

# `target.k8s.networkpolicy.NetworkPolicy`

A typed authoring surface for `networking.k8s.io/v1.NetworkPolicy`.

Reference: https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.31/#networkpolicy-v1-networking-k8s-io

## Fields

#### `apiVersion`

```pkl
apiVersion: String = "networking.k8s.io/v1"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/networkpolicy/NetworkPolicy.pkl#L45-L45)

#### `kind`

```pkl
kind: String = "NetworkPolicy"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/networkpolicy/NetworkPolicy.pkl#L46-L46)

#### `metadata`

```pkl
metadata: Pod.ObjectMeta
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/networkpolicy/NetworkPolicy.pkl#L47-L47)

#### `spec`

```pkl
spec: Spec
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/networkpolicy/NetworkPolicy.pkl#L48-L48)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/networkpolicy/NetworkPolicy.pkl#L49-L49)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/networkpolicy/NetworkPolicy.pkl#L154-L154)

#### `renderer`

```pkl
renderer = new YamlRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/networkpolicy/NetworkPolicy.pkl#L155-L155)

## Classes

### `NetworkPolicyPort`

#### `protocol`

```pkl
protocol: ("TCP"|"UDP"|"SCTP")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/networkpolicy/NetworkPolicy.pkl#L11-L11)

#### `port`

```pkl
port: (String|Int)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/networkpolicy/NetworkPolicy.pkl#L12-L12)

#### `endPort`

```pkl
endPort: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/networkpolicy/NetworkPolicy.pkl#L13-L13)

### `IPBlock`

#### `cidr`

```pkl
cidr: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/networkpolicy/NetworkPolicy.pkl#L17-L17)

#### `except`

```pkl
except: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/networkpolicy/NetworkPolicy.pkl#L18-L18)

### `NetworkPolicyPeer`

#### `podSelector`

```pkl
podSelector: Dep.LabelSelector? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/networkpolicy/NetworkPolicy.pkl#L22-L22)

#### `namespaceSelector`

```pkl
namespaceSelector: Dep.LabelSelector? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/networkpolicy/NetworkPolicy.pkl#L23-L23)

#### `ipBlock`

```pkl
ipBlock: IPBlock? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/networkpolicy/NetworkPolicy.pkl#L24-L24)

### `NetworkPolicyIngressRule`

#### `ports`

```pkl
ports: Listing<NetworkPolicyPort> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/networkpolicy/NetworkPolicy.pkl#L28-L28)

#### ``from``

```pkl
`from`: Listing<NetworkPolicyPeer> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/networkpolicy/NetworkPolicy.pkl#L29-L29)

### `NetworkPolicyEgressRule`

#### `ports`

```pkl
ports: Listing<NetworkPolicyPort> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/networkpolicy/NetworkPolicy.pkl#L33-L33)

#### `to`

```pkl
to: Listing<NetworkPolicyPeer> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/networkpolicy/NetworkPolicy.pkl#L34-L34)

### `Spec`

#### `podSelector`

```pkl
podSelector: Dep.LabelSelector
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/networkpolicy/NetworkPolicy.pkl#L38-L38)

#### `policyTypes`

```pkl
policyTypes: Listing<"Ingress"|"Egress"> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/networkpolicy/NetworkPolicy.pkl#L39-L39)

#### `ingress`

```pkl
ingress: Listing<NetworkPolicyIngressRule> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/networkpolicy/NetworkPolicy.pkl#L40-L40)

#### `egress`

```pkl
egress: Listing<NetworkPolicyEgressRule> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/networkpolicy/NetworkPolicy.pkl#L41-L41)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/networkpolicy/NetworkPolicy.pkl#L42-L42)


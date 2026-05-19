---
title: target.k8s.service.Service
description: A typed authoring surface for a `v1.Service`.
---

# `target.k8s.service.Service`

A typed authoring surface for a `v1.Service`.

Models the slice of the Service spec most teams configure — selector,
ports, type, externalTrafficPolicy. The rest falls through `extra`.

Reference: https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.31/#service-v1-core

## Type aliases

### `ServiceType`

```pkl
typealias ServiceType = 
```

## Fields

#### `apiVersion`

```pkl
apiVersion: String = "v1"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/service/Service.pkl#L53-L53)

#### `kind`

```pkl
kind: String = "Service"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/service/Service.pkl#L54-L54)

#### `metadata`

```pkl
metadata: Pod.ObjectMeta
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/service/Service.pkl#L55-L55)

#### `spec`

```pkl
spec: Spec
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/service/Service.pkl#L56-L56)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/service/Service.pkl#L57-L57)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/service/Service.pkl#L170-L170)

#### `renderer`

```pkl
renderer = new YamlRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/service/Service.pkl#L171-L171)

## Classes

### `ServicePort`

#### `name`

```pkl
name: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/service/Service.pkl#L16-L16)

#### `protocol`

```pkl
protocol: ("TCP"|"UDP"|"SCTP")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/service/Service.pkl#L17-L17)

#### `appProtocol`

```pkl
appProtocol: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/service/Service.pkl#L18-L18)

#### `port`

```pkl
port: Int
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/service/Service.pkl#L19-L19)

#### `targetPort`

```pkl
targetPort: (String|Int)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/service/Service.pkl#L20-L20)

#### `nodePort`

```pkl
nodePort: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/service/Service.pkl#L21-L21)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/service/Service.pkl#L22-L22)

### `SessionAffinityConfig`

#### `clientIP`

```pkl
clientIP: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/service/Service.pkl#L26-L26)

### `Spec`

#### `selector`

```pkl
selector: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/service/Service.pkl#L30-L30)

#### `ports`

```pkl
ports: Listing<ServicePort> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/service/Service.pkl#L31-L31)

#### `type`

```pkl
type: ServiceType? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/service/Service.pkl#L32-L32)

#### `clusterIP`

```pkl
clusterIP: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/service/Service.pkl#L33-L33)

#### `clusterIPs`

```pkl
clusterIPs: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/service/Service.pkl#L34-L34)

#### `externalIPs`

```pkl
externalIPs: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/service/Service.pkl#L35-L35)

#### `externalName`

```pkl
externalName: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/service/Service.pkl#L36-L36)

#### `externalTrafficPolicy`

```pkl
externalTrafficPolicy: ("Cluster"|"Local")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/service/Service.pkl#L37-L37)

#### `internalTrafficPolicy`

```pkl
internalTrafficPolicy: ("Cluster"|"Local")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/service/Service.pkl#L38-L38)

#### `loadBalancerIP`

```pkl
loadBalancerIP: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/service/Service.pkl#L39-L39)

#### `loadBalancerSourceRanges`

```pkl
loadBalancerSourceRanges: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/service/Service.pkl#L40-L40)

#### `loadBalancerClass`

```pkl
loadBalancerClass: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/service/Service.pkl#L41-L41)

#### `healthCheckNodePort`

```pkl
healthCheckNodePort: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/service/Service.pkl#L42-L42)

#### `publishNotReadyAddresses`

```pkl
publishNotReadyAddresses: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/service/Service.pkl#L43-L43)

#### `sessionAffinity`

```pkl
sessionAffinity: ("None"|"ClientIP")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/service/Service.pkl#L44-L44)

#### `sessionAffinityConfig`

```pkl
sessionAffinityConfig: SessionAffinityConfig? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/service/Service.pkl#L45-L45)

#### `ipFamilies`

```pkl
ipFamilies: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/service/Service.pkl#L46-L46)

#### `ipFamilyPolicy`

```pkl
ipFamilyPolicy: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/service/Service.pkl#L47-L47)

#### `allocateLoadBalancerNodePorts`

```pkl
allocateLoadBalancerNodePorts: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/service/Service.pkl#L48-L48)

#### `trafficDistribution`

```pkl
trafficDistribution: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/service/Service.pkl#L49-L49)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/service/Service.pkl#L50-L50)


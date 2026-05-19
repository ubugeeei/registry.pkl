---
title: target.k8s.ingress.Ingress
description: A typed authoring surface for `networking.k8s.io/v1.Ingress`.
---

# `target.k8s.ingress.Ingress`

A typed authoring surface for `networking.k8s.io/v1.Ingress`.

Reference: https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.31/#ingress-v1-networking-k8s-io

## Fields

#### `apiVersion`

```pkl
apiVersion: String = "networking.k8s.io/v1"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/ingress/Ingress.pkl#L58-L58)

#### `kind`

```pkl
kind: String = "Ingress"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/ingress/Ingress.pkl#L59-L59)

#### `metadata`

```pkl
metadata: Pod.ObjectMeta
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/ingress/Ingress.pkl#L60-L60)

#### `spec`

```pkl
spec: Spec
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/ingress/Ingress.pkl#L61-L61)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/ingress/Ingress.pkl#L62-L62)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/ingress/Ingress.pkl#L170-L170)

#### `renderer`

```pkl
renderer = new YamlRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/ingress/Ingress.pkl#L171-L171)

## Classes

### `ServiceBackendPort`

#### `name`

```pkl
name: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/ingress/Ingress.pkl#L10-L10)

#### `number`

```pkl
number: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/ingress/Ingress.pkl#L11-L11)

### `IngressServiceBackend`

#### `name`

```pkl
name: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/ingress/Ingress.pkl#L15-L15)

#### `port`

```pkl
port: ServiceBackendPort? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/ingress/Ingress.pkl#L16-L16)

### `TypedLocalObjectReference`

#### `apiGroup`

```pkl
apiGroup: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/ingress/Ingress.pkl#L20-L20)

#### `kind`

```pkl
kind: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/ingress/Ingress.pkl#L21-L21)

#### `name`

```pkl
name: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/ingress/Ingress.pkl#L22-L22)

### `IngressBackend`

#### `service`

```pkl
service: IngressServiceBackend? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/ingress/Ingress.pkl#L26-L26)

#### `resource`

```pkl
resource: TypedLocalObjectReference? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/ingress/Ingress.pkl#L27-L27)

### `HTTPIngressPath`

#### `path`

```pkl
path: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/ingress/Ingress.pkl#L31-L31)

#### `pathType`

```pkl
pathType: ("Exact"|"Prefix"|"ImplementationSpecific")
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/ingress/Ingress.pkl#L32-L32)

#### `backend`

```pkl
backend: IngressBackend
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/ingress/Ingress.pkl#L33-L33)

### `HTTPIngressRuleValue`

#### `paths`

```pkl
paths: Listing<HTTPIngressPath>
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/ingress/Ingress.pkl#L37-L37)

### `IngressRule`

#### `host`

```pkl
host: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/ingress/Ingress.pkl#L41-L41)

#### `http`

```pkl
http: HTTPIngressRuleValue? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/ingress/Ingress.pkl#L42-L42)

### `IngressTLS`

#### `hosts`

```pkl
hosts: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/ingress/Ingress.pkl#L46-L46)

#### `secretName`

```pkl
secretName: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/ingress/Ingress.pkl#L47-L47)

### `Spec`

#### `ingressClassName`

```pkl
ingressClassName: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/ingress/Ingress.pkl#L51-L51)

#### `defaultBackend`

```pkl
defaultBackend: IngressBackend? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/ingress/Ingress.pkl#L52-L52)

#### `rules`

```pkl
rules: Listing<IngressRule> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/ingress/Ingress.pkl#L53-L53)

#### `tls`

```pkl
tls: Listing<IngressTLS> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/ingress/Ingress.pkl#L54-L54)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/ingress/Ingress.pkl#L55-L55)


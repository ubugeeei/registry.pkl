---
title: target.k8s.secret.Secret
description: A typed authoring surface for `v1.Secret`.
---

# `target.k8s.secret.Secret`

A typed authoring surface for `v1.Secret`.

Values under `data` must be base64-encoded by the author — Pkl does
not transform them. Use `stringData` for plaintext that Kubernetes
will base64-encode at apply time.

Reference: https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.31/#secret-v1-core

## Type aliases

### `SecretType`

```pkl
typealias SecretType = 
```

## Fields

#### `apiVersion`

```pkl
apiVersion: String = "v1"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/secret/Secret.pkl#L23-L23)

#### `kind`

```pkl
kind: String = "Secret"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/secret/Secret.pkl#L24-L24)

#### `metadata`

```pkl
metadata: Pod.ObjectMeta
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/secret/Secret.pkl#L25-L25)

#### `type`

```pkl
type: SecretType = "Opaque"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/secret/Secret.pkl#L26-L26)

#### `data`

```pkl
data: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/secret/Secret.pkl#L27-L27)

#### `stringData`

```pkl
stringData: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/secret/Secret.pkl#L28-L28)

#### `immutable`

```pkl
immutable: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/secret/Secret.pkl#L29-L29)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/secret/Secret.pkl#L30-L30)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/secret/Secret.pkl#L68-L68)

#### `renderer`

```pkl
renderer = new YamlRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/secret/Secret.pkl#L69-L69)


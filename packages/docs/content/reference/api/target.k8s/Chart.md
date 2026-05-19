---
title: target.k8s.Chart
description: A typed authoring surface for Helm `Chart.yaml`.
---

# `target.k8s.Chart`

A typed authoring surface for Helm `Chart.yaml`.

## Fields

#### `apiVersion`

```pkl
apiVersion: ("v1"|"v2") = "v2"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-chart/Chart.pkl#L24-L24)

#### `name`

```pkl
name: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-chart/Chart.pkl#L25-L25)

#### `version`

```pkl
version: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-chart/Chart.pkl#L26-L26)

#### `description`

```pkl
description: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-chart/Chart.pkl#L27-L27)

#### `type`

```pkl
type: ("application"|"library")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-chart/Chart.pkl#L28-L28)

#### `keywords`

```pkl
keywords: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-chart/Chart.pkl#L29-L29)

#### `home`

```pkl
home: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-chart/Chart.pkl#L30-L30)

#### `sources`

```pkl
sources: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-chart/Chart.pkl#L31-L31)

#### `appVersion`

```pkl
appVersion: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-chart/Chart.pkl#L32-L32)

#### `deprecated`

```pkl
deprecated: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-chart/Chart.pkl#L33-L33)

#### `maintainers`

```pkl
maintainers: Listing<Maintainer> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-chart/Chart.pkl#L34-L34)

#### `icon`

```pkl
icon: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-chart/Chart.pkl#L35-L35)

#### `kubeVersion`

```pkl
kubeVersion: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-chart/Chart.pkl#L36-L36)

#### `annotations`

```pkl
annotations: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-chart/Chart.pkl#L37-L37)

#### `dependencies`

```pkl
dependencies: Listing<Dependency> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-chart/Chart.pkl#L38-L38)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-chart/Chart.pkl#L39-L39)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-chart/Chart.pkl#L114-L114)

#### `renderer`

```pkl
renderer = new YamlRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-chart/Chart.pkl#L115-L115)

## Classes

### `Dependency`

#### `name`

```pkl
name: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-chart/Chart.pkl#L7-L7)

#### `version`

```pkl
version: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-chart/Chart.pkl#L8-L8)

#### `repository`

```pkl
repository: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-chart/Chart.pkl#L9-L9)

#### `condition`

```pkl
condition: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-chart/Chart.pkl#L10-L10)

#### `tags`

```pkl
tags: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-chart/Chart.pkl#L11-L11)

#### `importValues`

```pkl
importValues: Listing<Any> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-chart/Chart.pkl#L12-L12)

#### `alias`

```pkl
alias: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-chart/Chart.pkl#L13-L13)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-chart/Chart.pkl#L14-L14)

### `Maintainer`

#### `name`

```pkl
name: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-chart/Chart.pkl#L18-L18)

#### `email`

```pkl
email: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-chart/Chart.pkl#L19-L19)

#### `url`

```pkl
url: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-chart/Chart.pkl#L20-L20)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-chart/Chart.pkl#L21-L21)


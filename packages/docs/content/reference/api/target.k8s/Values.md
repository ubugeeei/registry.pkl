---
title: target.k8s.Values
description: A typed authoring surface for Helm `values.yaml`.
---

# `target.k8s.Values`

A typed authoring surface for Helm `values.yaml`.

Each chart defines its own values shape. This module provides a
minimum extensible base — `image`, `service`, `ingress`, `resources`,
`autoscaling`, `nodeSelector`, `tolerations`, `affinity` — that most
charts inherit, plus an open `extra` map for chart-specific keys.

## Fields

#### `replicaCount`

```pkl
replicaCount: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L89-L89)

#### `image`

```pkl
image: ImageSpec? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L90-L90)

#### `imagePullSecrets`

```pkl
imagePullSecrets: Listing<Mapping<String, String>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L91-L91)

#### `nameOverride`

```pkl
nameOverride: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L92-L92)

#### `fullnameOverride`

```pkl
fullnameOverride: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L93-L93)

#### `serviceAccount`

```pkl
serviceAccount: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L94-L94)

#### `podAnnotations`

```pkl
podAnnotations: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L95-L95)

#### `podLabels`

```pkl
podLabels: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L96-L96)

#### `podSecurityContext`

```pkl
podSecurityContext: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L97-L97)

#### `securityContext`

```pkl
securityContext: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L98-L98)

#### `service`

```pkl
service: ServiceSpec? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L99-L99)

#### `ingress`

```pkl
ingress: IngressSpec? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L100-L100)

#### `resources`

```pkl
resources: ResourcesBlock? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L101-L101)

#### `livenessProbe`

```pkl
livenessProbe: Probe? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L102-L102)

#### `readinessProbe`

```pkl
readinessProbe: Probe? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L103-L103)

#### `startupProbe`

```pkl
startupProbe: Probe? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L104-L104)

#### `autoscaling`

```pkl
autoscaling: AutoscalingSpec? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L105-L105)

#### `volumes`

```pkl
volumes: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L106-L106)

#### `volumeMounts`

```pkl
volumeMounts: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L107-L107)

#### `nodeSelector`

```pkl
nodeSelector: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L108-L108)

#### `tolerations`

```pkl
tolerations: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L109-L109)

#### `affinity`

```pkl
affinity: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L110-L110)

#### `env`

```pkl
env: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L111-L111)

#### `envFrom`

```pkl
envFrom: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L112-L112)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L113-L113)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L369-L369)

#### `renderer`

```pkl
renderer = new YamlRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L370-L370)

## Classes

### `ImageSpec`

#### `repository`

```pkl
repository: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L12-L12)

#### `tag`

```pkl
tag: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L13-L13)

#### `pullPolicy`

```pkl
pullPolicy: ("Always"|"IfNotPresent"|"Never")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L14-L14)

#### `digest`

```pkl
digest: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L15-L15)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L16-L16)

### `ServicePort`

#### `name`

```pkl
name: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L20-L20)

#### `port`

```pkl
port: Int
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L21-L21)

#### `targetPort`

```pkl
targetPort: (Int|String)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L22-L22)

#### `protocol`

```pkl
protocol: ("TCP"|"UDP"|"SCTP")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L23-L23)

#### `nodePort`

```pkl
nodePort: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L24-L24)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L25-L25)

### `ServiceSpec`

#### `type`

```pkl
type: ("ClusterIP"|"NodePort"|"LoadBalancer"|"ExternalName")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L29-L29)

#### `port`

```pkl
port: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L30-L30)

#### `targetPort`

```pkl
targetPort: (Int|String)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L31-L31)

#### `ports`

```pkl
ports: Listing<ServicePort> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L32-L32)

#### `annotations`

```pkl
annotations: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L33-L33)

#### `externalName`

```pkl
externalName: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L34-L34)

#### `loadBalancerIP`

```pkl
loadBalancerIP: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L35-L35)

#### `loadBalancerSourceRanges`

```pkl
loadBalancerSourceRanges: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L36-L36)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L37-L37)

### `IngressRule`

#### `host`

```pkl
host: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L41-L41)

#### `paths`

```pkl
paths: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L42-L42)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L43-L43)

### `IngressTls`

#### `hosts`

```pkl
hosts: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L47-L47)

#### `secretName`

```pkl
secretName: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L48-L48)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L49-L49)

### `IngressSpec`

#### `enabled`

```pkl
enabled: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L53-L53)

#### `className`

```pkl
className: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L54-L54)

#### `annotations`

```pkl
annotations: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L55-L55)

#### `hosts`

```pkl
hosts: Listing<IngressRule> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L56-L56)

#### `tls`

```pkl
tls: Listing<IngressTls> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L57-L57)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L58-L58)

### `ResourcesBlock`

#### `limits`

```pkl
limits: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L62-L62)

#### `requests`

```pkl
requests: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L63-L63)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L64-L64)

### `AutoscalingSpec`

#### `enabled`

```pkl
enabled: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L68-L68)

#### `minReplicas`

```pkl
minReplicas: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L69-L69)

#### `maxReplicas`

```pkl
maxReplicas: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L70-L70)

#### `targetCPUUtilizationPercentage`

```pkl
targetCPUUtilizationPercentage: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L71-L71)

#### `targetMemoryUtilizationPercentage`

```pkl
targetMemoryUtilizationPercentage: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L72-L72)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L73-L73)

### `Probe`

#### `httpGet`

```pkl
httpGet: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L77-L77)

#### `tcpSocket`

```pkl
tcpSocket: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L78-L78)

#### `exec`

```pkl
exec: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L79-L79)

#### `initialDelaySeconds`

```pkl
initialDelaySeconds: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L80-L80)

#### `periodSeconds`

```pkl
periodSeconds: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L81-L81)

#### `timeoutSeconds`

```pkl
timeoutSeconds: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L82-L82)

#### `successThreshold`

```pkl
successThreshold: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L83-L83)

#### `failureThreshold`

```pkl
failureThreshold: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L84-L84)

#### `terminationGracePeriodSeconds`

```pkl
terminationGracePeriodSeconds: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L85-L85)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/helm-values/Values.pkl#L86-L86)


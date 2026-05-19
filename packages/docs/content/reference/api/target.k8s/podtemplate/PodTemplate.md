---
title: target.k8s.podtemplate.PodTemplate
description: A typed pod-template surface shared by Deployment / StatefulSet /
---

# `target.k8s.podtemplate.PodTemplate`

A typed pod-template surface shared by Deployment / StatefulSet /
DaemonSet / Job / CronJob.

This module models the slice of the Kubernetes `core/v1.PodSpec`
most teams actually customize — containers, init containers,
volumes, security context, scheduling. Anything outside this slice
falls through to `extra` and round-trips verbatim.

Reference: https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.31/#podspec-v1-core

## Fields

#### `apiVersion`

```pkl
apiVersion: String = "v1"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L178-L178)

#### `kind`

```pkl
kind: String = "Pod"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L179-L179)

#### `metadata`

```pkl
metadata: ObjectMeta? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L180-L180)

#### `spec`

```pkl
spec: PodTemplateSpec
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L181-L181)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L182-L182)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L541-L541)

#### `renderer`

```pkl
renderer = new YamlRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L542-L542)

## Classes

### `ResourceRequirement`

#### `cpu`

```pkl
cpu: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L15-L15)

#### `memory`

```pkl
memory: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L16-L16)

#### `ephemeralStorage`

```pkl
ephemeralStorage: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L17-L17)

#### `extra`

Forward-compat for resource names other than cpu/memory/ephemeral-storage
— e.g. `nvidia.com/gpu`.

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L20-L20)

### `Resources`

#### `limits`

```pkl
limits: ResourceRequirement? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L24-L24)

#### `requests`

```pkl
requests: ResourceRequirement? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L25-L25)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L26-L26)

### `HttpGetAction`

#### `path`

```pkl
path: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L30-L30)

#### `port`

```pkl
port: (String|Int)
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L31-L31)

#### `host`

```pkl
host: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L32-L32)

#### `scheme`

```pkl
scheme: ("HTTP"|"HTTPS")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L33-L33)

#### `httpHeaders`

```pkl
httpHeaders: Listing<Mapping<String, String>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L34-L34)

### `TcpSocketAction`

#### `port`

```pkl
port: (String|Int)
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L38-L38)

#### `host`

```pkl
host: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L39-L39)

### `ExecAction`

#### `command`

```pkl
command: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L43-L43)

### `Probe`

#### `httpGet`

```pkl
httpGet: HttpGetAction? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L47-L47)

#### `tcpSocket`

```pkl
tcpSocket: TcpSocketAction? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L48-L48)

#### `exec`

```pkl
exec: ExecAction? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L49-L49)

#### `initialDelaySeconds`

```pkl
initialDelaySeconds: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L50-L50)

#### `timeoutSeconds`

```pkl
timeoutSeconds: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L51-L51)

#### `periodSeconds`

```pkl
periodSeconds: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L52-L52)

#### `successThreshold`

```pkl
successThreshold: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L53-L53)

#### `failureThreshold`

```pkl
failureThreshold: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L54-L54)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L55-L55)

### `EnvVar`

#### `name`

```pkl
name: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L59-L59)

#### `value`

```pkl
value: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L60-L60)

#### `valueFrom`

```pkl
valueFrom: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L61-L61)

### `EnvFromSource`

#### `configMapRef`

```pkl
configMapRef: Mapping<String, String>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L65-L65)

#### `secretRef`

```pkl
secretRef: Mapping<String, String>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L66-L66)

#### `prefix`

```pkl
prefix: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L67-L67)

### `VolumeMount`

#### `name`

```pkl
name: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L71-L71)

#### `mountPath`

```pkl
mountPath: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L72-L72)

#### `subPath`

```pkl
subPath: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L73-L73)

#### `readOnly`

```pkl
readOnly: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L74-L74)

#### `mountPropagation`

```pkl
mountPropagation: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L75-L75)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L76-L76)

### `ContainerPort`

#### `name`

```pkl
name: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L80-L80)

#### `containerPort`

```pkl
containerPort: Int
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L81-L81)

#### `protocol`

```pkl
protocol: ("TCP"|"UDP"|"SCTP")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L82-L82)

#### `hostPort`

```pkl
hostPort: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L83-L83)

#### `hostIP`

```pkl
hostIP: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L84-L84)

### `SecurityContext`

#### `runAsUser`

```pkl
runAsUser: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L88-L88)

#### `runAsGroup`

```pkl
runAsGroup: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L89-L89)

#### `runAsNonRoot`

```pkl
runAsNonRoot: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L90-L90)

#### `readOnlyRootFilesystem`

```pkl
readOnlyRootFilesystem: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L91-L91)

#### `allowPrivilegeEscalation`

```pkl
allowPrivilegeEscalation: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L92-L92)

#### `privileged`

```pkl
privileged: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L93-L93)

#### `capabilities`

```pkl
capabilities: Mapping<String, Listing<String>>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L94-L94)

#### `seccompProfile`

```pkl
seccompProfile: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L95-L95)

#### `seLinuxOptions`

```pkl
seLinuxOptions: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L96-L96)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L97-L97)

### `Container`

#### `name`

```pkl
name: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L101-L101)

#### `image`

```pkl
image: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L102-L102)

#### `imagePullPolicy`

```pkl
imagePullPolicy: ("Always"|"IfNotPresent"|"Never")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L103-L103)

#### `command`

```pkl
command: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L104-L104)

#### `args`

```pkl
args: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L105-L105)

#### `env`

```pkl
env: Listing<EnvVar> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L106-L106)

#### `envFrom`

```pkl
envFrom: Listing<EnvFromSource> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L107-L107)

#### `ports`

```pkl
ports: Listing<ContainerPort> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L108-L108)

#### `resources`

```pkl
resources: Resources? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L109-L109)

#### `volumeMounts`

```pkl
volumeMounts: Listing<VolumeMount> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L110-L110)

#### `livenessProbe`

```pkl
livenessProbe: Probe? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L111-L111)

#### `readinessProbe`

```pkl
readinessProbe: Probe? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L112-L112)

#### `startupProbe`

```pkl
startupProbe: Probe? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L113-L113)

#### `securityContext`

```pkl
securityContext: SecurityContext? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L114-L114)

#### `workingDir`

```pkl
workingDir: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L115-L115)

#### `stdin`

```pkl
stdin: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L116-L116)

#### `stdinOnce`

```pkl
stdinOnce: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L117-L117)

#### `tty`

```pkl
tty: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L118-L118)

#### `terminationMessagePath`

```pkl
terminationMessagePath: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L119-L119)

#### `terminationMessagePolicy`

```pkl
terminationMessagePolicy: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L120-L120)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L121-L121)

### `Volume`

#### `name`

```pkl
name: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L125-L125)

#### `configMap`

```pkl
configMap: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L126-L126)

#### `secret`

```pkl
secret: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L127-L127)

#### `emptyDir`

```pkl
emptyDir: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L128-L128)

#### `persistentVolumeClaim`

```pkl
persistentVolumeClaim: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L129-L129)

#### `hostPath`

```pkl
hostPath: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L130-L130)

#### `projected`

```pkl
projected: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L131-L131)

#### `csi`

```pkl
csi: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L132-L132)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L133-L133)

### `ObjectMeta`

#### `name`

```pkl
name: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L137-L137)

#### `namespace`

```pkl
namespace: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L138-L138)

#### `labels`

```pkl
labels: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L139-L139)

#### `annotations`

```pkl
annotations: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L140-L140)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L141-L141)

### `PodTemplateSpec`

#### `metadata`

```pkl
metadata: ObjectMeta? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L145-L145)

#### `containers`

```pkl
containers: Listing<Container>
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L146-L146)

#### `initContainers`

```pkl
initContainers: Listing<Container> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L147-L147)

#### `ephemeralContainers`

```pkl
ephemeralContainers: Listing<Container> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L148-L148)

#### `volumes`

```pkl
volumes: Listing<Volume> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L149-L149)

#### `restartPolicy`

```pkl
restartPolicy: ("Always"|"OnFailure"|"Never")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L150-L150)

#### `terminationGracePeriodSeconds`

```pkl
terminationGracePeriodSeconds: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L151-L151)

#### `activeDeadlineSeconds`

```pkl
activeDeadlineSeconds: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L152-L152)

#### `dnsPolicy`

```pkl
dnsPolicy: ("ClusterFirst"|"Default"|"ClusterFirstWithHostNet"|"None")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L153-L153)

#### `serviceAccountName`

```pkl
serviceAccountName: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L154-L154)

#### `automountServiceAccountToken`

```pkl
automountServiceAccountToken: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L155-L155)

#### `nodeName`

```pkl
nodeName: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L156-L156)

#### `hostNetwork`

```pkl
hostNetwork: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L157-L157)

#### `hostPID`

```pkl
hostPID: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L158-L158)

#### `hostIPC`

```pkl
hostIPC: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L159-L159)

#### `shareProcessNamespace`

```pkl
shareProcessNamespace: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L160-L160)

#### `securityContext`

```pkl
securityContext: SecurityContext? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L161-L161)

#### `imagePullSecrets`

```pkl
imagePullSecrets: Listing<Mapping<String, String>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L162-L162)

#### `affinity`

```pkl
affinity: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L163-L163)

#### `tolerations`

```pkl
tolerations: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L164-L164)

#### `topologySpreadConstraints`

```pkl
topologySpreadConstraints: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L165-L165)

#### `schedulerName`

```pkl
schedulerName: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L166-L166)

#### `priorityClassName`

```pkl
priorityClassName: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L167-L167)

#### `priority`

```pkl
priority: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L168-L168)

#### `nodeSelector`

```pkl
nodeSelector: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L169-L169)

#### `dnsConfig`

```pkl
dnsConfig: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L170-L170)

#### `readinessGates`

```pkl
readinessGates: Listing<Mapping<String, Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L171-L171)

#### `enableServiceLinks`

```pkl
enableServiceLinks: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L172-L172)

#### `runtimeClassName`

```pkl
runtimeClassName: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L173-L173)

#### `overhead`

```pkl
overhead: Mapping<String, String> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L174-L174)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/podtemplate/PodTemplate.pkl#L175-L175)


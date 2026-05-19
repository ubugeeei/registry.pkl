---
title: target.k8s.job.Job
description: A typed authoring surface for `batch/v1.Job`.
---

# `target.k8s.job.Job`

A typed authoring surface for `batch/v1.Job`.

Reference: https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.31/#job-v1-batch

## Fields

#### `apiVersion`

```pkl
apiVersion: String = "batch/v1"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/job/Job.pkl#L30-L30)

#### `kind`

```pkl
kind: String = "Job"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/job/Job.pkl#L31-L31)

#### `metadata`

```pkl
metadata: Pod.ObjectMeta
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/job/Job.pkl#L32-L32)

#### `spec`

```pkl
spec: Spec
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/job/Job.pkl#L33-L33)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/job/Job.pkl#L34-L34)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/job/Job.pkl#L135-L135)

#### `renderer`

```pkl
renderer = new YamlRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/job/Job.pkl#L136-L136)

## Classes

### `Spec`

#### `template`

```pkl
template: Dep.Template
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/job/Job.pkl#L11-L11)

#### `parallelism`

```pkl
parallelism: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/job/Job.pkl#L12-L12)

#### `completions`

```pkl
completions: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/job/Job.pkl#L13-L13)

#### `backoffLimit`

```pkl
backoffLimit: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/job/Job.pkl#L14-L14)

#### `backoffLimitPerIndex`

```pkl
backoffLimitPerIndex: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/job/Job.pkl#L15-L15)

#### `activeDeadlineSeconds`

```pkl
activeDeadlineSeconds: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/job/Job.pkl#L16-L16)

#### `ttlSecondsAfterFinished`

```pkl
ttlSecondsAfterFinished: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/job/Job.pkl#L17-L17)

#### `selector`

```pkl
selector: Dep.LabelSelector? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/job/Job.pkl#L18-L18)

#### `manualSelector`

```pkl
manualSelector: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/job/Job.pkl#L19-L19)

#### `completionMode`

```pkl
completionMode: ("NonIndexed"|"Indexed")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/job/Job.pkl#L20-L20)

#### `suspend`

```pkl
suspend: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/job/Job.pkl#L21-L21)

#### `podFailurePolicy`

```pkl
podFailurePolicy: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/job/Job.pkl#L22-L22)

#### `successPolicy`

```pkl
successPolicy: Mapping<String, Any>? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/job/Job.pkl#L23-L23)

#### `maxFailedIndexes`

```pkl
maxFailedIndexes: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/job/Job.pkl#L24-L24)

#### `podReplacementPolicy`

```pkl
podReplacementPolicy: ("TerminatingOrFailed"|"Failed")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/job/Job.pkl#L25-L25)

#### `managedBy`

```pkl
managedBy: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/job/Job.pkl#L26-L26)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/job/Job.pkl#L27-L27)


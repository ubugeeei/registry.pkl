---
title: target.k8s.cronjob.CronJob
description: A typed authoring surface for `batch/v1.CronJob`.
---

# `target.k8s.cronjob.CronJob`

A typed authoring surface for `batch/v1.CronJob`.

Reference: https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.31/#cronjob-v1-batch

## Fields

#### `apiVersion`

```pkl
apiVersion: String = "batch/v1"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/cronjob/CronJob.pkl#L27-L27)

#### `kind`

```pkl
kind: String = "CronJob"
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/cronjob/CronJob.pkl#L28-L28)

#### `metadata`

```pkl
metadata: Pod.ObjectMeta
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/cronjob/CronJob.pkl#L29-L29)

#### `spec`

```pkl
spec: Spec
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/cronjob/CronJob.pkl#L30-L30)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/cronjob/CronJob.pkl#L31-L31)

#### `metadata`

```pkl
metadata = new Pod.ObjectMeta {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/cronjob/CronJob.pkl#L54-L54)

#### `spec`

```pkl
spec = value.spec
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/cronjob/CronJob.pkl#L55-L55)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/cronjob/CronJob.pkl#L96-L96)

#### `renderer`

```pkl
renderer = new YamlRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/cronjob/CronJob.pkl#L97-L97)

## Classes

### `JobTemplate`

#### `metadata`

```pkl
metadata: Pod.ObjectMeta? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/cronjob/CronJob.pkl#L11-L11)

#### `spec`

```pkl
spec: Job.Spec
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/cronjob/CronJob.pkl#L12-L12)

### `Spec`

#### `schedule`

```pkl
schedule: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/cronjob/CronJob.pkl#L16-L16)

#### `timeZone`

```pkl
timeZone: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/cronjob/CronJob.pkl#L17-L17)

#### `startingDeadlineSeconds`

```pkl
startingDeadlineSeconds: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/cronjob/CronJob.pkl#L18-L18)

#### `concurrencyPolicy`

```pkl
concurrencyPolicy: ("Allow"|"Forbid"|"Replace")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/cronjob/CronJob.pkl#L19-L19)

#### `suspend`

```pkl
suspend: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/cronjob/CronJob.pkl#L20-L20)

#### `jobTemplate`

```pkl
jobTemplate: JobTemplate
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/cronjob/CronJob.pkl#L21-L21)

#### `successfulJobsHistoryLimit`

```pkl
successfulJobsHistoryLimit: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/cronjob/CronJob.pkl#L22-L22)

#### `failedJobsHistoryLimit`

```pkl
failedJobsHistoryLimit: Int? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/cronjob/CronJob.pkl#L23-L23)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.k8s/cronjob/CronJob.pkl#L24-L24)


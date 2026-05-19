---
title: target.container.Dockerfile
description: A typed authoring surface for `Dockerfile` (and `Containerfile`).
---

# `target.container.Dockerfile`

A typed authoring surface for `Dockerfile` (and `Containerfile`).

Dockerfiles are line-oriented text, not structured data. This module
gives every directive a typed shape and joins them into the final
text in the order they appear. Multi-stage builds compose by adding
more `Stage` entries.

## Fields

#### `syntax`

Pinned to `# syntax=` directive emitted at the top of the file.

```pkl
syntax: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/dockerfile/Dockerfile.pkl#L44-L44)

#### `escape`

Optional `# escape=` directive.

```pkl
escape: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/dockerfile/Dockerfile.pkl#L47-L47)

#### `stages`

Stage chain. Multi-stage builds list more than one entry.

```pkl
stages: Listing<Stage> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/dockerfile/Dockerfile.pkl#L50-L50)

#### `extra`

```pkl
extra: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/dockerfile/Dockerfile.pkl#L52-L52)

#### `text`

```pkl
text = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/dockerfile/Dockerfile.pkl#L81-L81)

## Classes

### `Instruction`

#### `directive`

One of FROM ARG ENV LABEL RUN CMD ENTRYPOINT COPY ADD WORKDIR USER
EXPOSE VOLUME HEALTHCHECK SHELL STOPSIGNAL ONBUILD ARG.

```pkl
directive: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/dockerfile/Dockerfile.pkl#L14-L14)

#### `arg`

The raw argument string written after the directive. For COPY etc.,
callers can build this with the convenience helpers below.

```pkl
arg: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/dockerfile/Dockerfile.pkl#L18-L18)

#### `comment`

Inline comment placed on the line above the instruction.

```pkl
comment: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/dockerfile/Dockerfile.pkl#L21-L21)

### `Stage`

#### `from`

`FROM <image>` value. Required.

```pkl
from: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/dockerfile/Dockerfile.pkl#L26-L26)

#### `asName`

Optional `AS <name>` alias for multi-stage builds.

```pkl
asName: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/dockerfile/Dockerfile.pkl#L29-L29)

#### `platform`

`--platform=` flag passed to FROM.

```pkl
platform: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/dockerfile/Dockerfile.pkl#L32-L32)

#### `instructions`

Instructions to emit after FROM. Use the `instr()` helpers in the
example file to construct entries from typed inputs, or write the
raw `Instruction` directly.

```pkl
instructions: Listing<Instruction> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/dockerfile/Dockerfile.pkl#L37-L37)

#### `comment`

Inline comment placed above the FROM line.

```pkl
comment: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.container/dockerfile/Dockerfile.pkl#L40-L40)


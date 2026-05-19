---
layout: entry
title: target.container
description: Typed authoring for Docker Compose, Dockerfile, and Devbox.
hero:
  name: target.container
  text: Container ecosystem
  tagline: Compose stacks, Dockerfiles, and Devbox manifests authored in Pkl.
  actions:
    - theme: brand
      text: Browse Packages
      link: ../index.html
    - theme: alt
      text: Tool matrix
      link: ../../reference/tool-matrix/index.html
    - theme: alt
      text: By Target
      link: ../../reference/by-target/index.html
features:
  - icon: "mdi:docker"
    title: docker-compose/DockerCompose.pkl
    details: Typed `docker-compose.yml` — services, networks, volumes, secrets, configs, and per-service healthchecks.
  - icon: "mdi:file-code-outline"
    title: dockerfile/Dockerfile.pkl
    details: Structured Dockerfile authoring — FROM stages, RUN, COPY, ENV, ARG, WORKDIR, ENTRYPOINT, CMD, USER, ports.
  - icon: "mdi:cube-outline"
    title: devbox/Devbox.pkl
    details: Typed `devbox.json` with packages, scripts, env, init_hook, and shell configuration.
---

## Install

```pkl
amends "package://pkg.example.invalid/target.container@0.1.0#/docker-compose/DockerCompose.pkl"
```

## What This Package Emits

- `docker-compose.yml`
- `Dockerfile`
- `devbox.json`

## Why This Package Exists

Container tooling spans a few different on-disk formats but shares the same
conceptual surface (services, dependencies, runtime environment). Grouping
them keeps the family small and discoverable without overloading
`target.env`.

## Related Docs

- [Package catalog](../index.html)
- [Tool matrix](../../reference/tool-matrix/index.html)
- [By Target](../../reference/by-target/index.html)

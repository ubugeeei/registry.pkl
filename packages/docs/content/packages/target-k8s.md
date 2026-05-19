---
layout: entry
title: target.k8s
description: Typed authoring for Kubernetes manifests — Kustomize and Helm.
hero:
  name: target.k8s
  text: Kubernetes manifests
  tagline: Kustomization, Helm Chart.yaml, and the Helm values surface.
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
  - icon: "mdi:kubernetes"
    title: kustomization/Kustomization.pkl
    details: Full kustomize `v1beta1` surface — Patch, ConfigMapGen, SecretGen, Image, Replicas, HelmChart, patches strategic merge / json6902.
  - icon: "mdi:ship-wheel"
    title: helm-chart/Chart.pkl
    details: Typed `Chart.yaml` v2 with Dependency, Maintainer, apiVersion enum, type, appVersion, kubeVersion, icon, annotations.
  - icon: "mdi:tune-vertical"
    title: helm-values/Values.pkl
    details: Common Helm values surface — ImageSpec, ServiceSpec, IngressSpec, ResourcesBlock, AutoscalingSpec, Probe.
---

## Install

```pkl
amends "package://pkg.example.invalid/target.k8s@0.1.0#/kustomization/Kustomization.pkl"
```

## What This Package Emits

- `kustomization.yaml`
- `Chart.yaml`
- `values.yaml`

## Why This Package Exists

Raw `kubectl` manifest authoring stays out of scope — those benefit more from
upstream tooling. Kustomize and Helm are the configuration-as-data shapes Pkl
is actually good at: heavy reuse, computed overlays, typed environments.

## Related Docs

- [Package catalog](../index.html)
- [Tool matrix](../../reference/tool-matrix/index.html)
- [By Target](../../reference/by-target/index.html)

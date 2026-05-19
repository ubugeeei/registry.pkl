---
layout: entry
title: target.deploy
description: Typed authoring for vercel, netlify, fly, and render deployment configs.
hero:
  name: target.deploy
  text: Deployment platforms
  tagline: Vercel, Netlify, Fly.io, Render — one typed module per platform.
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
  - icon: "mdi:triangle"
    title: vercel/Vercel.pkl
    details: Typed `vercel.json` — builds, routes, redirects, rewrites, headers, env, crons.
  - icon: "mdi:cloud-outline"
    title: netlify/Netlify.pkl
    details: Typed `netlify.toml` — build, context overrides, redirects, headers, functions, edge functions.
  - icon: "mdi:rocket"
    title: fly/Fly.pkl
    details: Typed `fly.toml` — app metadata, build, processes, services with ports + healthchecks, mounts, env.
  - icon: "mdi:server"
    title: render/Render.pkl
    details: Typed `render.yaml` — services and databases with full IaC surface (envVars, autoDeploy, healthCheckPath).
---

## Install

```pkl
amends "package://pkg.example.invalid/target.deploy@0.1.0#/vercel/Vercel.pkl"
```

## What This Package Emits

- `vercel.json`
- `netlify.toml`
- `fly.toml`
- `render.yaml`

## Why This Package Exists

Most teams pick one deploy target per service but configure all four across an
organization. A shared family keeps the cross-platform mental model close and
gives reviewers one place to look when comparing deployment surfaces.

## Related Docs

- [Package catalog](../index.html)
- [Tool matrix](../../reference/tool-matrix/index.html)
- [By Target](../../reference/by-target/index.html)

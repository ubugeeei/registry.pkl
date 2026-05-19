---
layout: entry
title: Reference
description: Compact tables and schema examples for the current docs set.
hero:
  name: Reference
  text: Tables and schema shapes
  tagline: "Use this section when you need a compact answer instead of a full narrative: target coverage, package placement, and the proposed record schema."
  actions:
    - theme: brand
      text: Tool Matrix
      link: ./tool-matrix/index.html
    - theme: alt
      text: Registry Record
      link: ./registry-record/index.html
    - theme: alt
      text: Packages
      link: ../packages/index.html
features:
  - icon: "mdi:table-large"
    title: Tool Matrix
    details: Priority, package ownership, and output format for each planned target.
    link: ./tool-matrix/index.html
  - icon: "mdi:file-document-outline"
    title: Registry Record
    details: Proposed searchable metadata shape for Pull Request-based package registration.
    link: ./registry-record/index.html
  - icon: "mdi:link-variant"
    title: By Target
    details: Auto-generated reverse index — every shipped config file mapped back to the registry record that emits it.
    link: ./by-target/index.html
  - icon: "mdi:api"
    title: API Reference
    details: Auto-generated module-by-module reference for every typed Pkl module under packages/target.*.
    link: ./api/index.html
---

## When To Use Reference

- Open [Tool Matrix](./tool-matrix/index.html) when you want to know which package should own a file.
- Open [By Target](./by-target/index.html) when you have a concrete file in mind and want the matching registry record.
- Open [Registry Record](./registry-record/index.html) when you want the current metadata shape for indexing and review.
- Open [API Reference](./api/index.html) when you need the exact field names and types of a Pkl module.
- Use [Packages](../packages/index.html) or [Guides](../guide/index.html) if you need narrative context instead of lookup tables.

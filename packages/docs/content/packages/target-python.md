---
layout: entry
title: target.python
description: Typed authoring for pyproject.toml, ruff, and pytest.
hero:
  name: target.python
  text: Python project metadata, linting, and testing
  tagline: pyproject.toml (PEP 621), ruff.toml, and pytest configuration with the shared pkl.toml renderer.
  actions:
    - theme: brand
      text: Browse Packages
      link: ../index.html
    - theme: alt
      text: Quickstart
      link: ../../start/quickstart/index.html
features:
  - icon: "mdi:package-variant-closed"
    title: pyproject/PyProject.pkl
    details: PEP 621 project metadata, build-system, dependencies, optional-dependencies, scripts, urls, and the `[tool.*]` table.
  - icon: "mdi:flash"
    title: ruff/Ruff.pkl
    details: Stable ruff options with kebab-cased keys, line-length, target-version, lint and format subsections, and per-file-ignores.
  - icon: "mdi:test-tube"
    title: pytest/Pytest.pkl
    details: Configuration for the `[tool.pytest.ini_options]` table including markers, filterwarnings, addopts, and xfail_strict.
---

## Install

```pkl
amends "package://pkg.example.invalid/target.python@0.1.0#/pyproject/PyProject.pkl"
```

## What This Package Emits

- `pyproject.toml`
- `ruff.toml`
- `pytest.ini` / `[tool.pytest.ini_options]` fragment

## Related Docs

- [Package catalog](../index.html)
- [Tool matrix](../../reference/tool-matrix/index.html)

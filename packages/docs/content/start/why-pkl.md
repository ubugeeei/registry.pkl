---
title: Why Pkl
description: Why this project uses Pkl as an authoring layer instead of adding another config DSL or executable JS config.
---

# Why Pkl

## The Problem With Raw Config Files

Raw config formats are easy for tools to parse and annoying for humans to
maintain.

The pain shows up as:

- duplicated defaults across repositories
- unreadable nesting
- no reusable inheritance story
- weak or missing type feedback
- editor support that stops at schema validation

YAML anchors, JSON Schema, and ad hoc JavaScript config files are all attempts
to patch the authoring experience after the fact.

## Why Pkl Fits Better

Pkl starts from authoring instead of wire format.

It gives you:

- types
- module composition
- `amends`
- doc comments
- API docs with Pkldoc
- package distribution

That makes it a strong base for "config as a library" rather than "config as a
blob".

## Why Not Just Use JS or TS Config Everywhere

Executable config is flexible, but it is also easy to abuse.

The cost is familiar:

- hidden side effects
- weak portability between tools
- hard-to-document configuration surfaces
- review diffs that mix behavior and data

The goal here is different. We want composable declarative config, not an
arbitrary runtime.

## Boundary Discipline

This project should stay disciplined about where Pkl stops.

- Author in Pkl.
- Emit plain config that existing tools already understand.
- Do not ask each tool to "support Pkl".

That boundary is what keeps the ecosystem practical.


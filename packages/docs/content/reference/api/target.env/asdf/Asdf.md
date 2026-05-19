---
title: target.env.asdf.Asdf
description: A typed authoring surface for `.tool-versions`.
---

# `target.env.asdf.Asdf`

A typed authoring surface for `.tool-versions`.

asdf's tool-versions file is a line-oriented format: one entry per
language plugin, each value either a single version or a space-
separated fallback list. This module models that shape and renders
as the text format asdf actually reads.

## Fields

#### `tools`

Plugin → version(s). The first version is the primary; later versions
are fallbacks (asdf reads them in order when resolving).

```pkl
tools: Mapping<String, String|Listing<String>> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/asdf/Asdf.pkl#L11-L11)

#### `comments`

Trailing comment lines appended to the file. Each entry becomes one
`# <text>` line. Useful for documenting why a pin exists.

```pkl
comments: Listing<String> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/asdf/Asdf.pkl#L15-L15)

#### `text`

```pkl
text = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.env/asdf/Asdf.pkl#L30-L30)


---
title: target.docs.Vitepress
description: A typed authoring surface for `.vitepress/config.json` (JSON projection).
---

# `target.docs.Vitepress`

A typed authoring surface for `.vitepress/config.json` (JSON projection).

VitePress canonically configures through `defineConfig({...})` in a
TypeScript module. This module models the JSON-projectable subset
— `themeConfig`, `nav`, `sidebar`, `locales`, head tags, transformers
— so static portions of the config can be authored in Pkl and merged
into the TS config via `JSON.parse(fs.readFileSync(...))`.

## Fields

#### `title`

```pkl
title: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L69-L69)

#### `description`

```pkl
description: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L70-L70)

#### `base`

```pkl
base: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L71-L71)

#### `lang`

```pkl
lang: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L72-L72)

#### `cleanUrls`

```pkl
cleanUrls: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L73-L73)

#### `lastUpdated`

```pkl
lastUpdated: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L74-L74)

#### `appearance`

```pkl
appearance: (Boolean|"dark"|"force-dark")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L75-L75)

#### `ignoreDeadLinks`

```pkl
ignoreDeadLinks: (Boolean|String|Listing<Any>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L76-L76)

#### `metaChunk`

```pkl
metaChunk: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L77-L77)

#### `mpa`

```pkl
mpa: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L78-L78)

#### `srcDir`

```pkl
srcDir: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L79-L79)

#### `outDir`

```pkl
outDir: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L80-L80)

#### `cacheDir`

```pkl
cacheDir: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L81-L81)

#### `themeConfig`

```pkl
themeConfig: ThemeConfig? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L82-L82)

#### `head`

```pkl
head: Listing<Listing<Any>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L83-L83)

#### `locales`

```pkl
locales: Mapping<String, LocaleConfig> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L84-L84)

#### `markdown`

```pkl
markdown: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L85-L85)

#### `sitemap`

```pkl
sitemap: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L86-L86)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L87-L87)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L249-L249)

#### `renderer`

```pkl
renderer = new JsonRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L250-L250)

## Classes

### `NavItem`

#### `text`

```pkl
text: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L13-L13)

#### `link`

```pkl
link: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L14-L14)

#### `activeMatch`

```pkl
activeMatch: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L15-L15)

#### `target`

```pkl
target: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L16-L16)

#### `rel`

```pkl
rel: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L17-L17)

#### `noIcon`

```pkl
noIcon: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L18-L18)

#### `items`

```pkl
items: Listing<NavItem> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L19-L19)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L20-L20)

### `SidebarItem`

#### `text`

```pkl
text: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L24-L24)

#### `link`

```pkl
link: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L25-L25)

#### `collapsed`

```pkl
collapsed: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L26-L26)

#### `items`

```pkl
items: Listing<SidebarItem> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L27-L27)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L28-L28)

### `SocialLink`

#### `icon`

```pkl
icon: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L32-L32)

#### `link`

```pkl
link: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L33-L33)

#### `ariaLabel`

```pkl
ariaLabel: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L34-L34)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L35-L35)

### `FooterConfig`

#### `message`

```pkl
message: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L39-L39)

#### `copyright`

```pkl
copyright: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L40-L40)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L41-L41)

### `ThemeConfig`

#### `logo`

```pkl
logo: (String|Mapping<String, Any>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L45-L45)

#### `siteTitle`

```pkl
siteTitle: (String|Boolean)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L46-L46)

#### `nav`

```pkl
nav: Listing<NavItem> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L47-L47)

#### `sidebar`

```pkl
sidebar: (Listing<SidebarItem>|Mapping<String, Listing<SidebarItem>>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L48-L48)

#### `socialLinks`

```pkl
socialLinks: Listing<SocialLink> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L49-L49)

#### `footer`

```pkl
footer: FooterConfig? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L50-L50)

#### `editLink`

```pkl
editLink: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L51-L51)

#### `lastUpdated`

```pkl
lastUpdated: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L52-L52)

#### `docFooter`

```pkl
docFooter: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L53-L53)

#### `outline`

```pkl
outline: (Int|Mapping<String, Any>)? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L54-L54)

#### `search`

```pkl
search: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L55-L55)

#### `carbonAds`

```pkl
carbonAds: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L56-L56)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L57-L57)

### `LocaleConfig`

#### `label`

```pkl
label: String
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L61-L61)

#### `lang`

```pkl
lang: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L62-L62)

#### `link`

```pkl
link: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L63-L63)

#### `themeConfig`

```pkl
themeConfig: ThemeConfig? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L64-L64)

#### `description`

```pkl
description: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L65-L65)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/vitepress/Vitepress.pkl#L66-L66)


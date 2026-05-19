---
title: target.docs.Docusaurus
description: A typed authoring surface for `docusaurus.config.json` (JSON projection).
---

# `target.docs.Docusaurus`

A typed authoring surface for `docusaurus.config.json` (JSON projection).

## Fields

#### `title`

```pkl
title: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L63-L63)

#### `tagline`

```pkl
tagline: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L64-L64)

#### `url`

```pkl
url: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L65-L65)

#### `baseUrl`

```pkl
baseUrl: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L66-L66)

#### `favicon`

```pkl
favicon: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L67-L67)

#### `organizationName`

```pkl
organizationName: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L68-L68)

#### `projectName`

```pkl
projectName: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L69-L69)

#### `deploymentBranch`

```pkl
deploymentBranch: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L70-L70)

#### `trailingSlash`

```pkl
trailingSlash: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L71-L71)

#### `onBrokenLinks`

```pkl
onBrokenLinks: ("ignore"|"log"|"warn"|"throw")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L72-L72)

#### `onBrokenMarkdownLinks`

```pkl
onBrokenMarkdownLinks: ("ignore"|"log"|"warn"|"throw")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L73-L73)

#### `onDuplicateRoutes`

```pkl
onDuplicateRoutes: ("ignore"|"log"|"warn"|"throw")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L74-L74)

#### `i18n`

```pkl
i18n: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L75-L75)

#### `themes`

```pkl
themes: Listing<Any> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L76-L76)

#### `plugins`

```pkl
plugins: Listing<Any> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L77-L77)

#### `presets`

```pkl
presets: Listing<Any> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L78-L78)

#### `themeConfig`

```pkl
themeConfig: ThemeConfig? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L79-L79)

#### `customFields`

```pkl
customFields: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L80-L80)

#### `markdown`

```pkl
markdown: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L81-L81)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L82-L82)

#### `value`

```pkl
value = rendered
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L250-L250)

#### `renderer`

```pkl
renderer = new JsonRenderer {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L251-L251)

## Classes

### `NavbarItem`

#### `type`

```pkl
type: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L7-L7)

#### `label`

```pkl
label: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L8-L8)

#### `to`

```pkl
to: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L9-L9)

#### `href`

```pkl
href: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L10-L10)

#### `position`

```pkl
position: ("left"|"right")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L11-L11)

#### `className`

```pkl
className: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L12-L12)

#### `activeBasePath`

```pkl
activeBasePath: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L13-L13)

#### `docId`

```pkl
docId: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L14-L14)

#### `sidebarId`

```pkl
sidebarId: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L15-L15)

#### `items`

```pkl
items: Listing<NavbarItem> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L16-L16)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L17-L17)

### `FooterLink`

#### `label`

```pkl
label: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L21-L21)

#### `to`

```pkl
to: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L22-L22)

#### `href`

```pkl
href: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L23-L23)

#### `html`

```pkl
html: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L24-L24)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L25-L25)

### `FooterLinkGroup`

#### `title`

```pkl
title: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L29-L29)

#### `items`

```pkl
items: Listing<FooterLink> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L30-L30)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L31-L31)

### `Footer`

#### `style`

```pkl
style: ("light"|"dark")? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L35-L35)

#### `logo`

```pkl
logo: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L36-L36)

#### `copyright`

```pkl
copyright: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L37-L37)

#### `links`

```pkl
links: Listing<FooterLinkGroup> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L38-L38)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L39-L39)

### `Navbar`

#### `title`

```pkl
title: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L43-L43)

#### `logo`

```pkl
logo: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L44-L44)

#### `hideOnScroll`

```pkl
hideOnScroll: Boolean? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L45-L45)

#### `items`

```pkl
items: Listing<NavbarItem> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L46-L46)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L47-L47)

### `ThemeConfig`

#### `navbar`

```pkl
navbar: Navbar? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L51-L51)

#### `footer`

```pkl
footer: Footer? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L52-L52)

#### `prism`

```pkl
prism: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L53-L53)

#### `colorMode`

```pkl
colorMode: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L54-L54)

#### `algolia`

```pkl
algolia: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L55-L55)

#### `announcementBar`

```pkl
announcementBar: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L56-L56)

#### `metadata`

```pkl
metadata: Listing<Mapping<String, String>> = new Listing {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L57-L57)

#### `image`

```pkl
image: String? = null
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L58-L58)

#### `tableOfContents`

```pkl
tableOfContents: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L59-L59)

#### `extra`

```pkl
extra: Mapping<String, Any> = new Mapping {}
```

[source](https://github.com/ubugeeei/registry.pkl/blob/main/packages/target.docs/docusaurus/Docusaurus.pkl#L60-L60)


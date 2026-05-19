import { defineConfig } from "vite";
import { defineTheme, defaultTheme, oxContent } from "@ox-content/vite-plugin";
import pkl from "@shikijs/langs/pkl";

const normalizeBase = (value: string) => {
  if (value === "/") return "/";
  return `/${value.replace(/^\/+/, "").replace(/\/+$/, "")}/`;
};

const docsBase = normalizeBase(
  process.env.DOCS_BASE ?? (process.env.GITHUB_ACTIONS === "true" ? "/registry.pkl/" : "/"),
);
const docsSiteUrl = process.env.DOCS_SITE_URL ?? "https://ubugeeei.github.io/registry.pkl/";

export default defineConfig({
  base: docsBase,
  plugins: [
    oxContent({
      srcDir: "content",
      outDir: "../../dist/docs",
      base: docsBase,
      highlight: true,
      highlightTheme: "github-dark",
      highlightLangs: pkl,
      mermaid: true,
      toc: true,
      tocMaxDepth: 3,
      ssg: {
        siteName: "registry.pkl",
        siteUrl: docsSiteUrl,
        theme: defineTheme({
          extends: defaultTheme,
          colors: {
            primary: "#0e8a78",
            primaryHover: "#0b6f60",
            background: "#f5f7f6",
            backgroundAlt: "#eceeed",
            text: "#0a1014",
            textMuted: "#566069",
            border: "#d4dbd8",
            codeBackground: "#04070a",
            codeText: "#e8eef0",
          },
          darkColors: {
            primary: "#7dd3c0",
            primaryHover: "#9fe0d2",
            background: "#070a0c",
            backgroundAlt: "#0c1216",
            text: "#e8eef0",
            textMuted: "#94a0a8",
            border: "#202931",
            codeBackground: "#04070a",
            codeText: "#e8eef0",
          },
          fonts: {
            sans: '"IBM Plex Sans JP", "IBM Plex Sans", system-ui, -apple-system, sans-serif',
            mono: '"IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, monospace',
          },
          header: {
            logo: `${docsBase}registry-signet.svg`,
            logoWidth: 28,
            logoHeight: 28,
          },
          footer: {
            message: 'Built with <a href="https://github.com/ubugeeei/ox-content">ox-content</a>.',
            copyright: "registry.pkl — typed configuration distribution for the entire toolchain.",
          },
          socialLinks: {
            github: "https://github.com/ubugeeei/registry.pkl",
          },
          embed: {
            head: `
              <script>
                try {
                  const theme = localStorage.getItem("theme") || "dark";
                  if (!localStorage.getItem("theme")) {
                    localStorage.setItem("theme", theme);
                  }
                  document.documentElement.setAttribute("data-theme", theme);
                } catch {
                  document.documentElement.setAttribute("data-theme", "dark");
                }
              </script>
              <link rel="icon" type="image/svg+xml" href="${docsBase}registry-signet.svg">
              <link rel="preconnect" href="https://fonts.googleapis.com">
              <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
              <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans+JP:wght@400;500;600;700&display=swap" rel="stylesheet">
              <link rel="stylesheet" href="${docsBase}registry-ui.css">
              <script defer src="${docsBase}registry-ui.js"></script>
              <meta name="registry-search-index" data-registry-search-url="${docsBase}registry-search.json">
            `,
            headerAfter: `
              <div class="registry-tabs-shell">
                <nav class="registry-tabs" aria-label="Primary">
                  <a href="${docsBase}index.html" data-registry-nav="${docsBase}">Home</a>
                  <a href="${docsBase}start/index.html" data-registry-nav="${docsBase}start/">Start Here</a>
                  <a href="${docsBase}packages/index.html" data-registry-nav="${docsBase}packages/">Packages</a>
                  <a href="${docsBase}targets/index.html" data-registry-nav="${docsBase}targets/">Targets</a>
                  <a href="${docsBase}guide/index.html" data-registry-nav="${docsBase}guide/">Guides</a>
                  <a href="${docsBase}reference/index.html" data-registry-nav="${docsBase}reference/">Reference</a>
                  <a href="${docsBase}architecture/index.html" data-registry-nav="${docsBase}architecture/">Architecture</a>
                  <a href="#/search" class="registry-tabs__search-link" title="Search (/) or Cmd/Ctrl+K">
                    Search <kbd>/</kbd>
                  </a>
                </nav>
              </div>
            `,
          },
        }),
      },
    }),
  ],
  server: {
    port: 4173,
  },
  preview: {
    port: 4173,
  },
  build: {
    outDir: "../../dist/docs",
  },
});

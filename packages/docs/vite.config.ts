import { defineConfig } from "vite";
import { defineTheme, defaultTheme, oxContent } from "@ox-content/vite-plugin";
import pkl from "@shikijs/langs/pkl";

export default defineConfig({
  plugins: [
    oxContent({
      srcDir: "content",
      outDir: "../../dist/docs",
      base: "/",
      highlight: true,
      highlightTheme: "github-dark",
      highlightLangs: pkl,
      mermaid: true,
      toc: true,
      tocMaxDepth: 3,
      ssg: {
        siteName: "registry.pkl",
        siteUrl: "https://registry.pkl",
        theme: defineTheme({
          extends: defaultTheme,
          colors: {
            primary: "#c45a17",
            primaryHover: "#dd7130",
            background: "#fcfbf7",
            backgroundAlt: "#f4efe6",
            text: "#1f1c18",
            textMuted: "#6f675e",
            border: "#dfd5c7",
            codeBackground: "#1e1a16",
            codeText: "#f7f0e7",
          },
          darkColors: {
            primary: "#f48a4b",
            primaryHover: "#ff9a63",
            background: "#12100e",
            backgroundAlt: "#1a1714",
            text: "#f5efe7",
            textMuted: "#b7aa9b",
            border: "#2c2621",
            codeBackground: "#0e0c0a",
            codeText: "#f5efe7",
          },
          fonts: {
            sans: '"Space Grotesk", "IBM Plex Sans JP", sans-serif',
            mono: '"IBM Plex Mono", monospace',
          },
          header: {
            logo: "/registry-mark.svg",
            logoWidth: 28,
            logoHeight: 28,
          },
          footer: {
            message: 'Built with <a href="https://github.com/ubugeeei/ox-content">ox-content</a>.',
            copyright: `Design notes for registry.pkl and first-party target.* packages.`,
          },
          socialLinks: {
            github: "https://github.com/ubugeeei/registry.pkl",
          },
          embed: {
            head: `
              <link rel="icon" type="image/svg+xml" href="/registry-mark.svg">
              <link rel="preconnect" href="https://fonts.googleapis.com">
              <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
              <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans+JP:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet">
              <link rel="stylesheet" href="/registry-ui.css">
              <script defer src="/registry-ui.js"></script>
            `,
            headerAfter: `
              <div class="registry-tabs-shell">
                <nav class="registry-tabs" aria-label="Primary">
                  <a href="/index.html" data-registry-nav="/">Overview</a>
                  <a href="/packages/index.html" data-registry-nav="/packages/">Packages</a>
                  <a href="/targets/index.html" data-registry-nav="/targets/">Targets</a>
                  <a href="/guide/package-ecosystem/index.html" data-registry-nav="/guide/">Guides</a>
                  <a href="/architecture/index.html" data-registry-nav="/architecture/">Architecture</a>
                  <a href="/reference/tool-matrix/index.html" data-registry-nav="/reference/">Reference</a>
                </nav>
              </div>
            `,
          },
          css: `
            :root {
              --reg-grid: linear-gradient(to right, rgba(196, 90, 23, 0.08) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(196, 90, 23, 0.08) 1px, transparent 1px);
            }

            body {
              background:
                radial-gradient(circle at top left, rgba(245, 179, 88, 0.18), transparent 35%),
                radial-gradient(circle at top right, rgba(196, 90, 23, 0.1), transparent 30%),
                var(--octc-color-bg);
            }

            .header {
              backdrop-filter: blur(14px);
              background: color-mix(in srgb, var(--octc-color-bg) 82%, transparent);
              border-bottom: 1px solid color-mix(in srgb, var(--octc-color-border) 82%, transparent);
            }

            .entry-hero {
              position: relative;
              overflow: hidden;
              border: 1px solid var(--octc-color-border);
              border-radius: 28px;
              background:
                var(--reg-grid),
                linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(244, 239, 230, 0.88));
              background-size: 28px 28px, auto;
              box-shadow: 0 20px 80px rgba(73, 39, 14, 0.08);
            }

            .entry-hero::before {
              content: "";
              position: absolute;
              inset: auto -10% -30% auto;
              width: 320px;
              height: 320px;
              border-radius: 999px;
              background: radial-gradient(circle, rgba(196, 90, 23, 0.18), transparent 65%);
              pointer-events: none;
            }

            .feature-card {
              display: grid;
              grid-template-columns: auto 1fr auto;
              gap: 1rem;
              align-items: start;
              padding: 1.25rem 1.35rem;
              min-height: 166px;
              border-radius: 22px;
              border: 1px solid var(--octc-color-border);
              background:
                linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(249, 245, 238, 0.96));
              box-shadow: 0 18px 50px rgba(60, 35, 17, 0.06);
            }

            .features-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
              gap: 1rem;
              margin: 0 0 3rem;
            }

            .feature-icon {
              width: 2.8rem;
              height: 2.8rem;
              display: grid;
              place-items: center;
              border-radius: 16px;
              background: rgba(196, 90, 23, 0.14);
              color: var(--octc-color-primary);
            }

            .feature-body {
              display: grid;
              gap: 0.55rem;
            }

            .feature-title {
              font-size: 1.05rem;
              line-height: 1.2;
            }

            .feature-details {
              color: var(--octc-color-text-muted);
              font-size: 0.96rem;
              line-height: 1.6;
            }

            .feature-link {
              align-self: end;
              color: var(--octc-color-primary);
              font-size: 1.2rem;
            }

            .content {
              position: relative;
            }

            .content h1,
            .content h2,
            .content h3 {
              letter-spacing: -0.03em;
            }

            .content h1 {
              font-family: "Space Grotesk", "IBM Plex Sans JP", sans-serif;
            }

            .content h2 {
              margin-top: 2.5rem;
            }

            .content ul,
            .content ol {
              display: grid;
              gap: 0.72rem;
              padding-left: 1.25rem;
            }

            .content li > p {
              margin: 0;
            }

            .content pre {
              border: 1px solid rgba(255, 255, 255, 0.08);
              border-radius: 18px;
              box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
            }

            .content table {
              border-radius: 14px;
              overflow: hidden;
            }

            .sidebar {
              position: sticky;
              top: calc(var(--octc-header-height) + 1.25rem);
              align-self: start;
              padding: 1rem;
              border: 1px solid color-mix(in srgb, var(--octc-color-border) 82%, transparent);
              border-radius: 24px;
              background:
                linear-gradient(180deg, rgba(255, 255, 255, 0.42), transparent),
                color-mix(in srgb, var(--octc-color-bg-alt) 86%, var(--octc-color-bg));
              box-shadow: 0 18px 45px rgba(60, 35, 17, 0.05);
            }

            .nav-section + .nav-section {
              margin-top: 1rem;
              padding-top: 1rem;
              border-top: 1px solid color-mix(in srgb, var(--octc-color-border) 78%, transparent);
            }

            .nav-title {
              margin-bottom: 0.55rem;
              color: var(--octc-color-text-muted);
              font-size: 0.7rem;
              font-weight: 700;
              letter-spacing: 0.14em;
              text-transform: uppercase;
            }

            .nav-list {
              list-style: none;
              margin: 0;
              padding: 0;
              display: grid;
              gap: 0.22rem;
            }

            .nav-link {
              display: block;
              padding: 0.58rem 0.72rem;
              border-radius: 14px;
              color: var(--octc-color-text);
              text-decoration: none;
              transition:
                background-color 140ms ease,
                transform 140ms ease,
                color 140ms ease;
            }

            .nav-link:hover {
              background: rgba(196, 90, 23, 0.08);
              color: var(--octc-color-text);
              transform: translateX(2px);
            }

            .nav-link.active {
              background: rgba(196, 90, 23, 0.12);
              color: var(--octc-color-text);
              box-shadow: inset 0 0 0 1px rgba(196, 90, 23, 0.08);
            }

            .entry-content > ul,
            .entry-content > ol,
            article > ul,
            article > ol {
              margin: 1.1rem 0 1.6rem;
              padding-left: 0;
              list-style: none;
            }

            .entry-content > ul,
            article > ul {
              grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            }

            .entry-content > ol,
            article > ol {
              grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
              counter-reset: doc-steps;
            }

            .entry-content > ul > li,
            .entry-content > ol > li,
            article > ul > li,
            article > ol > li {
              position: relative;
              padding: 1rem 1rem 1rem 2.9rem;
              border: 1px solid color-mix(in srgb, var(--octc-color-border) 88%, transparent);
              border-radius: 18px;
              background: linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(246, 241, 233, 0.94));
              box-shadow: 0 14px 34px rgba(60, 35, 17, 0.04);
              overflow-wrap: anywhere;
            }

            .entry-content > ul > li::before,
            article > ul > li::before {
              content: "";
              position: absolute;
              left: 1rem;
              top: 1.15rem;
              width: 0.72rem;
              height: 0.72rem;
              border-radius: 999px;
              background: linear-gradient(180deg, rgba(196, 90, 23, 0.95), rgba(244, 138, 75, 0.95));
              box-shadow: 0 0 0 6px rgba(196, 90, 23, 0.08);
            }

            .entry-content > ol > li,
            article > ol > li {
              counter-increment: doc-steps;
            }

            .entry-content > ol > li::before,
            article > ol > li::before {
              content: counter(doc-steps, decimal-leading-zero);
              position: absolute;
              left: 0.95rem;
              top: 0.88rem;
              display: grid;
              place-items: center;
              width: 1.35rem;
              height: 1.35rem;
              border-radius: 999px;
              background: rgba(196, 90, 23, 0.12);
              color: var(--octc-color-primary);
              font-size: 0.72rem;
              font-weight: 700;
              letter-spacing: 0.08em;
            }

            .entry-content > ul > li > p,
            .entry-content > ol > li > p,
            article > ul > li > p,
            article > ol > li > p {
              line-height: 1.6;
            }

            .footer {
              border-top: 1px solid var(--octc-color-border);
            }

            @media (max-width: 960px) {
              .layout {
                display: flex;
                flex-direction: column;
              }

              .main,
              .content {
                width: 100%;
                min-width: 0;
              }

              .entry-hero {
                border-radius: 22px;
              }

              .sidebar {
                position: static;
                top: auto;
                width: 100%;
              }
            }
          `,
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

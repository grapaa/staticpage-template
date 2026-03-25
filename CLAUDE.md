# CLAUDE.md

This file guides Claude Code (claude.ai/code) when working in this repository.

## Commands

```bash
npm install        # Install dependencies
npm run dev        # Start dev server at localhost:4321
npm run build      # Build static site to dist/
npm run preview    # Preview production build locally
```

No test or lint scripts are configured.

## Architecture

This is a **static marketing site template** built with:
- **Astro 6** — file-based routing, `.astro` components, zero JS by default
- **Tailwind CSS v4** — configured as a Vite plugin (`@tailwindcss/vite`), no `tailwind.config.*` file
- **TypeScript** — used in `.ts` files and frontmatter of `.astro` files
- **GitHub Pages** — deployed via `.github/workflows/deploy.yml` on push to `main`

## Key files to edit when customizing for a customer

| File | What to change |
|------|----------------|
| `src/lib/site.config.ts` | Site name, tagline, nav links, email, location, CTA |
| `src/styles/global.css` | Brand colors, fonts (`@theme {}` block) |
| `astro.config.mjs` | `site` URL (required for GitHub Pages) |
| `src/pages/*.astro` | Page content, copy, structure |
| `public/favicon.svg` | Site favicon |
| `public/og-image.png` | Social share image |

## Color system

All brand colors are defined in `src/styles/global.css` under `@theme {}`:

```css
@theme {
  --color-primary: #1E40AF;
  --color-accent: #06B6D4;
  --color-background: #F8FAFC;
  --color-text: #0F172A;
  --color-muted: #64748B;
  /* ... */
}
```

Use them as Tailwind utilities: `text-primary`, `bg-accent`, `border-border`, `text-muted`, etc.
To change the brand color, update `--color-primary` and `--color-primary-light`/`--color-primary-dark`.

## Folder structure

```
src/
├── components/     # Reusable UI: Header, Footer, Hero, Card
├── layouts/        # BaseLayout.astro — wraps every page (SEO, fonts, body)
├── lib/            # site.config.ts — customer config
├── pages/          # index.astro, about.astro, services.astro, contact.astro
└── styles/         # global.css with @theme color variables
public/             # Static assets: favicon, og-image, images
.github/workflows/  # deploy.yml — GitHub Pages CI
```

## How to add a new page

1. Create `src/pages/new-page.astro`
2. Import `BaseLayout`, `Header`, `Footer` (copy pattern from `about.astro`)
3. Add the page to `site.nav` in `src/lib/site.config.ts`

## How to add a new component

1. Create `src/components/MyComponent.astro`
2. Define a TypeScript `interface Props` at the top of the frontmatter
3. Import and use it in a page with `import MyComponent from '../components/MyComponent.astro'`

## How to customize for a new customer

1. Update `src/lib/site.config.ts` — name, tagline, nav, email, CTA
2. Update colors in `src/styles/global.css` `@theme {}` block
3. Update `site` URL in `astro.config.mjs`
4. Replace placeholder content in each page file
5. Add `public/favicon.svg` and `public/og-image.png`
6. Set `base` in `astro.config.mjs` if deploying to a subpath (e.g., `github.io/repo-name`)

## Deployment

Push to `main` → GitHub Actions builds → deploys to GitHub Pages.

**One-time setup required in GitHub:**
1. Go to repo Settings → Pages → Source: **GitHub Actions**
2. Make sure the `GITHUB_TOKEN` has write permissions (Settings → Actions → Workflow permissions → Read and write)

## Content language

All content is in English. If writing for a non-English customer, update `lang={site.locale}` in `BaseLayout.astro` and translate page copy.

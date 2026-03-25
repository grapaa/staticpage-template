# GitHub Copilot Instructions

## Project overview

This is a **static website template** for customer projects. Built with Astro 6, Tailwind CSS v4, and TypeScript. Deploys to GitHub Pages via GitHub Actions.

## Tech stack

- **Astro 6** — component framework, file-based routing
- **Tailwind CSS v4** — utility-first CSS, configured via Vite plugin (no `tailwind.config.*`)
- **TypeScript** — strict mode, used in `.ts` and `.astro` frontmatter
- **GitHub Pages** — static hosting, CI/CD in `.github/workflows/deploy.yml`

## Key conventions

### Central config first
All customer-specific values live in `src/lib/site.config.ts`. When customizing for a customer, update this file first — name, tagline, description, nav links, email, locale, copyright.

### Base path and links
`astro.config.mjs` has a `base` property that must match the repo name for GitHub Pages subpath deploys. All internal links use the `url()` helper from `src/lib/url.ts` which prepends the base automatically. Never hardcode `href="/page"` — always use `url('/page')`.

### Color system
Colors are CSS custom properties in `src/styles/global.css` under `@theme {}`. Use them via Tailwind utilities: `text-primary`, `bg-accent`, `text-muted`, `bg-background`, `border-border`, etc.

### Fonts
Fonts are configured in two places that must stay in sync:
1. `src/styles/global.css` — `--font-display` and `--font-body` in the `@theme {}` block
2. `src/layouts/BaseLayout.astro` — Google Fonts `<link>` tag

### Component props
Every `.astro` component should declare a TypeScript `interface Props` at the top of the frontmatter block.

### Layout pattern
All pages use `BaseLayout.astro` and inject `<Header>` and `<Footer>` via named slots:
```astro
<BaseLayout title="...">
  <Header slot="header" />
  <!-- page content -->
  <Footer slot="footer" />
</BaseLayout>
```

### Navigation ↔ pages
Nav hrefs in `site.config.ts` must match page filenames:
- `href: '/about'` → `src/pages/about.astro`
- `href: '/our-menu'` → `src/pages/our-menu.astro`

### Components
- **Hero** — full-width hero, supports optional `image` prop for background photos
- **ImageText** — side-by-side image + text, use `reverse` to flip layout
- **Card** — feature/service card with icon, title, description, optional link
- **Header** / **Footer** — read from `site.config.ts`

### Images
Add photos to `public/images/` and reference them in components:
```astro
<Hero image="/images/hero.jpg" imageAlt="Description" />
<ImageText image="/images/about.jpg" title="..." description="..." />
```

## How to vibecode a new customer site

1. **Edit `src/lib/site.config.ts`** — set name, tagline, description, URL, nav, email, locale, copyright
2. **Edit `src/styles/global.css`** — swap colors in `@theme {}` to match brand
3. **Edit font link in `src/layouts/BaseLayout.astro`** — load the fonts declared in global.css
4. **Edit `astro.config.mjs`** — update `site` and `base` (base = repo name)
5. **Rename/create page files** to match nav hrefs — delete template demo pages
6. **Replace content** in each `src/pages/*.astro` file — keep layout, replace copy
7. **Add images** to `public/images/` — use in Hero and ImageText components
8. **Add assets** to `public/` — favicon.svg, og-image.png

## What NOT to do

- Do not create a `tailwind.config.*` file — Tailwind v4 is configured via `@theme {}` in global.css
- Do not add `@astrojs/node` adapter — this is a static site (no server-side rendering)
- Do not hardcode the site name, email, or nav links in components — read from `site.config.ts`
- Do not hardcode `href="/page"` in templates — use `url('/page')` from `src/lib/url.ts`

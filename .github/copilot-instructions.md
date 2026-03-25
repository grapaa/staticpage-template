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
All customer-specific values live in `src/lib/site.config.ts`. When customizing for a customer, update this file first.

### Color system
Colors are CSS custom properties in `src/styles/global.css` under `@theme {}`. Use them via Tailwind utilities: `text-primary`, `bg-accent`, `text-muted`, `bg-background`, `border-border`, etc.

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

### File-based routing
- `src/pages/index.astro` → `/`
- `src/pages/about.astro` → `/about`
- `src/pages/services.astro` → `/services`
- `src/pages/contact.astro` → `/contact`

## How to vibecode a new customer site

1. **Edit `src/lib/site.config.ts`** — set name, tagline, description, URL, nav, email
2. **Edit `src/styles/global.css`** — swap `--color-primary` and `--color-accent` to match brand colors
3. **Edit `astro.config.mjs`** — update `site:` to the GitHub Pages URL
4. **Replace content** in each `src/pages/*.astro` file — keep the layout, replace the copy
5. **Add assets** to `public/` — favicon.svg, og-image.png, any photos

## What NOT to do

- Do not create a `tailwind.config.*` file — Tailwind v4 is configured via `@theme {}` in global.css
- Do not add `@astrojs/node` adapter — this is a static site (no server-side rendering)
- Do not hardcode the site name, email, or nav links in components — read from `site.config.ts`

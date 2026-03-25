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
| `src/lib/site.config.ts` | Site name, tagline, nav links, email, location, CTA, `locale`, `copyright` |
| `src/styles/global.css` | Brand colors (`@theme {}` block), font family names |
| `src/layouts/BaseLayout.astro` | Google Fonts `<link>` URL (must match fonts declared in `global.css`) |
| `astro.config.mjs` | `site` URL **and** `base` path (must match repo name for GitHub Pages subpath) |
| `package.json` | `name` field (cosmetic, update to match project) |
| `src/pages/*.astro` | Page content, copy, structure |
| `public/favicon.svg` | Site favicon |
| `public/og-image.png` | Social share image |
| `public/images/` | Customer photos and images (used in Hero and ImageText components) |

## Important: base path

When deploying to GitHub Pages at `username.github.io/repo-name`, you **must** set `base` in `astro.config.mjs` to match your repo name:

```js
export default defineConfig({
  site: 'https://username.github.io',
  base: '/repo-name',  // ← MUST match your GitHub repo name
});
```

All internal links use the `url()` helper from `src/lib/url.ts` which prepends `base` automatically. When adding new links, always use `url('/page-name')` instead of hardcoding `href="/page-name"`.

## Navigation and pages

Navigation links in `site.config.ts` map directly to page files:

```
nav: [{ label: 'About', href: '/about' }]  →  src/pages/about.astro
nav: [{ label: 'Menu', href: '/our-menu' }] →  src/pages/our-menu.astro
```

**The href value must match a page filename** (without `.astro`). If you change a nav href, you must also rename or create the corresponding page file.

## Locale

`site.locale` in `site.config.ts` sets the `<html lang="">` attribute. Update this for non-English sites:
- `'en'` — English (default)
- `'no'` — Norwegian
- `'de'` — German, etc.

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

## Fonts

Fonts are configured in **two places** (both must be updated together):

1. **`src/styles/global.css`** — `@theme {}` block declares `--font-display` and `--font-body`
2. **`src/layouts/BaseLayout.astro`** — Google Fonts `<link>` tag loads the actual font files

Example: to switch heading font from Inter to Playfair Display:
- In `global.css`: `--font-display: 'Playfair Display', Georgia, serif;`
- In `BaseLayout.astro`: update the Google Fonts URL to include `family=Playfair+Display:wght@400;500;600;700`

## Folder structure

```
src/
├── components/     # Reusable UI: Header, Footer, Hero, ImageText, Card
├── layouts/        # BaseLayout.astro — wraps every page (SEO, fonts, body)
├── lib/            # site.config.ts (customer config), url.ts (base-path helper)
├── pages/          # File-based routing — each .astro file becomes a page
└── styles/         # global.css with @theme color variables
public/
├── favicon.svg     # Site favicon
├── og-image.png    # Social share image
└── images/         # Customer photos and images
.github/workflows/  # deploy.yml — GitHub Pages CI
.claude/skills/     # Project-level Claude skills
```

## Components

| Component | Purpose | Key props |
|-----------|---------|-----------|
| `Hero` | Full-width hero section | `headline`, `headlineAccent`, `subtext`, `image`, `primaryCta`, `secondaryCta` |
| `ImageText` | Side-by-side image + text | `title`, `description`, `image`, `imageAlt`, `reverse`, `href` |
| `Card` | Feature/service card | `title`, `description`, `icon`, `href` |
| `Header` | Sticky nav with mobile menu | Reads from `site.config.ts` |
| `Footer` | Dark footer with links | Reads from `site.config.ts` |

## How to add a new page

1. Create `src/pages/new-page.astro`
2. Import `BaseLayout`, `Header`, `Footer` (copy pattern from any existing page)
3. Add the page to `site.nav` in `src/lib/site.config.ts`
4. The href in nav must match the filename (e.g., `href: '/new-page'`)

## How to add a new component

1. Create `src/components/MyComponent.astro`
2. Define a TypeScript `interface Props` at the top of the frontmatter
3. Import and use it in a page with `import MyComponent from '../components/MyComponent.astro'`

## How to customize for a new customer

1. Update `src/lib/site.config.ts` — name, tagline, description, nav, email, locale, copyright, CTA
2. Update colors in `src/styles/global.css` `@theme {}` block
3. Update fonts in both `global.css` and `BaseLayout.astro` Google Fonts `<link>`
4. Update `astro.config.mjs` — set `site` URL and `base` path to match your repo
5. Update `package.json` — set `name` to your project name
6. Replace placeholder content in each page file
7. Add customer photos to `public/images/` and use them in Hero and ImageText components
8. Add `public/favicon.svg` and `public/og-image.png`
9. Run `npm run build` to verify

## Deployment

Push to `main` → GitHub Actions builds → deploys to GitHub Pages.

**One-time setup required in GitHub:**
1. Go to repo Settings → Pages → Source: **GitHub Actions**
2. Make sure the `GITHUB_TOKEN` has write permissions (Settings → Actions → Workflow permissions → Read and write)

## Content language

All template content is in English. If writing for a non-English customer:
1. Set `site.locale` to the correct language code (e.g., `'no'` for Norwegian)
2. Update `site.copyright` text
3. Translate all page copy

## Recommended Claude skills

This repo ships with **project-level skills** in `.claude/skills/` that are automatically available:

| Skill | Trigger | What it does |
|---|---|---|
| `customer-setup` | "Set up for [customer]" | Walks through full customer config: name, colors, content, favicon |
| `add-page` | "Add a [pricing/team/...] page" | Creates a new page following the established layout pattern |
| `design-component` | "Design a [hero/card/...] section" | Creates polished UI components with high visual quality |
| `update-theme` | "Change colors to [brand]" | Updates the full color system + fonts consistently |

### External skills worth using

These are not bundled but available in Claude Code:

- **`frontend-design`** — For creating distinctive, production-grade UI when you want extra design polish
- **`canvas-design`** — For creating OG images, promotional graphics, visual assets as PNG/PDF
- **`webapp-testing`** — For verifying the site in a real browser with Playwright

### Example prompts

```
"Use customer-setup to configure this for a law firm called Smith & Partners"
"Add a pricing page with three tiers"
"Design a testimonials section with client quotes and star ratings"
"Update the theme to use warm earthy tones — browns and terracotta"
"Use the frontend-design skill to redesign the hero with a split layout"
```

# Static Page Template

A production-ready template for building fast, beautiful static websites for customers — designed to be forked and vibecoded with AI tools like GitHub Copilot and Claude.

## Tech stack

- [Astro 6](https://astro.build/) — static-first, file-based routing
- [Tailwind CSS v4](https://tailwindcss.com/) — utility-first styling with CSS custom properties
- [TypeScript](https://www.typescriptlang.org/) — type safety throughout
- **GitHub Pages** — free hosting with zero config after setup

## Getting started

### 1. Fork or use as template

Click **Use this template** on GitHub, or fork the repo, then clone it locally.

### 2. Install dependencies

```bash
npm install
```

### 3. Start the dev server

```bash
npm run dev
# → http://localhost:4321
```

### 4. Configure for your customer

Edit **`src/lib/site.config.ts`** — this is the single source of truth for all customer-specific values:

```ts
export const site = {
  name: 'Customer Name',
  tagline: 'Short punchy tagline.',
  description: 'One-sentence description for SEO and social cards.',
  url: 'https://your-username.github.io',
  email: 'hello@customer.com',
  location: 'City, Country',
  nav: [
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  cta: { label: 'Get in touch', href: '/contact' },
};
```

### 5. Set brand colors

Open **`src/styles/global.css`** and update the `@theme {}` block:

```css
@theme {
  --color-primary: #YOUR_COLOR;       /* buttons, headings, links */
  --color-accent: #YOUR_ACCENT;       /* highlights, hover states */
  --color-background: #F8FAFC;        /* page background */
  /* ... */
}
```

> **Tip:** Use [Tailwind's color palette](https://tailwindcss.com/docs/customizing-colors) or the customer's brand guide. Aim for strong contrast between primary and background.

### 6. Set the site URL for GitHub Pages

In **`astro.config.mjs`**, update the `site` value:

```js
export default defineConfig({
  site: 'https://YOUR-USERNAME.github.io',
  // If deploying to a subpath (github.io/repo-name), also set:
  // base: '/repo-name',
});
```

> **Subpath deploy?** If the site lives at `username.github.io/repo-name`, you need **both** `site` (the origin) and `base` (the path prefix). Also update `site.url` in `site.config.ts` to the full URL.

### 7. Replace placeholder content

Each page in `src/pages/` has placeholder "Acme Corp" content. Replace it with the customer's actual copy. Keep the structure — just swap the words.

### 8. Add assets

Drop these into `public/`:
- `favicon.svg` — site icon
- `og-image.png` — social share image (recommended: 1200×630px)
- Any photos, logos, or media used on pages

---

## Vibecoding with AI

This template is optimized for AI-assisted development. Here's how to get the most out of it.

### With GitHub Copilot

The file `.github/copilot-instructions.md` teaches Copilot about this project's conventions. Open the template in VS Code with the Copilot extension and:

- **Ask Copilot Chat:** _"Add a testimonials section to the home page"_
- **Ask Copilot Chat:** _"Create a new page called `/pricing` following the same layout pattern"_
- **Ask Copilot Chat:** _"Update the hero headline and subtext for a law firm called Smith & Co"_

Copilot will understand the layout patterns, component props, and color system automatically.

### With Claude (claude.ai/code)

The file `CLAUDE.md` provides Claude Code with full project context. In Claude Code:

- **Describe the customer:** _"This is for a bakery called Bread & Butter. They want a warm, earthy feel — primary color #8B4513."_
- **Ask for changes:** _"Replace all placeholder content on every page with copy for Bread & Butter. Focus on artisan craft and community."_
- **Add features:** _"Add a gallery page showing product photos"_
- **Use skills for high-quality design:** _"Use the frontend-design skill to create a stunning hero section with a split layout and animated gradient"_

Claude will read `CLAUDE.md` automatically and apply changes consistently across the project.

#### Built-in project skills

The repo ships with custom Claude skills in `.claude/skills/` — they activate automatically:

| Skill | Example prompt |
|---|---|
| `customer-setup` | _"Set up for a bakery called Bread & Butter with warm earthy tones"_ |
| `add-page` | _"Add a pricing page with three tiers"_ |
| `design-component` | _"Design a testimonials section with client photos and star ratings"_ |
| `update-theme` | _"Change the colors to match brand hex #8B4513 with a cream background"_ |

#### External skills worth using

| Skill | When to use |
|---|---|
| `frontend-design` | Building/redesigning page sections with extra design polish |
| `canvas-design` | Creating OG images, promotional graphics, visual assets |
| `webapp-testing` | Verifying the site in a real browser, taking screenshots |

### Recommended vibecoding workflow

1. Fork the template → clone locally → `npm install && npm run dev`
2. Open in VS Code (Copilot) or Claude Code
3. Describe the customer to the AI: brand, industry, tone, colors
4. Ask the AI to update `site.config.ts` and `global.css` first
5. Then ask it to rewrite page content page by page
6. Review in the browser, iterate, commit

---

## Deployment to GitHub Pages

### One-time setup

1. Push your repo to GitHub
2. Go to **Settings → Pages → Source** → select **GitHub Actions**
3. Go to **Settings → Actions → General → Workflow permissions** → enable **Read and write**

### Deploy

Every push to `main` automatically builds and deploys. The workflow is in `.github/workflows/deploy.yml`.

```bash
git push origin main
# → GitHub Actions builds → deploys to GitHub Pages
```

---

## Project structure

```
src/
├── components/     # Header, Footer, Hero, ImageText, Card
├── layouts/        # BaseLayout.astro (SEO, fonts, structure)
├── lib/            # site.config.ts ← edit this first, url.ts (base-path helper)
├── pages/          # File-based routing — each .astro file becomes a page
└── styles/         # global.css with @theme color variables
public/
├── images/         # Customer photos and images
├── favicon.svg     # Site favicon
└── og-image.png    # Social share image
.github/
├── copilot-instructions.md   # Copilot context
└── workflows/deploy.yml      # GitHub Pages CI/CD
.claude/skills/               # Project-level Claude skills
CLAUDE.md                     # Claude Code context
```

## Components

| Component | Purpose | Key props |
|-----------|---------|-----------|
| **Hero** | Full-width hero section | `headline`, `headlineAccent`, `subtext`, `image`, CTAs |
| **ImageText** | Side-by-side image + text | `title`, `description`, `image`, `reverse`, `href` |
| **Card** | Feature/service card | `title`, `description`, `icon`, `href` |
| **Header** | Sticky nav with mobile menu | Reads from `site.config.ts` |
| **Footer** | Dark footer with links | Reads from `site.config.ts` |

### Using images

Add customer photos to `public/images/` and reference them in components:

```astro
<!-- Hero with background image -->
<Hero
  headline="Welcome"
  image="/images/hero.jpg"
  imageAlt="Restaurant interior"
/>

<!-- Side-by-side image + text -->
<ImageText
  title="Our Story"
  description="Founded in 1898..."
  image="/images/about.jpg"
  imageAlt="Historic building"
  reverse
/>
```

Hero falls back to a gradient background when no image is provided.

## Adding a new page

```bash
# 1. Create the page
touch src/pages/new-page.astro

# 2. Use the same layout pattern as any existing page
# The href in site.nav must match the filename:
# href: '/new-page' → src/pages/new-page.astro

# 3. Add it to site.nav in site.config.ts
```

## Commands

```bash
npm run dev      # Dev server at localhost:4321
npm run build    # Build to dist/
npm run preview  # Preview production build
```

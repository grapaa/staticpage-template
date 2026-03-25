# Add Page

Create a new page for the site. Use this skill when the user asks to "add a page", "create a new page", or mentions a specific page like "add a pricing page" or "add a team page".

## Steps

1. **Create the page file** at `src/pages/{page-name}.astro`

2. **Follow the established pattern** — use this structure:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import Hero from '../components/Hero.astro';
import ImageText from '../components/ImageText.astro';
import Card from '../components/Card.astro';
import { site } from '../lib/site.config';
---

<BaseLayout title={`Page Title — ${site.name}`} description="Page description for SEO.">
  <Header slot="header" />

  <Hero
    eyebrow="Eyebrow"
    headline="Page Title"
    headlineAccent="Accent"
    subtext="Subtitle text."
    image="/images/hero.jpg"
  />

  <!-- Content sections -->
  <ImageText
    eyebrow="About"
    title="Section title"
    description="Description text."
    image="/images/photo.jpg"
    imageAlt="Descriptive alt text"
  />

  <ImageText
    title="Another section"
    description="Description text."
    image="/images/photo2.jpg"
    imageAlt="Descriptive alt text"
    reverse
    class="bg-surface border-t border-border"
  />

  <Footer slot="footer" />
</BaseLayout>
```

3. **Add the page to navigation** — update `site.nav` in `src/lib/site.config.ts`. The href must match the filename (e.g., `href: '/pricing'` → `src/pages/pricing.astro`).

4. **Use existing components** where possible:
   - `Hero` — full-width hero with optional background image
   - `ImageText` — side-by-side image + text (use `reverse` to flip)
   - `Card` — feature/service cards in a grid
   - Or create new ones in `src/components/` with a TypeScript `interface Props`

5. **Use Tailwind utilities** with the theme colors: `text-primary`, `bg-accent`, `text-muted`, `bg-background`, `bg-surface`, `border-border`

6. **For images**, add files to `public/images/` and reference them with paths like `/images/photo.jpg`. The `url()` helper is built into Hero, ImageText, and Card components.

7. **Run `npm run build`** to verify the new page builds without errors

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
import { site } from '../lib/site.config';
---

<BaseLayout title={`Page Title — ${site.name}`} description="Page description for SEO.">
  <Header slot="header" />

  <!-- Page header -->
  <section class="bg-primary-dark py-24">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p class="text-accent text-xs font-medium uppercase tracking-[0.25em] mb-4">Eyebrow</p>
      <h1 class="font-display text-4xl sm:text-5xl font-semibold text-white">Page Title</h1>
      <p class="mt-6 text-white/55 text-lg leading-relaxed">Subtitle text.</p>
    </div>
  </section>

  <!-- Page content -->
  <section class="py-24 bg-background">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Content here -->
    </div>
  </section>

  <Footer slot="footer" />
</BaseLayout>
```

3. **Add the page to navigation** — update `site.nav` in `src/lib/site.config.ts`

4. **Use existing components** where possible — `Card`, `Hero`, or create new ones in `src/components/` with a TypeScript `interface Props`

5. **Use Tailwind utilities** with the theme colors: `text-primary`, `bg-accent`, `text-muted`, `bg-background`, `bg-surface`, `border-border`

6. **Run `npm run build`** to verify the new page builds without errors

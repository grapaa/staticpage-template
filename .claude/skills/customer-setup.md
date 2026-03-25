# Customer Setup

Set up the template for a new customer. Use this skill when the user says something like "set up for [customer name]", "configure for a new client", or "customize this template for [business]".

## Workflow

1. **Ask the user** for the following (skip any they've already provided):
   - Company name
   - Tagline / one-liner
   - Industry / what they do
   - Brand colors (primary + accent) — or ask what vibe they want and suggest colors
   - Contact email
   - Location
   - Language / locale (default: English / `en`)
   - Preferred tone of voice (professional, friendly, bold, minimal, etc.)

2. **Update `src/lib/site.config.ts`** with the customer's name, tagline, description, email, location, locale, copyright text, nav links, and CTA text. Set nav hrefs to match the page filenames you'll create (e.g., `'/about'` → `src/pages/about.astro`).

3. **Update `src/styles/global.css`** — change the `@theme {}` block to match the customer's brand colors. Update `--color-primary`, `--color-primary-light`, `--color-primary-dark`, `--color-accent`, and `--color-accent-light`. Optionally adjust `--color-background` and `--color-surface` if the brand calls for a non-white background. Update `--font-display` and `--font-body` if using custom fonts.

4. **Update fonts in `src/layouts/BaseLayout.astro`** — update the Google Fonts `<link>` URL to load the fonts declared in `global.css`. Both places must match.

5. **Update `astro.config.mjs`**:
   - Set `site` to the deployment URL (e.g., `'https://username.github.io'`)
   - Set `base` to the repo name (e.g., `'/my-repo'`) — this is required for GitHub Pages subpath deploys

6. **Update `package.json`** — change the `name` field to match the project.

7. **Rename or create page files** to match the nav hrefs in `site.config.ts`. Delete the template demo pages (`getting-started.astro`, `features.astro`, `prompts.astro`) and create pages appropriate for the customer (e.g., `about.astro`, `services.astro`, `contact.astro`).

8. **Rewrite page content** in all `src/pages/*.astro` files:
   - Replace all placeholder text with real customer copy
   - Match the customer's tone of voice
   - Keep the page structure and component usage intact
   - Use the `Hero` component with an `image` prop if the customer has a hero photo
   - Use the `ImageText` component for side-by-side image+text sections
   - Use the `Card` component for feature/service grids

9. **Add customer images** to `public/images/` and reference them in components:
   - Hero: `image="/images/hero.jpg"` prop
   - ImageText: `image="/images/about.jpg"` prop
   - If no images are available yet, omit the `image` prop — Hero falls back to a gradient background

10. **Update `public/favicon.svg`** — change the letter and color to match the customer.

11. **Run `npm run build`** to verify everything builds cleanly.

12. **Summarize** what was changed and what the user should do next (add real photos, configure contact form, deploy).

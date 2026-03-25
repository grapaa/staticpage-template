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
   - Preferred tone of voice (professional, friendly, bold, minimal, etc.)

2. **Update `src/lib/site.config.ts`** with the customer's name, tagline, description, email, location, nav links, and CTA text.

3. **Update `src/styles/global.css`** — change the `@theme {}` block to match the customer's brand colors. Update `--color-primary`, `--color-primary-light`, `--color-primary-dark`, `--color-accent`, and `--color-accent-light`. Optionally adjust `--color-background` and `--color-surface` if the brand calls for a non-white background.

4. **Update `astro.config.mjs`** — set the `site` URL. If deploying to a subpath, also set `base`.

5. **Rewrite page content** in all `src/pages/*.astro` files:
   - Replace all "Acme Corp" placeholder text with real customer copy
   - Match the customer's tone of voice
   - Keep the page structure and component usage intact
   - Update the hero eyebrow, headline, subtext, and CTAs
   - Update services/values/process steps to match the customer's actual offerings

6. **Update `public/favicon.svg`** — change the letter and color to match the customer.

7. **Run `npm run build`** to verify everything builds cleanly.

8. **Summarize** what was changed and what the user should do next (add real photos, configure contact form, deploy).

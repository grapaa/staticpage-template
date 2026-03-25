# Design Component

Create or redesign a UI component or page section with high visual quality. Use this skill when the user asks to "design", "redesign", "build a section", "create a component", or wants something visually distinctive.

## Design principles

- **No generic AI aesthetics** — avoid the typical gradient-heavy, overly rounded, same-looking AI output
- **Purposeful whitespace** — let elements breathe, use generous padding
- **Strong typography hierarchy** — use `font-display` for headings, clear size steps
- **Subtle motion** — use `animate-fade-up` class or CSS transitions, never gratuitous animation
- **Brand-consistent** — always use colors from the `@theme {}` system, never hardcode hex values

## Technical requirements

- Create as an `.astro` component in `src/components/`
- Define a TypeScript `interface Props` for all configurable values
- Use Tailwind CSS utilities only — no inline styles except for CSS custom property values
- Must be responsive (mobile-first: base → `sm:` → `md:` → `lg:`)
- Use theme colors: `text-primary`, `bg-accent`, `text-muted`, `bg-background`, `bg-surface`, `border-border`
- Use theme fonts: `font-display` for headings, `font-body` for text (defaults via body CSS)

## Color reference

All colors are CSS custom properties in `src/styles/global.css`:
```
primary / primary-light / primary-dark  — main brand
accent / accent-light                    — highlights, CTAs
background                               — page bg
surface                                  — card/panel bg
text                                     — body text
muted                                    — secondary text
border                                   — dividers, borders
```

## Common section patterns

- **Hero**: full-width, dark bg (`bg-primary-dark`), large headline, CTA buttons
- **Feature grid**: 2-3 columns of Card components with icons
- **Split section**: text on one side, visual on the other (use `grid md:grid-cols-2`)
- **CTA banner**: colored background, centered text, single button
- **Testimonials**: quotes in cards or a centered large blockquote
- **Stats/numbers**: large numbers with labels in a row

## After creating

1. Import the component into the target page
2. Verify it looks good at mobile, tablet, and desktop widths
3. Run `npm run build` to check for errors

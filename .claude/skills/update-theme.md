# Update Theme

Change the site's visual theme — colors, fonts, and overall feel. Use this skill when the user asks to "change colors", "update the theme", "rebrand", "make it look more [adjective]", or provides brand guidelines.

## What to change

### Colors (`src/styles/global.css`)

Edit the `@theme {}` block. All seven color groups should be cohesive:

```css
@theme {
  --color-primary: ...;        /* Main brand: buttons, headings, links, header logo */
  --color-primary-light: ...;  /* Hover states, lighter variant */
  --color-primary-dark: ...;   /* Footer bg, hero bg, dark sections */
  --color-accent: ...;         /* Highlights, badges, accent elements */
  --color-accent-light: ...;   /* Hover accent */
  --color-background: ...;     /* Page background (usually light) */
  --color-surface: ...;        /* Card/panel background (usually white) */
  --color-text: ...;           /* Main body text (dark) */
  --color-muted: ...;          /* Secondary text, captions */
  --color-border: ...;         /* Borders, dividers */
}
```

### Tips for color selection

- **primary-dark** is used for hero and footer backgrounds — make sure white text is readable on it (contrast ratio ≥ 4.5:1)
- **accent** should contrast with primary — it's used for highlights and eye-catching elements
- **background** vs **surface**: background is the page, surface is cards. Usually bg is slightly off-white and surface is white
- Use [Tailwind's color palette](https://tailwindcss.com/docs/customizing-colors) for inspiration — pick a base hue and use the 600-900 range for primary variants

### Fonts

Change `--font-display` and `--font-body` in the `@theme {}` block. If using Google Fonts, also update the `<link>` tag in `src/layouts/BaseLayout.astro`.

Example for a serif display font:
```css
--font-display: 'Playfair Display', Georgia, serif;
--font-body: 'Inter', system-ui, sans-serif;
```

And in BaseLayout.astro, update the Google Fonts link:
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
```

## After updating

1. Check all pages in the browser — especially the hero (dark bg), cards (surface bg), and footer (primary-dark bg)
2. Verify text contrast is readable throughout
3. Run `npm run build` to ensure no errors

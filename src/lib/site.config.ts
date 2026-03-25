/**
 * Central configuration for this customer site.
 * Edit this file first after forking the template.
 */
export const site = {
  name: 'Static Page Template',
  tagline: 'Fork. Prompt. Ship.',
  description:
    'A production-ready Astro 6 template for building static customer websites with AI-assisted vibecoding.',
  url: 'https://grapaa.github.io/staticpage-template',
  locale: 'en',
  email: 'hello@example.com',
  location: 'Your City, Country',

  /** Navigation links — rendered in Header and Footer */
  nav: [
    { label: 'Getting Started', href: '/about' },
    { label: 'Features', href: '/services' },
    { label: 'Prompts', href: '/contact' },
  ],

  /** Primary CTA shown in Header and Hero */
  cta: {
    label: 'Get started',
    href: '/about',
  },
} as const;

/**
 * Central configuration for this customer site.
 * Edit this file first after forking the template.
 */
export const site = {
  name: 'Acme Corp',
  tagline: 'Building better products, faster.',
  description:
    'Acme Corp helps businesses grow through smart strategy and modern technology.',
  url: 'https://YOUR-USERNAME.github.io',
  locale: 'en',
  email: 'hello@example.com',
  location: 'Oslo, Norway',

  /** Navigation links — rendered in Header and Footer */
  nav: [
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],

  /** Primary CTA shown in Header and Hero */
  cta: {
    label: 'Get in touch',
    href: '/contact',
  },
} as const;

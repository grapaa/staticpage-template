import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // GitHub Pages URL — set this to your username.github.io
  site: 'https://YOUR-USERNAME.github.io',
  // If deploying to a subpath (e.g. github.io/repo-name), uncomment and set base:
  // base: '/repo-name',
  // ⚠️ When using base, also update site.url in src/lib/site.config.ts to the full URL
  //    e.g. 'https://YOUR-USERNAME.github.io/repo-name'
  vite: {
    plugins: [tailwindcss()],
  },
});

import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Set your site URL here — required for GitHub Pages
  site: 'https://YOUR-USERNAME.github.io',
  // If deploying to a subpath (e.g. github.io/repo-name), set base:
  // base: '/repo-name',
  vite: {
    plugins: [tailwindcss()],
  },
});

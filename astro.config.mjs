// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// SITE_URL / BASE_PATH let the same code deploy to GitHub Pages
// (e.g. https://usuario.github.io/repo) or to a custom domain without edits.
const site = process.env.SITE_URL ?? 'https://example.com';
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()],
  },
});

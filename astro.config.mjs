// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Configuración de rutas para GitHub Pages
const site = process.env.SITE_URL ?? 'https://kiarath.github.io';
const base = process.env.BASE_PATH ?? '/my-portfolio';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()],
  },
});

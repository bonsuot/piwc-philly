// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sanity from '@sanity/astro';

import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site:"https://piwcphilly.com",
  adapter: netlify(),
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sanity({
      projectId: "493tg5cp",
      dataset: "production",
      apiVersion: "2026-08-23",
      useCdn: false,
    }), sitemap()]
});
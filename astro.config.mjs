import { defineConfig } from 'astro/config';
import tailwind from 'tailwindcss';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
});
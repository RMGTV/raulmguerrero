// tailwind.config.mjs

import { DaisUI } from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js}',
    './public/index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [DaisyUI],
  daisyui: {
    themes: [
      'nord',
      'forest',
    ],
  },
};
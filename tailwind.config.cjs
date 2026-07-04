/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        terracotta: {
          DEFAULT: '#DFB49B',
          light: '#EDD3C1',
          dark: '#C99274'
        },
        brun: {
          DEFAULT: '#4A362A',
          light: '#6B5140',
          dark: '#2E2019'
        },
        creme: '#FBF6F0'
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Work Sans"', 'sans-serif']
      }
    }
  },
  plugins: []
};

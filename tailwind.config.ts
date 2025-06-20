// const animate = require('tailwindcss-animate')
// import animations from '@midudev/tailwind-animations'

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  safelist: ['dark'],
  prefix: '',

  content: [
    './pages/**/*.{ts,tsx,vue}',
    './components/**/*.{ts,tsx,vue}',
    './app/**/*.{ts,tsx,vue}',
    './src/**/*.{ts,tsx,vue}',
  ],

  theme: {
    // Définition explicite de tous les breakpoints ici
    screens: {
      xs: '360px',
      sm: '619px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      '2xl': '1536px', // Le '2xl' avec des guillemets est une bonne pratique
    },
    extend: {
      fontFamily: {
        cinzel: ['Cinzel', 'sans-serif'],
        Roboto: ['Roboto', 'sans-serif'],
        Opensans: ['Open Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        HouseOfCardsW03Bold: ['HouseOfCardsW03Bold', 'cursive'],
      },
    },
  },
  plugins: [],
}

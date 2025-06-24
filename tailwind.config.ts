// const animate = require('tailwindcss-animate')
// import animations from '@midudev/tailwind-animations'

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  safelist: ['dark'],
  prefix: '',

  content: [
    './index.html',
    './pages/**/*.{ts,tsx,vue}',
    './components/**/*.{ts,tsx,vue}',
    './app/**/*.{ts,tsx,vue}',
    './src/**/*.{ts,tsx,vue}',
  ],

  theme: {
    // Définition explicite de tous les breakpoints ici
    screens: {
      xs: '320  px',

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
      //
      '2xl': '1400px',
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

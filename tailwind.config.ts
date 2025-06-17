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
      'xs': '475px', // Votre breakpoint personnalisé
      'sm': '640px', // 40rem
      'md': '768px', // 48rem
      'lg': '1024px', // 64rem
      'xl': '1280px', // 80rem
      '2xl': '1536px', // 96rem
    },
    extend: {
      fontFamily: {
        cinzel:["Cinzel", 'sans-serif' ],
        Roboto:["Roboto", 'sans-serif' ],
        Opensans: ["Open Sans", 'sans-serif' ],
        poppins :["Poppins", 'sans-serif' ],
        HouseOfCardsW03Bold :['HouseOfCardsW03Bold', 'cursive']
      },
    },
  },
  plugins: [
    // animate,
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('tailwindcss-animate'),
    // require('tailwindcss-animated'),
    // animations,
  ],
}

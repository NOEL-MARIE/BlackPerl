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

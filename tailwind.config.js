/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

const newPlugin = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-x-180': {
      transform: 'rotateX(180deg)',
    },
    '.rotate-x-0': {
      transform: 'rotateX(0deg)',
    }
  })
})

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme': '#006a4d',
        'theme_hover': '#024731',
        'theme_light': '#77ba00'
      }
    },
  },
  plugins: [newPlugin],
}


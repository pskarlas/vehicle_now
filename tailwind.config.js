const colors = require('tailwindcss/colors')

module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        rose: colors.rose,
        emerald: colors.emerald
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

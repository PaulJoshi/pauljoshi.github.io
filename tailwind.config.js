const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    gradientColorStops: theme => ({
      'primary': 'rgb(15, 32, 39)',
      'secondary': 'rgb(32, 58, 67)',
      'danger': 'rgb(44, 83, 100)',
     }),
    textColor: {
      primaryText: colors.teal,
    },
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

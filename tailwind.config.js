const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': ['Public\\ Sans', 'Arial', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      'maincolor': '#218C74',
    },
    extend: {},
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx}", './public/index.html'
  ],
  theme: {
    extend: {
      animation: {},
      keyframes: {},
      colors:{
        gray:{
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
        },
      },
      spacing:{
        88: '22rem',
      },
      fontFamily:{
        sans:['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}


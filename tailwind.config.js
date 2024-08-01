/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", './index.html'],
  theme: {
    extend: {
     fontSize:{
      '4.5xl': ['2.62rem'],
     },
     padding:{
      '22' : ['88px']
     }
    },
  },
  plugins: [],
}


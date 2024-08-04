/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", './index.html'],
  theme: {
    extend: {
      width: {
        '92' : '23rem'
      },
      height:{
        '92' : '23rem'
      },
      fontSize: {
        '4.5xl': ['2.62rem'],
        'xxs': ['0.5rem']
      },fontFamily:{
        'poppins' : ["Poppins", "sans-serif"]
      },
      padding: {
        '22': ['88px']
      },
      spacing: {
        '144': '36rem'
      },
      blur: {
        '42': '10.5rem'
      }
    },
  },
  plugins: [],
}


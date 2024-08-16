/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'cardgreen':'#71fb6b',
        'lightgreen':'#cbfdcd',
        'color1':'#dae1fe'
      },
    },
    fontFamily:{
      abc:["Poppins","sans-serif"]
    }
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx}", //**todas las carpetas que tengan
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily:{
        "poppins": ['Poppins','sans serif']
      },
      colors: {
        "pink" : "#F195B2",
        "blue" : "#62C3E7"
      }
    },
  },
  plugins: [],
}


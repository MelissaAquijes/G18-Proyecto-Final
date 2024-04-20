/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ['Poppins', 'sans-serif']
      },
      colors: {
        "pink" : "#F195B2",
        "blue" : "#62C3E7"
      }
    },
  },
  plugins: [],
}


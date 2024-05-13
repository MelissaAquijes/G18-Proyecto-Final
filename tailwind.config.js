/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx}", //**todas las carpteas que tengan
    "./index.html"
  ],

  
  theme: {
    extend: {
      colors: {
        "pink" : "#F195B2",
        "blue" : "#62C3E7"
      }
    },
  },
  plugins: [],
}


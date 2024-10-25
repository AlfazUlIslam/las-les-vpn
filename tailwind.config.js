/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        'darkRed': '0 35px 60px -15px #59F53838',
      }
    },
    colors: {
      lightWhite: "#F6F6F6",
      darkWhite: "#F8F8F8",
      lightGray: "#FFECEC",
      darkGray: "#4F5665",
      lightRed: "#F53855",
      darkRed: "#F53838",
      fadedDarkRed: "#59F53838",
      blueishBlack: "#0B132A",
    },
    fontFamily: {
      "rubik": "'Rubik', sans-serif"
    },
    container: {
      center: true
    }
  },
  plugins: [],
}


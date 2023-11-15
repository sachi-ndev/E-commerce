/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Quicksand:['Quicksand'],
        JosefinSans:'Josefin Sans',
        Poppins:'Poppins'
      }
    },

  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        'text': '#e3fbf9',
        'background': '#05201d',
        'primary': '#8eeee3',
        'secondary': '#143485',
        'accent': '#3f37e0',
       },
       
    },
  },
  plugins: [],
};

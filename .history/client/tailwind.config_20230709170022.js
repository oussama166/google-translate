/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-select/dist/index.esm.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'google': ['Open Sans', 'sans-serif'],
      },
      animation: {
        spin: 'spin 1s ease-in-out',
      }
    },
  },
  plugins: [],
}


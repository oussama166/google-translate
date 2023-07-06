/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'google': ['Open Sans', 'sans-serif'],
      },
      animation: {
        spin: 'spin 1s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}


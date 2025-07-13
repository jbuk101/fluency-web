/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fluency-dark': '#1A222C',
        'fluency-teal': '#2C6E8F',
        'fluency-green': '#9FE6A0',
        'fluency-coral': '#F6B364',
        'fluency-light': '#F5F7FA',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
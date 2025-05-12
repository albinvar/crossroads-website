/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#00334D',
        'primary-dark-hover': '#00334F',
        'secondary-dark': '#001c2b',
        'primary-orange': '#F9920A',
        'primary-orange-hover': '#F9920D',
      }
    },
  },
  plugins: [],
}
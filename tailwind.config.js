/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      numbers: ['Cormorant Garamond'],
      'pilcrow': ['"Pilcrow Rounded"', 'sans-serif'],
    }
  },
  plugins: [],
}

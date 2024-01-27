/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'contact-grey': '#2E2E2E',
        'card-grey': '#F3F3F0',
      },
      borderRadius: {
        20: '20px',
      },
      boxShadow: {
        card: '12px 12px 18px 0px rgba(83, 146, 134, 0.20), -12px -12px 18px 0px #FFF',
      },
    },
    fontFamily: {
      sans: ['PilcrowRounded'],
      numbers: ['Cormorant Garamond'],
    },
  },
  variants: {
    extend: {
      grayscale: ['hover'],
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        desktop: '1322px',
      },
      colors: {
        'contact-grey': '#2E2E2E',
        'card-grey': '#F3F3F0',
      },
      borderRadius: {
        10: '10px',
        20: '20px',
        30: '30px',
      },
      boxShadow: {
        card: '12px 12px 18px 0px rgba(83, 146, 134, 0.20), -12px -12px 18px 0px #FFF',
        sidebar:
          '12px 12px 18px 0px rgba(83, 146, 134, 0.20), -12px -12px 18px 0px rgba(255, 255, 255, 0.25)',
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

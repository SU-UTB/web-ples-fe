/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        desktop: '1322px',
      },
      colors: {
        'contact-grey': '#2E2E2E',
        'card-grey': '#F3F3F0',
        orange: {
          default: '#ee7711',
          50: '#fff9ed',
          100: '#fef2d6',
          200: '#fce1ac',
          300: '#faca77',
          400: '#f7a840',
          500: '#f58e1a',
          550: '#f28316',
          600: '#ee7711',
          650: '#D66811',
          700: '#be5810',
          800: '#974415',
          900: '#7a3a14',
          950: '#421c08',
        },
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

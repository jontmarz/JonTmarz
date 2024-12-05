/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00000F',
        secondary: '#CCA70A',
        tertiary: '#C0C0C0',
        accent: '#2A002B',
        highlight: '#00AAFF',
        transparent: 'transparent',
      },
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
        montserrat: ['Montserrat Alternates', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
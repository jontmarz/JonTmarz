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
      animation: {
        'bounce-slow': 'bounce-slow 3s ease-in-out infinite',
        'ring-bounce': 'ring-bounce 1s ease-in-out infinite',
        'ping-slow': 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        'ping-slower': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        'ring-bounce': {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-4px) scale(1.02)' },
        },
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
  important: true, // This helps Tailwind CSS override Material UI styles when needed
};
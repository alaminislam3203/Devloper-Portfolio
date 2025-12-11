/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0ea5e9',
        'background-light': '#f0f9ff',
        'background-dark': '#0c1425',
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        signature: ['Dancing Script', 'cursive'],
      },
      borderRadius: {
        DEFAULT: '0.5rem',
      },
    },
  },
  plugins: [],
};

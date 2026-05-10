/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: '#FAFAF7',
        charcoal: '#2C2C2C',
        teal: {
          600: '#1A6B5C',
          700: '#145A4D',
        },
        terracotta: {
          500: '#C17F59',
          600: '#A66B47',
        },
      },
    },
  },
  plugins: [],
};

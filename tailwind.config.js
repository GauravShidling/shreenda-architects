/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      colors: {
        accent: '#D4A017', // Amber color for architectural accent
        primary: '#333333', // Dark gray for primary actions
        'primary-dark': '#1a1a1a', // Darker shade for hover states
      },
    },
  },
  plugins: [],
} 
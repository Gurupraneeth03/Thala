/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'csk-yellow': '#F9CD05',
        'metallic-gold': '#D4A017',
        'deep-black': '#050505',
        'dark-navy': '#0B132B',
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'cursive'],
        anton: ['Anton', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

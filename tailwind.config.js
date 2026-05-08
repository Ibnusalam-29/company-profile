/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2ecc71', // Green
        primaryDark: '#27ae60',
        primaryLight: '#52d77e',
        secondary: '#f1c40f', // Yellow
        secondaryDark: '#d4a30d',
        secondaryLight: '#f4d03f',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

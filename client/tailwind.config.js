/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EF476F",
        secondary: "#AFB0B4",
        tertiary: "#F7F7F7",
        gray1: "#FFFDF7"
      },
    },
  },
  plugins: [],
}
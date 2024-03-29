/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#003149",
        secondary: "#088097",
        skyblue: "#9BD7E6",
        purple: "#ABAAD7",
        orange: "#FE9F85",
      },
    },
  },
  plugins: [],
}

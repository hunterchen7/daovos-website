/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        chaviera: ["ChavieraPro", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
      backgroundImage: {
      },
      colors: {
        yellowGreen: "#E2FE8B"
      }
    },
  },
  plugins: [],
}
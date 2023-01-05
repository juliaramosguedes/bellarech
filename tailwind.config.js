/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-montserrat)", ...fontFamily.sans],
        body: ["var(--font-lato)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}

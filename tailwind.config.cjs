/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brandYellow: "#f1b434",
      },
      boxShadow: {
        md: " 0 2px 10px 2px rgba(0,0,0,0.4)",
      },
    },
    fontFamily: {
      sans: ["Futura", "Hind", "Arial", "sans-serif"],
    },
  },
  plugins: [],
};

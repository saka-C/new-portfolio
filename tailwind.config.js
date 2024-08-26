/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        generalsans: [
          "generalsans-light",
          "generalsans-regular",
          "generalsans-medium",
          "generalsans-semibold",
          "generalsans-bold",
          "sans-serif",
        ],
      },
      colors: {
        primary: {
          100: "#f7ffd9",
          200: "#eeffb2",
          300: "#e6ff8c",
          400: "#ddff65",
          500: "#d5ff3f",
          600: "#aacc32",
          700: "#809926",
          800: "#556619",
          900: "#2b330d",
        },
        dark: '#171717',
        darkgrey: '#2C2C2C',
      },
    },
  },
  plugins: [],
};

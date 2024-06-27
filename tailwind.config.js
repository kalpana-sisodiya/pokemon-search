/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: {
          DEFAULT: "#f0f0f0",
          light: "#fafafa",
        },

        button: {
          DEFAULT: "#194265",
        },
        customGreen: {
          DEFAULT: "#84dfca",
        },
        customYellow: {
          DEFAULT: "#f4c875",
        },
      },
    },
  },
  plugins: [],
};

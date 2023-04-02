const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Merriweather", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

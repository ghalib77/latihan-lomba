/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inconsolata: ["inconsolata", "monospace"],
        inter: ["inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

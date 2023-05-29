/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "principal-font": ["Lato", "sans-serif"],
      },
      colors: {
        "primary-light": "#54B6E9",
        "secondary-light": "#52B5E8",
        "button-light": "#38A0D8",
        "skyb-light": "#D5F3DD",
        "skybl-light": "#51B4E8",
        "text-light" : "#026EED",
        "primary-dark": "#53388F",
        "secondary-dark": "#201F3C",
        "button-dark": "#7D69F1",
      },
    },
  },
  plugins: [],
  darkMode: "class"
};

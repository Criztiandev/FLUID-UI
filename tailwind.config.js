/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "hsl(240 5.9% 10%);",
        secondary: "",
        ternary: "",
        accent: "rgb(248, 250, 252)",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-color-1": "#024550",
        "main-color-2": "#26d16d",
        "main-color-3": "#f4fafa",
      },
      backgroundImage: {
        dott: "url('src/assets/images/22.png')",
        AboutUs1: "url('src/assets/images/39.webp')",
        AboutUs2: "url('src/assets/images/37.webp')",
      },
    },
  },
  plugins: [],
};

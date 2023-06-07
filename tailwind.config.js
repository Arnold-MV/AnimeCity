/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "font-custom": ["Asap", "sans-serif"],
      },
      backgroundImage: {
        "custom-image": "url('src/assets/img/baner.jpg')",
      },
    },
  },
  plugins: [],
};

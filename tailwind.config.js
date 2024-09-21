/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Fira Sans", "sans-serif"],
        sec: ["Anek Devanagari", " sans-serif"],
      },
    },
  },
  plugins: [],
};

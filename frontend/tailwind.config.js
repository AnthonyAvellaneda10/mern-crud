/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeInOut: "fadeInOut 3s ease-in-out forwards",
      },
      keyframes: {
        fadeInOut: {
          "0%": { opacity: 0, transform: "translateY(-20px)" },
          "10%": { opacity: 1, transform: "translateY(0)" },
          "90%": { opacity: 1, transform: "translateY(0)" },
          "100%": { opacity: 0, transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
}
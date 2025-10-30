/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}", "./.storybook/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8" }
      }
    }
  },
  plugins: []
};

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#f8f9fa",
        accent: "#000000",
        text: "#111827",
        muted: "#4b5563",
      },
      fontFamily: {
        sans: ['"Times New Roman"', 'Times', 'serif'],
        heading: ['"Times New Roman"', 'Times', 'serif'],
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      }
    },
  },
  plugins: [],
}

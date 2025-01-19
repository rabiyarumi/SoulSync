/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFC0CB',
        accent: '#800020',
        neutral: '#FFF5E6',
        textPrimary: '#2E2E2E',
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#211F1B',
        secondary: '#37332B',
        font: '#D8B577',
        accent: {
          primary: '#D29C24',
          secondary: '#D07D2E',
        },
        'border-light': '#D29C24',
        'border-dark': '#211F1B',
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx, html}",
  ],
  theme: {
    extend: {
      colors:{
        'purple-custom':'#D0BCFF',
        'gray-custom':'#F6EDFF',
        'purple-hover':'#E0B6FF',
        'purple-words':'#2E004E',
        'purple-light':'#E2D3FA'
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#bcba9f',
        'content-heading': "#ea9f3e",
        'nav': '#af9671',
      },
      fontFamily: {
        'cinzel': [ 'Cinzel', "sans-serif" ],
        'inter': [ 'Inter', 'sans-serif' ],
        'raleway': [ 'Raleway', 'sans-serif' ]
      }
    },
  },
  plugins: [ require("daisyui") ],
}


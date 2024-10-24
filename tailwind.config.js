/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./images/camo.svg')",
        'squares-pattern': "url('./images/squares.jpg')",
        'beer-pattern': "url('./images/beer.jpg')",
        'left-pattern': "url('./images/gb-name.svg')",
        'profile-pic': "url('./images/gb-pic.jpg')",
        'fizzbox': "url('./images/fizzbox-layout.png')",
        'deskbox': "url('./images/deskbox-layout.png')",
        'hen': "url('./images/hen-layout.png')",
        'stag': "url('./images/stag-layout.png')",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}


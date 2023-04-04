/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'facultad1': "url('./assets/FONDO-HOME-SLIDER.jpg')",
        'facultad2': "url('./assets/FONDO-HOME-SLIDER3.jpg')",
        'facultad3': "url('./assets/FONDO-HOME-SLIDER5.jpg')"
      }
    },
  },
  plugins: [
    require ( 'tailwind-scrollbar' ) ( {  nocompatible : true  } )
  ],
}

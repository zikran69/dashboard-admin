/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/**/*.{html,js}', './index.html', './src/pages/dashboard/dashboard.html','./src/pages/kamar/kategori-kamar.html','./src/pages/kamar/kategori-kamar.html'],
  theme: {
    extend: {
      transitionProperty: {
        'display': 'display',
      },
      colors: {
        'primary-blue': '#252b3b',
        'secondary-blue': '#78aed8',
        'primary-gray': '#eff3f6',
        'secondary-gray': '#b4b6b9',
        'hover-blue': '#1E88E5'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

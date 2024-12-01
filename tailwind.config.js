/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'black-trans': 'rgba(0,0,0,0.8)',
        'verde-ods-oscuro': '#347571',
        'verde-ods-claro': '#78bc40',
      },
    },
  },
  plugins: [],
}
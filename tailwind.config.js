/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        // 'primary':'#EB193B',
        'primary':'#0984e3',
        'secondary':'##dfe6e9',
        'optional' : '#e84393'


      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
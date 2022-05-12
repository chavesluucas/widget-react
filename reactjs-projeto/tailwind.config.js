module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {

      //criando uma nova cor
      colors: {
        //cor vai se chamar brand
        brand: {
          //intensidade da cor
          300:'#996DFF',
          500:'#8257e6'
        }
      },
      borderRadius:{
        md: '4px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}

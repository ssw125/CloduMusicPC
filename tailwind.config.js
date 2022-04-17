module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      flexGrow: {
        '2': 2
      },
      keyframes:{
        show:{
          '0%':{
            transform:'translateY(-10px)',
            opacity:'0'
          },
          '100%':{
            transform:'translateY(0px)',
            opacity:'1'
          }
        }
      },
      animation: {
        show: 'show .5s ease-in-out',
      }
    },
  },
  plugins: [],
}

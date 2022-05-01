module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      'tablet':'840px',
      'xl':'1220px'
    },
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
        },
        float:{
          '0%':{
            transform:'translateY(0px)',
          },
          '100%':{
            transform:'translateY(-20px)',
          }
        }
      },
      animation: {
        show: 'show .5s ease-in-out',
        float:'float .5s forwards'
      }
    },
  },
  plugins: [],
}

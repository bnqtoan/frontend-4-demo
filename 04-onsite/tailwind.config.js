module.exports = {
  content: [
    "**/*.html"
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    container: {
        center: true
    },
    extend: {
      boxShadow:{
        "grey": "0px 30px 40px rgba(212, 217, 232, 0.2)"
      },     
      padding: {
          '15p' : '15px'
      },
      colors: {
        brand: {
          purple: '#8C30F5'
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animatecss')({
      classes: ['animate__animated', 'animate__fadeIn', 'animate__bounceIn', 'animate__lightSpeedOut'],
      settings: {
        animatedSpeed: 1000,
        heartBeatSpeed: 1000,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750,
        animationDelaySpeed: 1000
      },
      variants: ['responsive', 'hover', 'reduced-motion'],
    }),
  ],
}

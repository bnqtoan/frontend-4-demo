module.exports = {
  content: [
    "**/*.html"
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: "'Inter', sans-serif"
    },
    extend: {
      colors: {
        brand: {
          purple: '#8C30F5'
        },
        gray: {
          100: '#F4F5F7'
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
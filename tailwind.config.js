// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  extend: {
    animation: {
      'slide-in': 'slide-in 0.5s ease-out forwards',
    },
    keyframes: {
      'slide-in': {
        '0%': { opacity: 0, transform: 'translateX(20px)' },
        '100%': { opacity: 1, transform: 'translateX(0)' },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
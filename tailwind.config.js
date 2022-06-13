const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  tailwindcss: {},
  autoprefixer: {},
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#212121',
      white: colors.white,
      gray: {
        ...colors.gray,
        100: '#f0f2f5',
        200: '#DADFE7',
        300: '#a9b5c6',
        400: '#6c809d',
        500: '#647697',
        600: '#5a6C87',
        700: '#394556',
        800: '#313B49',
        900: '#181D25',
      },
      teal: {
        50: '#ECFDFA',
        100: '#DAFCF6',
        200: '#B4F8ED',
        300: '#8FF5E4',
        400: '#6AF1DB',
        500: '#47EED1',
        600: '#15E0BE',
        700: '#10A88F',
        800: '#0A705F',
        900: '#053830',
      },
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      orange: {
        ...colors.orange,
        300: '#ffce30',
        700: '#d49100',
      },
      extend: {
        transitionDuration: {
          0: '0ms',
          2000: '2000ms',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};

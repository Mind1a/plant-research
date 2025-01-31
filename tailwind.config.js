/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'max-1400': {
          max: '1400px',
        },
        'max-1350': {
          max: '1350px',
        },
        'max-1300': {
          max: '1300px',
        },
        'max-1250': {
          max: '1250px',
        },
        'max-1200': {
          max: '1200px',
        },
        'max-1150': {
          max: '1150px',
        },
        'max-1100': {
          max: '1100px',
        },
        'max-1050': {
          max: '1050px',
        },
        'max-1000': {
          max: '1000px',
        },
        'max-950': {
          max: '950px',
        },
        'max-900': {
          max: '900px',
        },
        'max-850': {
          max: '850px',
        },
        'max-800': {
          max: '800px',
        },
        'max-750': {
          max: '750px',
        },
        'max-700': {
          max: '700px',
        },
        'max-650': {
          max: '650px',
        },
        'max-600': {
          max: '600px',
        },
        'max-550': {
          max: '550px',
        },
        'max-500': {
          max: '500px',
        },
        'max-450': {
          max: '450px',
        },
        'max-400': {
          max: '400px',
        },
        'max-350': {
          max: '350px',
        },
      },
      fontFamily: {
        natoSans: ['Nato-Sans', 'sans-serif'],
      },
      fontSize: {
        'title-sm': '32px',
        subtitle: '22px',
        body: '16px',
        'body-sm': '12px',
        'body-md': '14px',
        small: '12px',
        button: '16px',
      },
      colors: {
        primary: '#13C296',
        lightGreen: '#E8FBF6',
        charcoalGrey: '#36454F',
        strokeGrey: '#DFE4EA',
        lightBlack: '#637381',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.font-case': {
          '-moz-font-feature-settings': '"case"',
          '-webkit-font-feature-settings': '"case"',
          'font-feature-settings': '"case"',
        },
      });
    },
  ],
};

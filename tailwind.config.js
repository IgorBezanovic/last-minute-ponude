/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    colors: {
      mint: '#92C7CF',
      lightMint: '#AAD7D9',
      lightCream: '#FBF9F1',
      lightGray: '#E5E1DA',
      primary: '#5C62F9',
      mainGreen: '#35C89F',
      mainYellow: '#FFCC00',
      mainRed: '#F97F88',
      red: '#F97F88',
      white: '#FFFFFF',
      black: '#01082D',
      gray80: '#343957',
      gray60: '#676B81',
      gray40: '#999CAB',
      gray20: '#CCCED5',
      gray10: '#E6E6EA',
      gray5: '#F2F3F5',
      cream: '#F9F6F3',
      tertiaryYellow: '#FFEDA6',
      disabled: '#E0E2EC',
      disabledDark: '#A0A3AF',
      yellow: '#FFD940',
      lightPurple: '#F7F7FF'
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif']
    },
    extend: {
      borderRadius: {
        '4xl': '2rem'
      },
      gridTemplateColumns: {
        landing: 'repeat(2, minmax(0, 832px))'
      }
    }
  },
  plugins: []
};

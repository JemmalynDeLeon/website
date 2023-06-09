/** @type {import('tailwindcss').Config} */
module.exports = {
  // mode: "jit",
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      
      colors: {
        'blue': '#1fb6ff',
        'red':'#7f1d1d',
        'white': '#FFFFFF',
        'purple': '#7e5bef',
        'black' : '#020808',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'blue': '#498EFF',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'grey-dark': '#273444',
        'gray-dark': '#111',
        'grey': '#555',
        'gray': '#666',
        'gray-light': '#d3dce6',
        'adamlight' : '#888',
        'lightgrey': '#E0E3E2',
        'dirtywhite':'#eee',
        'ytred':'#f43f5e',
        'twitterblue':'#337ab7',
        'linkedinblue':'#7dd3fc',
        'bgrey':'#94a3b8',
        
      },

      text:{
        'white': '#CDD0D5F',
      },

      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      extend: {
        spacing: {
          '8xl': '96rem',
          '9xl': '128rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
      },
      spacing: {
        '1': '8px',
        '2': '12px',
        '3': '16px',
        '4': '24px',
        '5': '32px',
        '6': '48px',
      },
      fontSize: {
        sm: '15px',
        ssm: '13.3333px',
        sssm: '12px',
        ssssm: '10.6667px',
        m: '32px'
      },

      
      // colors: {
      //   hehe: '#18D039',
      //   'great-blue': {
      //     DEFAULT: '#2A669F',
      //     50: '#E4F7F8',
      //     100: '#CCEEF2',
      //     200: '#9CD7E5',
      //     300: '#6CB9D8',
      //     400: '#3B94CB',
      //     500: '#2A669F',
      //     600: '#234B83',
      //     700: '#1B3366',
      //     800: '#14204A',
      //     900: '#0C102E',
      //     950: '#080A20',
      //   },
      // }
      padding: {
        63: '15.5rem',
      },
      fontFamily: {
        j: ['Cinzel', 'sans-serif'],
        i: ['Inter', 'Noto Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
}

const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    // "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brandblue: colors.blue[500],
        brandred: colors.red[500],
        'gray-10': '#F7F7F7',
        'black-light': '#6C6D6D',
        'black-lighter': '#AFAFAF',
        'pink-primary': '#DB284E',
        'gray-light': '#EAEAEA',
        'yellow-counter': '#FDE13B',
        'yellow-discount': '#FAF589',
        'orange-counter': '#FFB003',
        'gray-20': '#323942',
        'gray-30': '#DADADA',
        'teal-lighter': '#E8F3F3',
        'venetian-red': '#FF4D4F',
        'orchid-pink': '#F3BDCA',
        isabelline: '#FBE9ED',
        platinum: '#DFE3E8',
        'teal-primary': '#49A09D',
        aurometalsaurus: '#637381',
        seashell: '#FFF1F0',
        'ghost-white': '#F9FAFB',
        'black-olive': '#3F3F3F',
        'flash-white': '#F0F3F7',
        'teal-medium': '#80BDBA',
        'cosmic-latte': '#FFFBE6',
        bubbles: '#F5FCFF',
        'ghost-white2': '#F7F8FE',
        'american-silver': '#D0D0D0',
        'success-dark': '#52C41A',
        'info-light': '#E6F7FF',
        'dodger-blue': '#1890FF',
        'quick-silver': '#A1A1A1',
        shades: '#919eab',
        'harvest-gold': '#D48806',
        honeydew: '#F6FFED',
        'alice-blue': '#F0FAFF',
        gray: colors.zinc,
        'gray-1000': 'rgb(17,17,19)',
        'gray-1100': 'rgb(10,10,11)',
        ctcd: {
          pink: '#FF0080',
          blue: '#0070F3',
          cyan: '#50E3C2',
          orange: '#F5A623',
          violet: '#7928CA',
        },
      },
      width: {
        9.25: '9.25rem',
        440: '27.5rem',
        580: '36rem',
        761: '47.563rem',
        426: '26.625rem',
        206: '12.875rem',
      },
      letterSpacing: {
        wider: '0.04em',
      },
      fontSize: {
        10: '0.625rem',
        22: '1.375rem',
        26: '1.625rem',
      },
      backgroundImage: ({ theme }) => ({
        uncheckbox: "url('/images/ico-uncheck.svg')",
        checkbox: "url('/images/ico-check.svg')",
        'vc-border-gradient': `radial-gradient(at left top, ${theme(
          'colors.gray.500'
        )}, 50px, ${theme('colors.gray.800')} 50%)`,
      }),
      keyframes: ({ theme }) => ({
        rerender: {
          '0%': {
            ['border-color']: theme('colors.ctcd.pink'),
          },
          '40%': {
            ['border-color']: theme('colors.ctcd.pink'),
          },
        },
        highlight: {
          '0%': {
            background: theme('colors.ctcd.pink'),
            color: theme('colors.white'),
          },
          '40%': {
            background: theme('colors.ctcd.pink'),
            color: theme('colors.white'),
          },
        },
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
        translateXReset: {
          '100%': {
            transform: 'translateX(0)',
          },
        },
        fadeToTransparent: {
          '0%': {
            opacity: 1,
          },
          '40%': {
            opacity: 1,
          },
          '100%': {
            opacity: 0,
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};

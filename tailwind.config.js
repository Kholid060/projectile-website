module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        primary: '#2563EB',
        gray: {
          1000: '#0e131f',
        },
      },
      borderColor: {
        DEFAULT: 'rgba(255, 255, 255, 0.05)',
      },
      container: {
        screens: {
          '2xl': '1280px',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

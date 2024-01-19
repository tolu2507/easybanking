/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#161622',
        textwhite: '#FFFFFF',
        textgrey: '#A2A2A7',
        blueprimary: '#0066FF',
        linestroke: '#232533',
        iconbackground: '#1E1E2D',
        tabicon: '#8B8B94',
        purpleicon: '#4B5B98',
        danger: '#E16364',
        lineargrad: '#0066FF, #0018F1',
        indicator: '#41455E',
        description: '#7E848D',
      },
    },
  },
  plugins: [],
};

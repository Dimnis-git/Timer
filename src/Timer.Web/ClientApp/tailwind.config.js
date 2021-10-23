module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}', 
    './public/index.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: { // add bradesco fonts
        sansThin: ['BradescoSans-Thin'],
        sansLight: ['BradescoSans-Light'],
        sansRegular: ['BradescoSans-Regular'],
        sansMedium:['BradescoSans-Medium'],
        sansSemiBold: ['BradescoSans-SemiBold'],
        sansBold: ['BradescoSans-Bold']
      },
      colors: { // color pallete generated from (https://mycolor.space/)
        'bra-g-pri': '#CE0D32', // base color
        'bra-g-sec': '#B81863',
        'bra-g-ter': '#8D3881',
        'bra-g-qua': '#5A4885',
        'bra-g-qui': '#334C74',
        'bra-t-pri': '#69B4DC',
        'bra-t-sec': '#CAF7FF',
        'bra-t-tec': '#507C96'
      }
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [],
}

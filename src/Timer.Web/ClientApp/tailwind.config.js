module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}', 
    './public/index.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sansThin: ['BradescoSans-Thin'],
        sansLight: ['BradescoSans-Light'],
        sansRegular: ['BradescoSans-Regular'],
        sansMedium:['BradescoSans-Medium'],
        sansSemiBold: ['BradescoSans-SemiBold'],
        sansBold: ['BradescoSans-Bold']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

export const theme = {
  flexboxgrid: {
    gridSize: 12, // columns
    gutterWidth: 2, // rem
    outerMargin: 2, // rem
    mediaQuery: 'only screen',
    container: {
      sm: 72, // rem
      md: 96, // rem
      lg: 122, // rem
    },
    breakpoints: {
      xs: 0, // em
      sm: 45, // em
      md: 62, // em
      lg: 72, // em
    },
  },
  colors: {
    whiteColor: '#fff',
    blackColor: '#000',
    powderWhite: '#FFFDF9',
    lightGrey: '#e1e1e1',
    orangeColor: '#bd512f',
  },

  fonts: 'Signika',
  fontWeight: {
    light: 300,
    normal: 400,
    semiBold: 600,
    bold: 700,
  },
  fontSizes: {
    regular: '1.8em',
    medium: '2rem',
    large: '3rem',
  },
  buttonReset: {
    textShadow: 'none',
    boxShadow: 'none',
    cursor: 'pointer',
    border: 'none',
  },
};

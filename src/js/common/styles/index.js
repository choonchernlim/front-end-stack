import { cyan800, blue700, grey700 } from 'material-ui/styles/colors';

const headerTag = {
  fontWeight: 400,
  color: cyan800,
  paddingTop: '0.5rem'
};

export default {
  // `muiTheme` - Material UI theme: http://www.material-ui.com/#/customization/themes
  muiTheme: {
    palette: {
      primary1Color: cyan800
    }
  },
  // `global` - Global app styles
  global: {
    body: {
      fontFamily: "'Roboto', sans-serif",
      margin: 0,
      color: grey700
    },
    a: {
      color: blue700
    },
    h1: headerTag,
    h2: headerTag,
    h3: headerTag
  }
};

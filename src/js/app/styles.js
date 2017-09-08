// @flow
import { blue700, cyan800, grey700 } from 'material-ui/styles/colors';

export const mediaQuery = {
  small: 'only screen and (max-width: 640px)',
  medium: 'only screen and (min-width: 641px) and (max-width: 1024px)',
  large: 'only screen and (min-width: 1025px)',
};

// Material UI theme override: http://www.material-ui.com/#/customization/themes
const muiTheme = () => ({
  palette: {
    primary1Color: cyan800,
  },
});

const baseStyle = () => {
  const headerTag = {
    fontWeight: 400,
    color: cyan800,
    paddingTop: '0.5rem',
  };

  return {
    body: {
      fontFamily: "'Roboto', sans-serif",
      margin: 0,
      color: grey700,
    },
    a: {
      color: blue700,
    },
    h1: headerTag,
    h2: headerTag,
    h3: headerTag,
  };
};

const layoutStyle = () => {
  const appBarHeight = '64px';
  const leftNavWidth = '250px';

  return {
    appBar: {
      base: {
        top: 0,
        position: 'fixed',
      },
      title: {
        cursor: 'pointer',
      },
      iconRight: {
        margin: 0,
        padding: 0,
        alignSelf: 'center',
        width: '40px',
        height: '40px',
      },
    },
    leftNav: {
      top: appBarHeight,
      width: leftNavWidth,
    },
    container: {
      margin: `${appBarHeight} 3rem 5rem calc(${leftNavWidth} + 3rem)`,

      [`@media ${mediaQuery.small}`]: {
        margin: `${appBarHeight} 2rem 5rem`,
      },

      [`@media ${mediaQuery.medium}`]: {
        margin: `${appBarHeight} 2rem 5rem`,
      },
    },
  };
};

const home = {
  paper: {
    padding: 12,
    color: grey700,
  },
  textField: {
    verticalAlign: 'top',
    width: 200,
    margin: 12,
  },
  button: {
    width: 200,
    margin: 12,
  },
};

const styles = {
  muiTheme: muiTheme(),
  base: baseStyle(),
  layout: layoutStyle(),
  home,
};

export default styles;

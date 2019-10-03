// @flow
import teal from '@material-ui/core/colors/teal';
import grey from '@material-ui/core/colors/grey';
import blue from '@material-ui/core/colors/blue';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const defaultDisplay = {
  color: grey[700],
};

/**
 * Material UI theme override
 */
const muiTheme = createMuiTheme({
  palette: {
    primary: teal,
  },
  typography: {
    h1: defaultDisplay,
    h2: defaultDisplay,
    h3: defaultDisplay,
    h4: defaultDisplay,
    body1: defaultDisplay,
    body2: defaultDisplay,
    subtitle1: defaultDisplay,
  },
  // custom attribute
  link: {
    color: blue[500],
    textDecoration: 'underline',
  },
});

export default muiTheme;

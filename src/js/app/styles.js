// @flow
import { teal, grey } from 'material-ui/colors';
import { createMuiTheme } from 'material-ui/styles';

const drawerWidth = 240;

/**
 * Material UI theme override
 */
const muiTheme = (() => {
  const defaultDisplay = {
    marginTop: '0.75em',
    marginBottom: '0.75em',
    color: grey[700],
  };

  const defaultBody = {
    ...defaultDisplay,
    fontSize: '1em',
  };

  return createMuiTheme({
    palette: {
      primary: teal,
    },
    typography: {
      display3: defaultDisplay,
      display2: defaultDisplay,
      display1: defaultDisplay,
      body2: defaultBody,
      body1: defaultBody,
      subheading: {
        color: grey[700],
      },
    },
  });
})();

const layout = () => ({
  title: {
    cursor: 'pointer',
    flex: 1,
  },
  menuButton: {
    display: 'block',
    marginLeft: -12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  bodyShift: {
    marginLeft: drawerWidth,
  },
  content: {
    margin: '0 3rem 5rem 3rem',
  },
});

const menuDrawer = (theme: Object) => ({
  root: {
    width: drawerWidth,
  },
  chevron: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: theme.spacing.unit,
    cursor: 'pointer',
  },
});

const home = (theme: Object) => ({
  paper: {
    padding: theme.spacing.unit * 3,
    color: grey[700],
  },
  textField: {
    width: 200,
    margin: theme.spacing.unit,
  },
  button: {
    width: 200,
    margin: theme.spacing.unit,
  },
});

const styles = {
  muiTheme,
  layout,
  menuDrawer,
  home,
};

export default styles;

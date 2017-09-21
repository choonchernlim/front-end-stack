// @flow
import { teal, grey } from 'material-ui/colors';
import { createMuiTheme } from 'material-ui/styles';

const drawerWidth = 240;

/**
 * Material UI theme override
 */
const muiTheme = createMuiTheme({
  palette: {
    primary: teal,
  },
  typography: {
    display3: {
      marginTop: '0.75em',
      color: grey[700],
    },
    display2: {
      marginTop: '0.75em',
      color: grey[700],
    },
    display1: {
      marginTop: '0.75em',
      color: grey[700],
    },
    body2: {
      color: grey[700],
      fontSize: '1em',
    },
    body1: {
      color: grey[700],
      fontSize: '1em',
    },
    subheading: {
      color: grey[700],
    },
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

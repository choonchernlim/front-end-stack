// @flow
import React, { type Element } from 'react';
import classNames from 'classnames';
import { MuiThemeProvider, withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Avatar from 'material-ui/Avatar';
import MenuNavigation from './MenuNavigation';
import userImage from '../../../img/user.jpg';
import styles from '../styles';

// TODO LIMC possibly drop Radium!

type Props = {
  children: Element<*>,
  router: Object,
  classes: Object,
};

type State = {
  open: boolean,
  mql: Function,
};

class Layout extends React.Component<Props, State> {
  state = {
    open: true,
    mql: window.matchMedia(styles.muiTheme.breakpoints.up('md').replace('@media ', '')),
  };

  // noinspection JSUnusedGlobalSymbols
  componentWillMount = () => {
    this.state.mql.addListener(this.handleMediaQueryChanged);
    this.handleMediaQueryChanged();
  };

  // noinspection JSUnusedGlobalSymbols
  componentWillUnmount = () => this.state.mql.removeListener(this.handleMediaQueryChanged);

  props: Props;

  handleMediaQueryChanged = () => this.setState({ open: this.state.mql.matches });

  handleToggle = () => this.setState({ open: !this.state.open });

  render() {
    const { router, classes, children } = this.props;

    return (
      <MuiThemeProvider theme={styles.muiTheme}>
        <div>
          <div className={classNames(this.state.open && classes.bodyShift)}>
            <AppBar position="static">
              <Toolbar>
                <IconButton
                  className={classes.menuButton}
                  color="contrast"
                  onClick={this.handleToggle}
                  aria-label="Menu"
                >
                  <MenuIcon />
                </IconButton>

                <Typography
                  type="title"
                  color="inherit"
                  className={classes.title}
                  onClick={() => router.push('/')}
                  noWrap
                >
                  {process.env.APP_NAME}
                </Typography>

                <Avatar src={userImage} />
              </Toolbar>
            </AppBar>

            <br />

            <div className={classes.content}>{children}</div>
          </div>

          <MenuNavigation open={this.state.open} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles.layout)(Layout);

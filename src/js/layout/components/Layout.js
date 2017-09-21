// @flow
import React, { type Element } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { MuiThemeProvider, withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Avatar from 'material-ui/Avatar';
import MenuDrawer from './MenuDrawer';
import userImage from '../../../img/user.jpg';
import styles from '../styles';
import env from '../../app/utils/env';
import { menuLeftOpened, toggleMenu } from '../actions';
import stateSelector from '../../app/selectors/state-selector';

type Props = {
  children: Element<*>,
  router: Object,
  classes: Object,
  onMenuLeftOpened: Function,
  onToggleMenu: Function,
  isMenuCurrentlyOpened: boolean,
};

type State = {
  mql: Function,
};

class Layout extends React.Component<Props, State> {
  state = {
    mql: window.matchMedia(styles.muiTheme.breakpoints.up('md').replace('@media ', '')),
  };

  componentWillMount() {
    this.state.mql.addListener(this.handleMediaQueryChanged);
    this.handleMediaQueryChanged();
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.handleMediaQueryChanged);
  }

  props: Props;

  handleMediaQueryChanged = () => {
    const openMenu = this.state.mql.matches;
    this.props.onMenuLeftOpened(openMenu);
  };

  render() {
    const { isMenuCurrentlyOpened, onToggleMenu, router, classes, children } = this.props;

    return (
      <MuiThemeProvider theme={styles.muiTheme}>
        <div>
          <div className={classNames(isMenuCurrentlyOpened && classes.bodyShift)}>
            <AppBar position="static">
              <Toolbar>
                <IconButton
                  className={classNames(classes.menuButton, isMenuCurrentlyOpened && classes.hide)}
                  color="contrast"
                  onClick={() => onToggleMenu()}
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
                  {`${env.getAppName()} ( v${env.getVersion()} )`}
                </Typography>

                <Avatar src={userImage} />
              </Toolbar>
            </AppBar>

            <br />

            <div className={classes.content}>{children}</div>
          </div>

          <MenuDrawer />
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
  isMenuCurrentlyOpened: stateSelector.layout.isMenuCurrentlyOpened(state),
});

const LayoutContainer = connect(mapStateToProps,
  { onMenuLeftOpened: menuLeftOpened, onToggleMenu: toggleMenu })(
  Layout);

export default withStyles(styles.layout)(LayoutContainer);

// @flow
import { Style, StyleRoot } from 'radium';
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import HomeIcon from 'material-ui/svg-icons/action/home';
import AssignmentIcon from 'material-ui/svg-icons/action/assignment';
import BugReportIcon from 'material-ui/svg-icons/action/bug-report';
import SchoolIcon from 'material-ui/svg-icons/social/school';
import DevicesIcon from 'material-ui/svg-icons/device/devices';
import MoodIcon from 'material-ui/svg-icons/social/mood';
import userImage from '../../../img/user.jpg';
import styles, { mediaQuery } from '../styles';

type Props = {
  children: React.Element<*>,
  router: Object
};

export default class Layout extends React.Component {
  constructor(props: Props) {
    super(props);

    this.state = {
      open: true,
      mql: window.matchMedia(mediaQuery.large)
    };
  }

  state: {
    open: boolean,
    mql: Function
  };

  componentWillMount = () => {
    this.state.mql.addListener(this.handleMediaQueryChanged);
    this.handleMediaQueryChanged();
  };

  componentWillUnmount = () => this.state.mql.removeListener(this.handleMediaQueryChanged);

  handleMediaQueryChanged = () => this.setState({ open: this.state.mql.matches });

  handleToggle = () => this.setState({ open: !this.state.open });

  render() {
    const { router } = this.props;

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(styles.muiTheme)}>
        <StyleRoot>
          <Style rules={styles.base} />

          <AppBar
            title={process.env.APP_NAME}
            style={styles.layout.appBar.base}
            titleStyle={styles.layout.appBar.title}
            onTitleTouchTap={() => router.push('/')}
            onLeftIconButtonTouchTap={this.handleToggle}
            iconStyleRight={styles.layout.appBar.iconRight}
            iconElementRight={<Avatar src={userImage} />}
          />

          <Drawer open={this.state.open} containerStyle={styles.layout.leftNav}>
            <MenuItem
              onTouchTap={() => router.push('/')}
              leftIcon={<HomeIcon />}
            >Home</MenuItem>

            <MenuItem
              onTouchTap={() => router.push('look-and-feel')}
              leftIcon={<DevicesIcon />}
            >Look and Feel</MenuItem>

            <MenuItem
              onTouchTap={() => router.push('chuck-norris')}
              leftIcon={<MoodIcon />}
            >Chuck Norris</MenuItem>

            <MenuItem
              onTouchTap={() => router.push('todo-manager')}
              leftIcon={<AssignmentIcon />}
            >Todo Manager</MenuItem>

            <Divider />

            <Subheader>External Links</Subheader>

            <MenuItem
              href="https://github.com/choonchernlim/front-end-stack"
              leftIcon={<BugReportIcon />}
            >GitHub
            </MenuItem>

            <MenuItem
              href="https://myshittycode.com/"
              leftIcon={<SchoolIcon />}
            >My Shitty Code
            </MenuItem>
          </Drawer>

          <br />
          <div style={styles.layout.container}>{this.props.children}</div>
        </StyleRoot>
      </MuiThemeProvider>
    );
  }
}

// @flow
// TODO LIMC need better flow typed. PropTypes has to be used due to `children`
import { Style, StyleRoot } from 'radium';
import { Grid, Cell } from 'radium-grid';
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
import baseStyle from '../../common/styles';
import style from '../styles';

// combine `large` and `xlarge` breakpoints
const largeGrid: string = [
  Grid.defaultProps.breakpoints.large,
  Grid.defaultProps.breakpoints.xlarge
].map(breakpoint => breakpoint.replace(/@media\s+/, '')).join();

const mql = window.matchMedia(largeGrid);

export default class Layout extends React.Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired
  };

  // to get router to work
  // https://github.com/davezuko/react-redux-starter-kit/issues/695
  static contextTypes = {
    router: React.PropTypes.object
  };

  state = {
    open: true,
    mql
  };

  componentWillMount = () => {
    this.state.mql.addListener(this.handleMediaQueryChanged);
    this.handleMediaQueryChanged();
  };

  componentWillUnmount = () => this.state.mql.removeListener(this.handleMediaQueryChanged);

  handleMediaQueryChanged = () => this.setState({ open: this.state.mql.matches });

  handleToggle = () => this.setState({ open: !this.state.open });

  render() {
    const { router } = this.context;

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(baseStyle.muiTheme)}>
        <StyleRoot>
          <Style rules={baseStyle.global} />

          <AppBar
            title={process.env.APP_NAME}
            style={style.appBar.base}
            titleStyle={style.appBar.title}
            onTitleTouchTap={() => router.push('/')}
            onLeftIconButtonTouchTap={this.handleToggle}
            iconStyleRight={style.appBar.iconRight}
            iconElementRight={<Avatar src={userImage} />}
          />

          <Drawer open={this.state.open} containerStyle={style.leftNav}>

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

          <Grid>
            <Cell width="1" style={style.container}>{this.props.children}</Cell>
          </Grid>
        </StyleRoot>
      </MuiThemeProvider>
    );
  }
}

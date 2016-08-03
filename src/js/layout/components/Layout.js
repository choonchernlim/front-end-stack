import { Style, StyleRoot } from 'radium';
import { Grid, Cell } from 'radium-grid';
import React from 'react';
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
import { name } from '../../../../package.json';

// combine `large` and `xlarge` breakpoints
const largeGrid = [Grid.defaultProps.breakpoints.large, Grid.defaultProps.breakpoints.xlarge]
  .map(breakpoint => breakpoint.replace(/@media\s+/, ''))
  .join();

const mql = window.matchMedia(largeGrid);

export default class extends React.Component {
  static childContextTypes = {
    muiTheme: React.PropTypes.object
  };

  static propTypes = {
    children: React.PropTypes.element.isRequired
  };

  // to get router to work
  // https://github.com/davezuko/react-redux-starter-kit/issues/695
  static contextTypes = {
    router: React.PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = { open: true, mql };
  }

  getChildContext = () => ({ muiTheme: getMuiTheme(baseStyle.muiTheme) });

  componentWillMount = () => {
    this.state.mql.addListener(this.handleMediaQueryChanged);
    this.handleMediaQueryChanged();
  };

  componentWillUnmount = () => this.state.mql.removeListener(this.handleMediaQueryChanged);

  handleMediaQueryChanged = () => this.setState({ open: this.state.mql.matches });

  handleToggle = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <StyleRoot>
        <Style rules={baseStyle.global} />

        <AppBar
          title={name}
          style={style.appBar.base}
          titleStyle={style.appBar.title}
          onTitleTouchTap={() => this.context.router.push('/')}
          onLeftIconButtonTouchTap={this.handleToggle}
          iconStyleRight={style.appBar.iconRight}
          iconElementRight={<Avatar src={userImage} />}
        />

        <Drawer open={this.state.open} containerStyle={style.leftNav}>

          <MenuItem
            onTouchTap={() => this.context.router.push('/')}
            leftIcon={<HomeIcon />}
          >Home</MenuItem>

          <MenuItem
            onTouchTap={() => this.context.router.push('look-and-feel')}
            leftIcon={<DevicesIcon />}
          >Look and Feel</MenuItem>

          <MenuItem
            onTouchTap={() => this.context.router.push('chuck-norris')}
            leftIcon={<MoodIcon />}
          >Chuck Norris</MenuItem>

          <MenuItem
            onTouchTap={() => this.context.router.push('todo-manager')}
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
    );
  }
}

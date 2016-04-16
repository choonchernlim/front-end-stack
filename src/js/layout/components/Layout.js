import { Style, StyleRoot } from 'radium';
import { Grid, Cell } from 'radium-grid';
import { browserHistory } from 'react-router';
import React from 'react';
import baseStyle from '../../common/styles';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Avatar from 'material-ui/lib/avatar';
import Divider from 'material-ui/lib/divider';
import Subheader from 'material-ui/lib/Subheader';
import HomeIcon from 'material-ui/lib/svg-icons/action/home';
import AssignmentIcon from 'material-ui/lib/svg-icons/action/assignment';
import BugReportIcon from 'material-ui/lib/svg-icons/action/bug-report';
import SchoolIcon from 'material-ui/lib/svg-icons/social/school';
import DevicesIcon from 'material-ui/lib/svg-icons/device/devices';
import MoodIcon from 'material-ui/lib/svg-icons/social/mood';
import userImage from '../../../img/user.jpg';
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
          onTitleTouchTap={() => browserHistory.push('/')}
          onLeftIconButtonTouchTap={this.handleToggle}
          iconStyleRight={style.appBar.iconRight}
          iconElementRight={<Avatar src={userImage} />}
        />

        <LeftNav open={this.state.open} containerStyle={style.leftNav}>

          <MenuItem
            onTouchTap={() => browserHistory.push('/')}
            leftIcon={<HomeIcon />}
          >Home</MenuItem>

          <MenuItem
            onTouchTap={() => browserHistory.push('look-and-feel')}
            leftIcon={<DevicesIcon />}
          >Look and Feel</MenuItem>

          <MenuItem
            onTouchTap={() => browserHistory.push('chuck-norris')}
            leftIcon={<MoodIcon />}
          >Chuck Norris</MenuItem>

          <MenuItem
            onTouchTap={() => browserHistory.push('todo-manager')}
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

        </LeftNav>

        <Grid>
          <Cell width="1" style={style.container}>{this.props.children}</Cell>
        </Grid>
      </StyleRoot>
    );
  }
}

// @flow
import { Style, StyleRoot } from 'radium';
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import MenuNavigation from './MenuNavigation';
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
      mql: window.matchMedia(mediaQuery.large),
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

          <MenuNavigation open={this.state.open} />

          <br />
          <div style={styles.layout.container}>{this.props.children}</div>
        </StyleRoot>
      </MuiThemeProvider>
    );
  }
}

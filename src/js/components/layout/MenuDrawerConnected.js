// @flow
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import { layout } from '../../app/actions/index';
import { stateSelector } from '../../app/states';
import MenuDrawer from './MenuDrawer';
import styles from './styles';

const mapStateToProps = state => ({
  shouldMenuLeftOpened: stateSelector.layout.shouldMenuLeftOpened(state),
  isMenuCurrentlyOpened: stateSelector.layout.isMenuCurrentlyOpened(state),
});

const mapDispatchToProps = {
  onToggleMenu: layout.toggleMenu,
};

const MenuDrawerConnected = connect(mapStateToProps, mapDispatchToProps)(MenuDrawer);

export default withRouter(withStyles(styles.menuDrawer)(MenuDrawerConnected));

// @flow
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import actions from '../../app/actions';
import states from '../../app/states';
import MenuDrawer from './MenuDrawer';
import styles from './styles';

const mapStateToProps = state => ({
  shouldMenuLeftOpened: states.layout.shouldMenuLeftOpened(state),
  isMenuCurrentlyOpened: states.layout.isMenuCurrentlyOpened(state),
});

const mapDispatchToProps = {
  onToggleMenu: actions.toggleMenu,
};

const MenuDrawerConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuDrawer);

export default withRouter(withStyles(styles.menuDrawer)(MenuDrawerConnected));

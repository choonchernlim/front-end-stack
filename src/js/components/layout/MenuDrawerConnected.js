// @flow
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import actions from '../../app/actions';
import states from '../../app/states';
import MenuDrawer from './MenuDrawer';

const mapStateToProps = (state) => ({
  shouldMenuLeftOpened: states.layout.shouldMenuLeftOpened(state),
  isMenuCurrentlyOpened: states.layout.isMenuCurrentlyOpened(state),
});

const mapDispatchToProps = (dispatch) => ({
  onToggleMenu: () => dispatch(actions.toggleMenu()),
  onRouteChange: (location: string) => dispatch(push(location)),
});

const MenuDrawerConnected = connect(mapStateToProps, mapDispatchToProps)(MenuDrawer);

export default MenuDrawerConnected;

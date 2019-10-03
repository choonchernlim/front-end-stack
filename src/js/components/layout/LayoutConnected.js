// @flow
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import actions from '../../app/actions';
import states from '../../app/states';
import Layout from './Layout';

const mapStateToProps = state => ({
  shouldMenuLeftOpened: states.layout.shouldMenuLeftOpened(state),
});

const mapDispatchToProps = dispatch => ({
  onMenuLeftOpened: (open: boolean) => dispatch(actions.menuLeftOpened(open)),
  onToggleMenu: () => dispatch(actions.toggleMenu()),
  onRouteChange: (location: string) => dispatch(push(location)),
});

const LayoutConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Layout);

export default LayoutConnected;

// @flow
import { connect } from 'react-redux';
import withRouter from 'react-router-dom/withRouter';
import withStyles from '@material-ui/core/styles/withStyles';
import actions from '../../app/actions';
import stateSelector from '../../app/states';
import Layout from './Layout';
import styles from './styles';

const mapStateToProps = state => ({
  shouldMenuLeftOpened: stateSelector.layout.shouldMenuLeftOpened(state),
});

const mapDispatchToProps = {
  onMenuLeftOpened: actions.menuLeftOpened,
  onToggleMenu: actions.toggleMenu,
};

const LayoutConnected = connect(mapStateToProps, mapDispatchToProps)(Layout);

export default withRouter(withStyles(styles.layout)(LayoutConnected));

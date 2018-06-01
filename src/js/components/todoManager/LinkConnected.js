// @flow
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import { todoManager } from '../../app/actions';
import Link, { styles } from './Link';

const mapStateToProps = (state, ownProps) => ({
  filter: ownProps.filter,
  active: ownProps.filter === state.todoManager.get('visibilityFilter'),
});

const mapDispatchToProps = {
  onSetVisibilityFilter: todoManager.setVisibilityFilter,
};

const LinkConnected = connect(mapStateToProps, mapDispatchToProps)(Link);

export default withStyles(styles)(LinkConnected);

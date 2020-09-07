// @flow
import { connect } from 'react-redux';
import actions from '../../app/actions';
import AddTodo from './AddTodo';

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  onAddTodo: actions.addTodo,
};

const AddTodoConnected = connect(mapStateToProps, mapDispatchToProps)(AddTodo);

export default AddTodoConnected;

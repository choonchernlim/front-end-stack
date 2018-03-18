// @flow
import { connect } from 'react-redux';
import { todoManager } from '../../app/actions';
import AddTodo from './AddTodo';

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  onAddTodo: todoManager.addTodo,
};

const AddTodoConnected = connect(mapStateToProps, mapDispatchToProps)(AddTodo);

export default AddTodoConnected;

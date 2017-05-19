// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { addTodo } from '../actions';

type Props = {
  addTodo: Function
};

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '', error: '' };
  }

  state: {
    value: string,
    error: string
  };

  // on render, set focus on text field
  componentDidMount(): void {
    this.handleInputFocus();
  }

  props: Props;
  todoTextField: TextField;

  // triggers focus on text field
  handleInputFocus = (): void => {
    this.todoTextField.focus();
  };

  // on input change, update state
  handleInputChange = (event: SyntheticInputEvent): void => {
    this.setState({ value: event.target.value });
  };

  // on enter pressed on input field, trigger button click
  handleInputEnter = (event: SyntheticKeyboardEvent): void => {
    if (event.keyCode === 13) {
      this.handleButtonClick();
    }
  };

  // on button click, add new value, reset state value and set focus on text field
  handleButtonClick = (): void => {
    if (this.state.value) {
      this.props.addTodo(this.state.value);
      this.setState({ value: '', error: '' }, () => this.handleInputFocus());
    }
    else {
      this.setState({ error: 'Field is required' }, () => this.handleInputFocus());
    }
  };

  render() {
    return (
      <div>
        <TextField
          ref={ref => (this.todoTextField = ref)}
          hintText="Enter Todo..."
          errorText={this.state.error}
          value={this.state.value}
          onChange={this.handleInputChange}
          onKeyDown={this.handleInputEnter}
        />

        <br />

        <RaisedButton
          primary
          label="Add Todo"
          onClick={this.handleButtonClick}
        />
      </div>
    );
  }
}

const AddTodoContainer = connect(null, { addTodo })(AddTodo);

export default AddTodoContainer;

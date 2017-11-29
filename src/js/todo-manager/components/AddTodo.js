// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import { addTodo } from '../actions';

type Props = {
  addTodo: Function
};

type State = {
  value: string,
  error: boolean
};

class AddTodo extends Component<Props, State> {
  state = {
    value: '',
    error: false,
  };

  // on render, set focus on text field
  componentDidMount(): void {
    this.handleInputFocus();
  }

  props: Props;
  todoTextField: Function;

  // triggers focus on text field
  handleInputFocus = (): void => {
    this.todoTextField.focus();
  };

  // on input change, update state
  handleInputChange = (event: SyntheticInputEvent<*>): void => {
    this.setState({ value: event.target.value });
  };

  // on enter pressed on input field, trigger button click
  handleInputEnter = (event: SyntheticKeyboardEvent<*>): void => {
    if (event.keyCode === 13) {
      this.handleButtonClick();
    }
  };

  // on button click, add new value, reset state value and set focus on text field
  handleButtonClick = (): void => {
    if (this.state.value) {
      this.props.addTodo(this.state.value);
      this.setState({ value: '', error: false }, () => this.handleInputFocus());
    }
    else {
      this.setState({ error: true }, () => this.handleInputFocus());
    }
  };

  render() {
    /* eslint-disable no-return-assign */
    return (
      <Grid container spacing={24}>
        <Grid item md={4} sm={12}>
          <TextField
            inputRef={ref => (this.todoTextField = ref)}
            autoFocus
            fullWidth
            label="Enter Todo..."
            value={this.state.value}
            onChange={this.handleInputChange}
            onKeyDown={this.handleInputEnter}
            error={this.state.error}
          />
        </Grid>
        <Grid item md={8} sm={12}>
          <Button raised color="primary" onClick={this.handleButtonClick}>Add Todo</Button>
        </Grid>
      </Grid>
    );
    /* eslint-enable no-return-assign */
  }
}

const AddTodoContainer = connect(null, { addTodo })(AddTodo);

export default AddTodoContainer;

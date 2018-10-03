// @flow
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import type { AddTodoFn } from '../../app/actions/types';

type Props = $ReadOnly<{|
  onAddTodo: AddTodoFn,
|}>;

type State = {|
  value: string,
  error: boolean,
|};

class AddTodo extends React.Component<Props, State> {
  state = {
    value: '',
    error: false,
  };

  // on render, set focus on text field
  componentDidMount(): void {
    this.handleInputFocus();
  }

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
    const { value } = this.state;
    const { onAddTodo } = this.props;

    if (value) {
      onAddTodo(value);
      this.setState({ value: '', error: false }, () => this.handleInputFocus());
    } else {
      this.setState({ error: true }, () => this.handleInputFocus());
    }
  };

  props: Props;

  todoTextField: Function;

  render() {
    const { value, error } = this.state;

    /* eslint-disable no-return-assign */
    return (
      <Grid container spacing={24}>
        <Grid item md={4} sm={12}>
          <TextField
            inputRef={ref => (this.todoTextField = ref)}
            autoFocus
            fullWidth
            label="Enter Todo..."
            value={value}
            onChange={this.handleInputChange}
            onKeyDown={this.handleInputEnter}
            error={error}
          />
        </Grid>
        <Grid item md={8} sm={12}>
          <Button variant="raised" color="primary" onClick={this.handleButtonClick}>
            Add Todo
          </Button>
        </Grid>
      </Grid>
    );
    /* eslint-enable no-return-assign */
  }
}

export default AddTodo;

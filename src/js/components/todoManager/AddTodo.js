// @flow
import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import type { AddTodoFn } from '../../app/actions/types';

type Props = $ReadOnly<{|
  onAddTodo: AddTodoFn,
|}>;

const AddTodo = ({ onAddTodo }: Props) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  let todoTextField = null;

  // triggers focus on text field
  const handleInputFocus = (): void => {
    if (todoTextField) {
      todoTextField.focus();
    }
  };

  // on button click, add new value, reset state value and set focus on text field
  const handleButtonClick = (): void => {
    if (value) {
      onAddTodo(value);
      setValue('');
      setError(false);
      handleInputFocus();
    } else {
      setError(true);
      handleInputFocus();
    }
  };

  // on input change, update state
  const handleInputChange = (event: SyntheticInputEvent<*>): void => {
    setValue(event.target.value);
  };

  // on enter pressed on input field, trigger button click
  const handleInputEnter = (event: SyntheticKeyboardEvent<*>): void => {
    if (event.keyCode === 13) {
      handleButtonClick();
    }
  };

  useEffect(() => {
    handleInputFocus();
  }, []);

  /* eslint-disable no-return-assign */
  return (
    <Grid container>
      <Grid item md={4} sm={12}>
        <TextField
          inputRef={ref => (todoTextField = ref)}
          autoFocus
          fullWidth
          label="Enter Todo..."
          value={value}
          onChange={handleInputChange}
          onKeyDown={handleInputEnter}
          error={error}
        />
      </Grid>
      <Grid item md={8} sm={12}>
        <Button variant="contained" color="primary" onClick={handleButtonClick}>
          Add Todo
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddTodo;

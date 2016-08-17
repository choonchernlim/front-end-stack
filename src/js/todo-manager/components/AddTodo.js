import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Grid, Cell } from 'radium-grid';
import { addTodo } from '../actions';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '', error: '' };
    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleInputEnter = this.handleInputEnter.bind(this);
  }

  // on render, set focus on text field
  componentDidMount() {
    this.handleInputFocus();
  }

  // triggers focus on text field
  handleInputFocus() {
    this.todoTextField.focus();
  }

  // on input change, update state
  handleInputChange(event) {
    this.setState({ value: event.target.value });
  }

  // on enter pressed on input field, trigger button click
  handleInputEnter(event) {
    if (event.keyCode === 13) {
      this.handleButtonClick();
    }
  }

  // on button click, add new value, reset state value and set focus on text field
  handleButtonClick() {
    if (this.state.value) {
      this.props.addTodo(this.state.value);
      this.setState({ value: '', error: '' }, () => this.handleInputFocus());
    }
    else {
      this.setState({ error: 'Field is required' }, () => this.handleInputFocus());
    }
  }

  render() {
    return (
      <Grid>
        <Cell width="1/3">
          {
            // Using ref callback instead of string.
            // See https://facebook.github.io/react/docs/more-about-refs.html
          }
          <TextField
            ref={ref => (this.todoTextField = ref)}
            hintText="Enter Todo..."
            errorText={this.state.error}
            value={this.state.value}
            onChange={this.handleInputChange}
            onKeyDown={this.handleInputEnter}
          />
        </Cell>
        <Cell width="2/3">
          <RaisedButton
            primary
            label="Add Todo"
            onClick={this.handleButtonClick}
          />
        </Cell>
      </Grid>
    );
  }
}

AddTodo.propTypes = {
  value: PropTypes.string,
  error: PropTypes.string,
  addTodo: PropTypes.func.isRequired
};

const AddTodoContainer = connect(null, { addTodo })(AddTodo);

export default AddTodoContainer;

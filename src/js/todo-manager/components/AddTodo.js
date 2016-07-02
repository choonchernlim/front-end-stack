import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Grid, Cell } from 'radium-grid';

class AddTodo extends Component {
  static propTypes = {
    value: PropTypes.string,
    error: PropTypes.string,
    addTodo: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = { value: '', error: '' };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  // on render, set focus on text field
  componentDidMount() {
    this.todoTextField.focus();
  }

  // on input change, update state
  handleInputChange(event) {
    this.setState({ value: event.target.value });
  }

  // on button click, add new value, reset state value and set focus on text field
  handleButtonClick() {
    if (this.state.value) {
      this.props.addTodo(this.state.value);
      this.setState({ value: '', error: '' }, () => this.todoTextField.focus());
    }
    else {
      this.setState({ error: 'Field is required' });
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
            ref={ref => {
              this.todoTextField = ref;
              return this.todoTextField;
            }}
            hintText="Enter Todo..."
            errorText={this.state.error}
            value={this.state.value}
            onChange={this.handleInputChange}
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

export default connect(null, { addTodo })(AddTodo);

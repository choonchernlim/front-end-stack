// @flow
import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RadioButton from 'material-ui/RadioButton';
import Container from '../../app/components/Container';

const styles = {
  paper: {
    padding: 12
  },
  textField: {
    verticalAlign: 'top'
  }
};

const Home = (): React.Element<any> => (
  <Container>
    <h1>Welcome!</h1>

    <p>You have successfully created a single-page app!</p>

    <h1>Look and Feel</h1>

    <Paper style={styles.paper}>
      <p><a href="#link">This is a link</a>. <strong>This is a strong text</strong>.</p>

      <h1>Heading 1</h1>

      <h2>Heading 2</h2>

      <h3>Heading 3</h3>

      <TextField hintText="Text Field" style={styles.textField} />
      {' '}
      <TextField hintText="Text Field (Disabled)" disabled style={styles.textField} />
      {' '}
      <TextField
        hintText="Text Field with Error Message"
        errorText="This field is required"
        style={styles.textField}
      />

      <br /><br />
      <br /><br />

      <RaisedButton label="Primary Button" primary />
      {' '}
      <RaisedButton label="Secondary Button" secondary />
      {' '}
      <RaisedButton label="Default Button" />
      {' '}
      <RaisedButton label="Disabled Button" disabled />

      <br /><br />
      <br /><br />

      <Checkbox label="Unchecked Checkbox" />
      {' '}
      <Checkbox label="Checked Checkbox" defaultChecked />
      {' '}
      <Checkbox label="Disabled Checkbox" disabled />

      <br /><br />

      <RadioButton label="Unchecked Radio Button" />
      {' '}
      <RadioButton label="Checked Radio Button" checked />
      {' '}
      <RadioButton label="Disabled Radio Button" disabled />
    </Paper>
  </Container>
);

export default Home;

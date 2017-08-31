// @flow
import type { Element } from 'react';
import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RadioButton from 'material-ui/RadioButton';
import Container from '../../app/components/Container';
import styles from '../styles';

const Home = (): Element<*> => (
  <Container>
    <h1>Welcome!</h1>

    <p>You have successfully created a single-page app!</p>

    <h1>Look and Feel</h1>

    <Paper style={styles.home.paper}>
      <p><a href="#link">This is a link</a>. <strong>This is a strong text</strong>.</p>

      <h1>Heading 1</h1>

      <h2>Heading 2</h2>

      <h3>Heading 3</h3>

      <TextField hintText="Text Field" style={styles.home.textField} />
      {' '}
      <TextField hintText="Disabled Text Field" disabled style={styles.home.textField} />
      {' '}
      <TextField
        hintText="Error Text Field"
        errorText="Required field"
        style={styles.home.textField}
      />

      <br /><br />

      <RaisedButton label="Primary Button" primary style={styles.home.button} />
      {' '}
      <RaisedButton label="Secondary Button" secondary style={styles.home.button} />
      {' '}
      <RaisedButton label="Default Button" style={styles.home.button} />
      {' '}
      <RaisedButton label="Disabled Button" disabled style={styles.home.button} />

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

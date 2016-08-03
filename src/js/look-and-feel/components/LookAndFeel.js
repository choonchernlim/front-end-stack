import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RadioButton from 'material-ui/RadioButton';
import Container from '../../common/components/Container';

export default () => (
  <Container>
    <h1>Look and Feel</h1>

    <p>Styles for web and Material UI components, adhering to Google Material Design.</p>

    <h1>Heading 1</h1>

    <p>This is a <a href="#link">link</a>.</p>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed sodales ipsum, ut
      sollicitudin sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
      cubilia Curae; Quisque vitae massa at erat pharetra auctor id vel nisl. Fusce id dapibus
      lacus. Nulla sit amet lorem sapien. Praesent non massa nisl. Nam volutpat ac orci at
      mattis.
    </p>

    <h2>Heading 2</h2>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed sodales ipsum, ut
      sollicitudin sem.
    </p>

    <h3>Heading 3</h3>

    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
      cubilia Curae; Quisque vitae massa at erat pharetra auctor id vel nisl. Fusce id dapibus
      lacus.
    </p>

    <h1>Material UI</h1>

    <h2>Text Field</h2>

    <TextField hintText="Text Field" />
    {' '}
    <TextField hintText="Text Field (Disabled)" disabled />
    {' '}
    <TextField hintText="Text Field with Error Message" errorText="This field is required" />

    <h2>Raised Button</h2>

    <RaisedButton label="Primary" primary />
    {' '}
    <RaisedButton label="Secondary" secondary />
    {' '}
    <RaisedButton label="Default" />
    {' '}
    <RaisedButton label="Disabled" disabled />

    <h2>Checkbox</h2>

    <Checkbox label="Unchecked" />
    {' '}
    <Checkbox label="Checked" defaultChecked />
    {' '}
    <Checkbox label="Disabled" disabled />

    <h2>Radio Button</h2>

    <RadioButton label="Unchecked" />
    {' '}
    <RadioButton label="Checked" checked />
    {' '}
    <RadioButton label="Disabled" disabled />

  </Container>
);

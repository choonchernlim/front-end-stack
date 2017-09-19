// @flow
import React, { type Element } from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import Radio from 'material-ui/Radio';
import { FormControlLabel } from 'material-ui/Form';
import styles from '../styles';

type Props = {
  classes: Object,
};

const Home = ({ classes }: Props): Element<*> => (
  <div>
    <Typography type="display2" gutterBottom>Welcome!</Typography>

    <Typography type="body1" paragraph gutterBottom>
      You have successfully created a single-page app!
    </Typography>

    <Typography type="display1" gutterBottom>Look and Feel</Typography>

    <Paper className={classes.paper}>
      <Typography type="display3" gutterBottom>Display 3</Typography>
      <Typography type="display2" gutterBottom>Display 2</Typography>
      <Typography type="display1" gutterBottom>Display 1</Typography>
      <Typography type="body2" gutterBottom>Body 2</Typography>
      <Typography gutterBottom>Body 1</Typography>
      <Typography><a href="https://myshittycode.com/">Link</a></Typography>

      <br /><br />

      <TextField className={classes.textField} label="Default" value="test" />
      <TextField className={classes.textField} label="Disabled" value="test" disabled />
      <TextField className={classes.textField} label="Error" value="test" error />

      <br /><br />

      <Button className={classes.button} raised color="primary">Primary Button</Button>
      <Button className={classes.button} raised color="accent">Secondary Button</Button>
      <Button className={classes.button} raised>Default Button</Button>
      <Button className={classes.button} raised disabled>Disabled Button</Button>

      <br /><br />

      <FormControlLabel label="Unchecked Checkbox" control={<Checkbox />} />
      <FormControlLabel label="Checked Checkbox" control={<Checkbox checked />} />
      <FormControlLabel label="Disabled Checkbox" control={<Checkbox disabled />} />

      <br /><br />

      <FormControlLabel label="Unchecked Radio" control={<Radio />} />
      <FormControlLabel label="Checked Radio" control={<Radio checked />} />
      <FormControlLabel label="Disabled Radio" control={<Radio disabled />} />
    </Paper>

  </div>
);

export default withStyles(styles.home)(Home);

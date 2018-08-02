// @flow
import * as React from 'react';
import grey from '@material-ui/core/colors/grey';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

type Props = {
  classes: Object,
};

const styles = (theme: Object) => ({
  paper: {
    padding: theme.spacing.unit * 3,
    color: grey[700],
  },
  textField: {
    width: 200,
    margin: theme.spacing.unit,
  },
  button: {
    width: 200,
    margin: theme.spacing.unit,
  },
});

const Home = ({ classes }: Props): React.Element<*> => (
  <div>
    <Typography variant="display2">
Welcome!
    </Typography>

    <Typography variant="body1" paragraph>
      You have successfully created a single-page app!
    </Typography>

    <Typography variant="display1">
Look and Feel
    </Typography>

    <Paper className={classes.paper}>
      <Typography variant="display3">
Display 3
      </Typography>
      <Typography variant="display2">
Display 2
      </Typography>
      <Typography variant="display1">
Display 1
      </Typography>
      <Typography variant="body2">
Body 2
      </Typography>
      <Typography>
Body 1
      </Typography>

      <br />
      <br />

      <TextField className={classes.textField} label="Default" value="test" />
      <TextField className={classes.textField} label="Disabled" value="test" disabled />
      <TextField className={classes.textField} label="Error" value="test" error />

      <br />
      <br />

      <Button className={classes.button} variant="raised" color="primary">
Primary Button
      </Button>
      <Button className={classes.button} variant="raised" color="secondary">
Secondary
        Button
      </Button>
      <Button className={classes.button} variant="raised">
Default Button
      </Button>
      <Button className={classes.button} variant="raised" disabled>
Disabled Button
      </Button>

      <br />
      <br />

      <FormControlLabel label="Unchecked Checkbox" control={<Checkbox />} />
      <FormControlLabel label="Checked Checkbox" control={<Checkbox checked />} />
      <FormControlLabel label="Disabled Checkbox" control={<Checkbox disabled />} />

      <br />
      <br />

      <FormControlLabel label="Unchecked Radio" control={<Radio />} />
      <FormControlLabel label="Checked Radio" control={<Radio checked />} />
      <FormControlLabel label="Disabled Radio" control={<Radio disabled />} />
    </Paper>

  </div>
);

export default withStyles(styles)(Home);

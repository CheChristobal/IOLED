import React from 'react';
import ReactDOM from 'react-dom'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    //display: 'flex',
    flexWrap: 'wrap',
    alingitems: 'center',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
    alingitems: 'center',
  },
}));

export default function Timer() {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="time" 
        label="Tiempo"
        type="time"
        defaultValue="00:00"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
    </form>
  );
}
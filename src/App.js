import React from 'react';
import './App.css';
import {Button, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  helloWorldStyle: {
    fontStyle: 'oblique',
    color:"red",
    fontSize:"30px"
  },
  buttonStyles:{
    color:'green'
  }
});

function App() {
  const classes=useStyles();

  return (
    <div className="App">
      <Typography className={classes.helloWorldStyle} color="primary" variant="h1">Hello World!</Typography>
      <Button className={classes.buttonStyles}  color="secondary" variant="outlined">Click here</Button>
    </div>
  );
}

export default App;

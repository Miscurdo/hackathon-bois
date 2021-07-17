import React from 'react';
// import { useHistory } from 'react-router-dom';
import { Button, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  form: {
    padding: '20px',
    height: '70vh',
    width: 400,
    margin: '30px auto',
    textAlign: 'center'
  }
});

const TitlePage = () => {
  const classes = useStyles();

  return (
    <div className="login-register-paper">
      Hello World
      <Grid>
        <Paper elevation={10} className={classes.form}>
          <img alt="Requizit Logo" src="../../public/logo.png">
          </img>
          <Button 
            style={{
              backgroundColor: "#731DD8",
              color: 'white'
            }}
            variant="contained" >Login
          </Button>
          <Typography>
            Don't have an account yet? Sign up now
          </Typography>
          <Button variant="contained" color="primary">Sign up</Button>
        </Paper>
      </Grid>
    </div>
  );
}

export default TitlePage;

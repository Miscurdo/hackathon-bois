import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../logo.png';

import '../App.css';

const backend = `http://localhost:4000`;

const useStyles = makeStyles({
  form: {
    padding: '20px',
    height: '70vh',
    width: 400,
    margin: '80px auto',
    textAlign: 'center'
  },
  logo: {
    display: 'block',
    margin: '50px auto',
    height: 'auto',
    width: '150px',
  },
  buttonDiv: {
    flexDirection: 'column'
  },
  button: {
    color: 'white',
    backgroundColor: "#731DD8",
    '&:hover': {
      backgroundColor: '#C8B8D8',
      color: 'black',
    },
    margin: '60px auto 0 auto',
    display:'block',
  },
});

const TitlePage = () => {
  const classes = useStyles();
  const history = useHistory();
  const handleLoginRedirect = (e) => {
    history.push(`./login`);
  };

  const handleRegisterRedirect = (e) => {
    history.push(`./register`);
  };

  return (
    <div className="login-register-paper">
      <Grid>
        <Paper elevation={10} className={classes.form}>
          <img alt="Requizit Logo" src={logo} className={classes.logo}></img>
          <Typography 
            style={{
              fontWeight: 'bold',
              fontFamily: 'Bree Serif'
            }}
            variant="h4">
            Requizit
          </Typography>
          <Typography 
            style={{
              marginTop: "10px",
              fontFamily: "Bree Serif"
            }}
            variant="h5">
            Review. Revisit. Requizit
          </Typography>
          <div className={classes.buttonDiv}>
            <Button className={classes.button} variant="contained" onClick={handleLoginRedirect}>
              Login
            </Button>
            <Button variant="contained" style={{marginTop: '10px'}} className={classes.button} onClick={handleRegisterRedirect}>
              Sign Up
            </Button>
          </div>
        </Paper>
      </Grid>
    </div>
  );
}

export default TitlePage;

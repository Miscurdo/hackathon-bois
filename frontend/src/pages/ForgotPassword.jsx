import React from 'react';
import { useHistory } from 'react-router-dom';
import { Avatar, Button, CssBaseline, TextField } from '@material-ui/core';
import { Paper, Grid, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';

import stockPhoto from '../studyingPhoto.jpg';
import logo from '../logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${stockPhoto})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    marginTop: '20%',
    width: '70%',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: '70%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '60%',
    marginTop: theme.spacing(1),
  },
  submit: {
    width: '30%',
    display: 'block',
    margin: '15px auto 0 auto',
    color: 'white',
    backgroundColor: "#731DD8",
    '&:hover': {
      backgroundColor: '#C8B8D8',
      color: 'black',
    }
  },
  secondaryDiv: {
    marginTop: '30px'
  },
  logo: {
    marginTop: '70px',
    marginBottom: '20px',
    width: '50px',
    height: 'auto',
  },
  buttonsDiv: {
    marginTop: '30px',
  },
  text: {
    marginTop: '10px',
  }
}));

const ForgotPasswordPage = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleLoginRedirect = (e) => {
    history.push(`./login`);
  };
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Paper elevation={10} className={classes.paper}>
          <img src={logo} alt="requizitlogo" className={classes.logo}></img>
          <Typography component="h1" variant="h5">
            Forgot Password
          </Typography>
          <Typography component="body" variant="body" className={classes.text}>
            Enter your email to reset your password.
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <div className={classes.buttonsDiv}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
              >
                Reset
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleLoginRedirect}
              >
                Sign In
              </Button>
            </div>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ForgotPasswordPage;
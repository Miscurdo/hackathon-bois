import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, CssBaseline, TextField } from '@material-ui/core';
import { Link, Paper, Grid, Typography } from '@material-ui/core';
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
  form: {
    width: '70%',
    marginTop: theme.spacing(1),
  },
  submit: {
    width: '40%',
    display: 'block',
    margin: '20px auto',
    color: 'white',
    backgroundColor: "#731DD8",
    '&:hover': {
      backgroundColor: '#C8B8D8',
      color: 'black',
    }
  },
  textInput: {
    marginTop: '10px',
  },
  logo: {
    marginTop: '70px',
    marginBottom: '20px',
    width: '50px',
    height: 'auto',
  },
}));

const RegisterPage = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleLoginRedirect = (e) => {
    history.push(`./login`);
  };
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={10} square>
        <Paper elevation={10} className={classes.paper}>
          <img src={logo} alt="requizitlogo" className={classes.logo}></img>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form className={classes.form} noValidate>
            <TextField  className={classes.textInput}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              className={classes.textInput}
              variant="outlined" required fullWidth id="email" label="Email Address" name="email" autoComplete="email"
            />
            <TextField
              className={classes.textInput}
              variant="outlined"
              required
              fullWidth
              id="phone"
              label="Phone Number"
              name="phone"
            />
            <TextField
              className={classes.textInput}
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
              onClick={(e) => {
                e.preventDefault();
                history.push('/dashboard');
              }}
            >
              Sign Up
            </Button>
            <Grid item>
              <Link href="#" variant="body2" onClick={handleLoginRedirect}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default RegisterPage;
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Avatar, Button, CssBaseline, TextField } from '@material-ui/core';
import { Link, Paper, Grid, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';

import stockPhoto from '../studyingPhoto.jpg';

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
    margin: '20% auto 0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '80%'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '60%',
    marginTop: '60px',
  },
  submit: {
    width: '60%',
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
  }
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
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
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
        </div>
      </Grid>
    </Grid>
  );
};

export default RegisterPage;
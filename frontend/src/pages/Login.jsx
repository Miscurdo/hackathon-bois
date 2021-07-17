import React from 'react';
import { useHistory } from 'react-router-dom';
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox } from '@material-ui/core';
import { Link, Paper, Grid, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';

import stockPhoto from '../studyingPhoto.jpg';
const BASEURL = 'http://localhost:8080';

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
    margin: '10px auto',
    backgroundColor: "#731DD8",
    '&:hover': {
      backgroundColor: '#C8B8D8',
      color: 'black',
    }
  },
  secondaryDiv: {
    marginTop: '30px'
  }
}));


const LoginPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleRegisterRedirect = (e) => {
    history.push(`./register`);
  };
  
  const handleForgotPw = (e) => {
    history.push(`./forgot-password`);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    history.push('/dashboard');
  
    // const response = await fetch(`${BASEURL}/login`, {
    //   body: JSON.stringify({
    //     email,
    //     password
    //   }),
    //   method: 'POST'
    // })
  
    // const data = await response.json();
  
    // if (response.status === 200) {
    //   console.log('nice');
    //   console.log(`Token is ${JSON.stringify(data.token)}`);
    //   localStorage.setItem('token', data.token);
    //   localStorage.setItem('userEmail', email);
    //   history.push('/dashboard');
    // } else {
    //   console.log('rip');
    // }
  }  

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
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
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
            >
              Sign In
            </Button>
            <Grid container className={classes.secondaryDiv}>
              <Grid item xs>
                <Link href="#" variant="body2" onClick={handleForgotPw}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" onClick={handleRegisterRedirect}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, CssBaseline, TextField, FormControlLabel, Checkbox } from '@material-ui/core';
import { Link, Paper, Grid, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';

import stockPhoto from '../studyingPhoto.jpg';
import logo from '../logo.png';
// const BASEURL = 'http://localhost:8080';

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
  },
  logo: {
    marginTop: '70px',
    marginBottom: '20px',
    width: '50px',
    height: 'auto',
  }
}));


const LoginPage = () => {
  const classes = useStyles();
  const history = useHistory();
  // const [email, setEmail] = React.useState('');
  // const [password, setPassword] = React.useState('');

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
        <Paper className={classes.paper} elevation={10}>
          <img src={logo} alt="requizitlogo" className={classes.logo}></img>
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
        </Paper>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
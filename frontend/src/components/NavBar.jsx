import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
import logo from '../logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logoutButton: {
    marginLeft: 'auto',
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    position: 'fixed',
  },
  button: {
    padding: theme.spacing(0, 3, 0),
  },
  logo: {
    display: 'block',
    margin: '5px 10px',
    height: 'auto',
    width: '30px',
  },
}));

function NavBar () {
  const history = useHistory();
  const classes = useStyles();

  const handleLogout = async e => {
    e.preventDefault();
    history.push('/');
  }

  const handleDashboard = async e => {
    e.preventDefault();
    history.push('/dashboard');
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar className={classes.appBar} style={{ background: '#731dd8' }}>
        <Toolbar>
          <img alt="Requizit Logo" src={logo} className={classes.logo}></img>
          <Typography id="BigBrain" variant="h6" color="inherit" noWrap style={{
              fontWeight: 'bold',
              fontFamily: 'Bree Serif'
            }}>
            Requizit
          </Typography>
          <Button id="dashboard" className={classes.button} color='inherit' onClick={handleDashboard} style={{fontFamily: 'Bree Serif'}}>
            Dashboard
          </Button>
          {/* <Button id="logout" className={classes.logoutButton} color="inherit" onClick={history.push('/login')}>Logout</Button> */}
          <Button id="logout" className={classes.logoutButton} color="inherit" onClick={handleLogout} style={{fontFamily: 'Bree Serif'}}>Logout</Button>

        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;

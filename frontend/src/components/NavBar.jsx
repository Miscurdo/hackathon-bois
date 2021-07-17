import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';

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
  }
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
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography id="BigBrain" variant="h6" color="inherit" noWrap>
            Requizit
          </Typography>
          <Button id="dashboard" className={classes.button} color='inherit' onClick={handleDashboard}>
            Dashboard
          </Button>
          {/* <Button id="logout" className={classes.logoutButton} color="inherit" onClick={history.push('/login')}>Logout</Button> */}
          <Button id="logout" className={classes.logoutButton} color="inherit" onClick={handleLogout}>Logout</Button>

        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;

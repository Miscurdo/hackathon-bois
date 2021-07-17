import React from 'react';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../components/NavBar';
import { Button, Paper, Grid, Typography } from '@material-ui/core';
import { flexbox } from '@material-ui/system';

const GroupHomePage = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      height: '90vh',
      marginTop: '55px',
      display: 'block',
      width: '100%'
    },
    title: {
      width: '100%',
      marginTop: '75px',
      height: '50px',
      backgroundColor: 'lightgreen'
    },
    main: {
      backgroundColor: 'pink',
      display: 'flex',
      width: '100%',
      marginTop: 0,
      height: '85vh',
    },
    button: {
      width: '300px',
      height: '90px',
      marginLeft: 'auto',
      marginRight: 'auto',
      color: 'white',
      backgroundColor: "#731DD8",
      '&:hover': {
        backgroundColor: '#C8B8D8',
        color: 'black',
      },
      fontSize: '30px',
      marginTop: '70px',
    },
    quiz: {
      width: '80%',
      backgroundColor: 'lightblue',

    },
    statsComponent: {
      display: 'flex',
      flexDirection: 'column',
    },
    statsText: {
      marginTop: '70px',
      marginLeft: '28%',
      textAlign: 'left',
      display: 'block',
    },
    statsTopic: {
      display: 'inline-flex',
      alignItems: 'center',
      fontSize: '20px',
      marginLeft: '30%',
      marginTop: '25px',
    },
    rectangle1: {
      width: '250px',
      height: '30px',
      backgroundColor: 'lightblue',
      display: 'inline-block',
      marginLeft: '20px',
      marginRight: '30px',
      border: '1px solid black',
    },
    rectangle2: {
      width: '150px',
      height: '30px',
      backgroundColor: 'lightpink',
      display: 'inline-block',
      marginLeft: '20px',
      marginRight: '30px',
      border: '1px solid black',
    },
    rectangle3: {
      width: '350px',
      height: '30px',
      backgroundColor: 'lightgreen',
      display: 'inline-block',
      marginLeft: '20px',
      marginRight: '30px',
      border: '1px solid black',
    },
    rectangle4: {
      width: '90px',
      height: '30px',
      backgroundColor: 'red',
      display: 'inline-block',
      marginLeft: '20px',
      marginRight: '30px',
      border: '1px solid black',
    },
    sideBar: {
      backgroundColor: 'cyan',
      width: '20%',
      display: 'inline-flex',
      flexDirection: 'column',
      textAlign: 'left',
    }
  }));

  const classes = useStyles();
  const history = useHistory();

  return (
    <div>
      <div>
        <NavBar/>
      </div>
      <div className={classes.root}>
        <div className={classes.title}>
          <Typography component="h4" variant="h4">
            COMP1511
          </Typography>
        </div>
        <div className={classes.main}>
          <div className={classes.quiz}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.button}
            >
              Start Quiz
            </Button>
            <div className={classes.statsComponent}>
              <Typography component="h5" variant="h5" className={classes.statsText}>
                Overall Statistics
              </Typography>
              <span className={classes.statsTopic}>
                Topic 1: <div className={classes.rectangle1}></div>75%
              </span>
              <span className={classes.statsTopic}>
                Topic 2: <div className={classes.rectangle2}></div>52%
              </span>
              <span className={classes.statsTopic}>
                Topic 3: <div className={classes.rectangle3}></div>95%
              </span>
              <span className={classes.statsTopic}>
                Topic 4: <div className={classes.rectangle4}></div>34%
              </span>
            </div>
          </div>
          <div className={classes.sideBar}>
            <div className={classes.admin}>
              <span className={classes.userTitle}>Admin</span>
            </div>
            <div className={classes.members}>
              <span className={classes.userTitle}>Members</span>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroupHomePage;
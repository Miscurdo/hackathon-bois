import React from 'react';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../components/NavBar';
import { Button, Paper, Typography } from '@material-ui/core';

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
      marginTop: '90px',
      height: '50px',
      justifyContent: 'center',
    },
    courseTitle: {
      width: '300px',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '30px',
      borderBottom: '1px solid grey',
      paddingBottom: '5px',
    },
    main: {
      display: 'flex',
      width: '100%',
      marginTop: 0,
      height: '85vh',
    },
    button: {
      width: '200px',
      height: '60px',
      marginLeft: 'auto',
      marginRight: 'auto',
      color: 'white',
      backgroundColor: "#731DD8",
      '&:hover': {
        backgroundColor: '#C8B8D8',
        color: 'black',
      },
      fontSize: '20px',
      marginTop: '50px',
    },
    quiz: {
      width: '85%',
      marginTop: '20px',
      marginLeft: '20px',
    },
    statsComponent: {
      display: 'flex',
      flexDirection: 'column',
    },
    statsText: {
      marginTop: '50px',
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
      backgroundColor: '#fbe4e4',
      display: 'inline-block',
      marginLeft: '20px',
      marginRight: '30px',
    },
    rectangle2: {
      width: '150px',
      height: '30px',
      backgroundColor: '#fbf3db',
      display: 'inline-block',
      marginLeft: '20px',
      marginRight: '30px',
    },
    rectangle3: {
      width: '350px',
      height: '30px',
      backgroundColor: '#ddedea',
      display: 'inline-block',
      marginLeft: '20px',
      marginRight: '30px',
    },
    rectangle4: {
      width: '90px',
      height: '30px',
      backgroundColor: '#ddebf1',
      display: 'inline-block',
      marginLeft: '20px',
      marginRight: '30px',
    },
    sideBar: {
      width: '15%',
      display: 'inline-flex',
      flexDirection: 'column',
      textAlign: 'left',
      marginLeft: '20px',
      marginTop: '20px',
    },
    userTitle: {
      fontWeight: 'bold',
      fontSize: '20px',
      marginTop: '20px',
      marginLeft: '20px',
      marginBottom: 0,
    },
    userNames: {
      marginTop: '10px',
      marginLeft: '30px',
      marginBottom: 0,
    },
  }));

  const classes = useStyles();
  const history = useHistory();

  const handleQuizRedirect = () => {
    history.push(`./group-settings`);
  };

  return (
    <div>
      <div>
        <NavBar/>
      </div>
      <div className={classes.root}>
        <div className={classes.main}>
          <Paper className={classes.quiz} elevation={8}>
            <Typography component="h4" variant="h4" className={classes.courseTitle}>
              COMP1511
            </Typography>
            <Button
              onClick={handleQuizRedirect}
              type="submit"
              fullWidth
              variant="contained"
              className={classes.button}
            >
              Start Quiz
            </Button>
            <div className={classes.statsComponent}>
              <Typography component="h5" variant="h5" className={classes.statsText}>
                Personal Statistics
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
          </Paper>
          <div className={classes.sideBar}>
            <div className={classes.admin}>
              <p className={classes.userTitle}>Admin</p>
              <p className={classes.userNames}>Annie</p>
            </div>
            <div className={classes.members}>
              <p className={classes.userTitle}>Members</p>
              <p className={classes.userNames}>Shabrina</p>
              <p className={classes.userNames}>Jamie</p>
              <p className={classes.userNames}>Marco</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroupHomePage;
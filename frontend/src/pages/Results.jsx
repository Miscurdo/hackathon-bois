import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../components/NavBar';

import '../App.css';

// const backend = `http://localhost:4000`;

const useStyles = makeStyles({
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
    width: '200px',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: '20px',
    borderBottom: '1px solid grey',
    paddingBottom: '5px',
  },
  main: {
    width: '70%',
    margin: '100px auto 0 auto',
    height: '90%',
  },
  scoreText: {
    marginTop: '10px',
  },
  score: {
    fontWeight: 'bold',
    marginTop: '30px',
  },
  button: {
    display: 'inline-flex',
    width: '200px',
    height: '50px',
    color: 'white',
    marginRight: '30px',
    marginLeft: '30px',
    backgroundColor: "#731DD8",
    '&:hover': {
      backgroundColor: '#C8B8D8',
      color: 'black',
    },
    fontSize: '16px',
    marginTop: '100px',
  },
  statsComponent: {
    display: 'flex',
    flexDirection: 'column',
  },
  statsText: {
    marginTop: '50px',
    marginLeft: 'auto',
    marginRight: 'auto',
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
    width: '280px',
    height: '30px',
    backgroundColor: '#fbf3db',
    display: 'inline-block',
    marginLeft: '20px',
    marginRight: '30px',
  },
  rectangle2: {
    width: '80px',
    height: '30px',
    backgroundColor: '#fbe4e4',
    display: 'inline-block',
    marginLeft: '20px',
    marginRight: '30px',
  },
});

const ResultsPage = () => {
  const classes = useStyles();
  const history = useHistory();
  // const handleLoginRedirect = (e) => {
  //   history.push(`./login`);
  // };

  const handleDashboardRedirect = (e) => {
    history.push(`./group-home`);
  };

  return (
    <div>
      <div>
        <NavBar/>
      </div>
      <div className={classes.root}>
        <Paper className={classes.main} elevation={8}>
          <Typography component="h5" variant="h5" className={classes.courseTitle}>
            COMP123
          </Typography>
          <div className={classes.score}>
            <Typography component="h5" variant="h4" className={classes.scoreText}>
              Your Score
            </Typography>
            <Typography component="h2" variant="h2" className={classes.score}>
              9/10
            </Typography>
          </div>
          <div className={classes.statsComponent}>
            <Typography component="h5" variant="h5" className={classes.statsText}>
              Good job! Here is a breakdown
            </Typography>
            <span className={classes.statsTopic}>
              Topic 1: <div className={classes.rectangle1}></div>7/10
            </span>
            <span className={classes.statsTopic}>
              Topic 2: <div className={classes.rectangle2}></div>2/10
            </span>
          </div>
          <div className={classes.buttonsGroup}>
            <Button
              onClick={handleDashboardRedirect}
              type="submit"
              fullWidth
              variant="contained"
              className={classes.button}
            >
              Back to Group
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.button}
              onClick={() => {history.push('/quiz')}}
            >
              Play Again
            </Button>
          </div>
        </Paper>
      </div>
    </div>
  );
}

export default ResultsPage;

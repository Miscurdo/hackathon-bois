import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Divider, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../components/NavBar';

import '../App.css';

const backend = `http://localhost:4000`;

const useStyles = makeStyles({
  '@global': {
    body:{
      backgroundColor: '#f2e7fe'
    }
  },
  root: {
    height: '90vh',
    // marginTop: '35px',
    display: 'block',
    width: '100%',
    background: '#f2e7fe',
    // margin: '0 auto 0 auto',
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
    paddingBottom: '20px',
    fontFamily: 'Bree Serif'
  },
  main: {
    width: '70%',
    margin: '100px auto 0 auto',
    height: '90%',
  },
  scoreText: {
    marginTop: '10px',
    fontFamily: 'Bree Serif'
  },
  score: {
    fontWeight: 'bold',
    marginTop: '30px',
    fontFamily: 'Bree Serif'
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
    fontFamily: 'Verdana'
  },
  statsTopic: {
    display: 'inline-flex',
    alignItems: 'center',
    fontSize: '20px',
    marginLeft: '30%',
    marginTop: '25px',
    fontFamily: 'Verdana'
  },
  rectangle1: {
    width: '300px',
    height: '30px',
    backgroundColor: '#fbf3db',
    display: 'inline-block',
    marginLeft: '20px',
    marginRight: '30px',
  },
  rectangle2: {
    width: '150px',
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
          <Divider/>
          <div className={classes.score}>
            <Typography component="h5" variant="h4" className={classes.scoreText}>
              Your Score
            </Typography>
            <Typography component="h2" variant="h2" className={classes.score}>
              3/4
            </Typography>
          </div>
          <div className={classes.statsComponent}>
            <Typography component="h5" variant="h5" className={classes.statsText}>
              Good job! Here is a breakdown
            </Typography>
            <span className={classes.statsTopic}>
              Topic 1: <div className={classes.rectangle1}></div>1/2
            </span>
            <span className={classes.statsTopic}>
              Topic 2: <div className={classes.rectangle2}></div>2/2
            </span>
          </div>
          <div className={classes.buttonsGroup}>
            <Button
              onClick={handleDashboardRedirect}
              type="submit"
              fullWidth
              variant="contained"
              className={classes.button}
              style={{fontFamily: 'Bree Serif'}}
            >
              Back to Group
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.button}
              onClick={() => {history.push('/quiz')}}
              style={{fontFamily: 'Bree Serif'}}
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

import React from 'react';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../components/NavBar';
import { Button, Checkbox, FormControl, FormControlLabel, Paper, Grid, Radio, RadioGroup, Typography } from '@material-ui/core';

const GroupSettingsPage = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      height: '90vh',
      marginTop: '55px',
      display: 'block',
      width: '100%',
    },
    main: {
      marginTop: '90px',
      height: '92%',
      width: '90%',
      margin: '0 auto',
      padding: '0 200px',
    },
    title: {
      width: '200px',
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingTop: '20px',
      borderBottom: '1px solid grey',
      paddingBottom: '5px',
    },
    text: {
      fontSize: '24px',
    },
    topicsText: {
      display: 'inline-flex',
      alignItems: 'center',
      width: '300px',
      height: '50px',
      paddingLeft: '20px',
      fontSize: '18px',
      border: '1px solid grey',
    },
    topicsSpan: {
      marginLeft: '40px',
      display: 'block',
    },
    topicsGrid: {
      marginTop: '15px',
    },
    quizLength: {
      margin: '35px auto 0 auto',
      width: '150px',
      paddingBottom: '5px',
      borderBottom: '1px solid grey',
    },
    button: {
      width: '300px',
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
      marginTop: '20px',
      display: 'block',
    },
  }));

  const classes = useStyles();
  const history = useHistory();

  const [radioValue, setRadioValue] = React.useState('10')
  const handleRadioChange = (event) => {
    setRadioValue(event.target.value);
  };

  return (
    <div>
      <div>
        <NavBar/>
      </div>
      <div className={classes.root}>
        <Paper className={classes.main}>
          <Typography component="h4" variant="h4" className={classes.title}>
            Settings
          </Typography>
          <p className={classes.text}>What would you like to be quizzed on?</p>
          <Grid container spacing={3} className={classes.topicsGrid}>
            <Grid item xs={6}>
              <span className={classes.topicsSpan}>
                <Checkbox
                  color="primary"
                />
                <div className={classes.topicsText}>Topic 1</div>  
              </span>
            </Grid>
            <Grid item xs={6}>
              <span className={classes.topicsSpan, classes.topicsEven}>
                <Checkbox
                  color="primary"
                />
                <div className={classes.topicsText}>Topic 2</div>  
              </span>
            </Grid>
            <Grid item xs={6}>
              <span className={classes.topicsSpan}>
                <Checkbox
                  color="primary"
                />
                <div className={classes.topicsText}>Topic 3</div>  
              </span>
            </Grid>
            <Grid item xs={6}>
              <span className={classes.topicsSpan, classes.topicsEven}>
                <Checkbox
                  color="primary"
                />
                <div className={classes.topicsText}>Topic 4</div>  
              </span>
            </Grid>
            <Grid item xs={6}>
              <span className={classes.topicsSpan}>
                <Checkbox
                  color="primary"
                />
                <div className={classes.topicsText}>Topic 5</div>  
              </span>
            </Grid>
            <Grid item xs={6}>
              <span className={classes.topicsSpan, classes.topicsEven}>
                <Checkbox
                  color="primary"
                />
                <div className={classes.topicsText}>Topic 6</div>  
              </span>
            </Grid>
          </Grid>
            <Typography component="h4" variant="h5" className={classes.quizLength}>
              Quiz Length
            </Typography>
            <FormControl component="fieldset">
              <RadioGroup value={radioValue} onChange={handleRadioChange}>
                <FormControlLabel value="10" control={<Radio color="primary"/>} label="10 questions"/>
                <FormControlLabel value="20" control={<Radio color="primary"/>} label="20 questions"/>
                <FormControlLabel value="30" control={<Radio color="primary"/>} label="30 questions"/>
                <FormControlLabel value="40" control={<Radio color="primary"/>} label="40 questions"/>
              </RadioGroup>
            </FormControl>
            <Button
              fullWidth
              variant="contained"
              className={classes.button}
            >
              Start
            </Button>
        </Paper>
      </div>
    </div>
  );
}

export default GroupSettingsPage;
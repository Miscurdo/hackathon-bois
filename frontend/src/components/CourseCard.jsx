import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  card: {
    width: '300px',
    height: '100px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '20px',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#c8b8d8',
      transform: 'scale(1.05)',
    }
  },
  text: {
    marginTop: '20px',
  }
}));

const CourseCard = ({ courseName }) => {
  const history = useHistory();
  const classes = useStyles();

  const handleQuizRedirect = () => {
    history.push(`./quiz`)
  }
  return (
    <div>
        <Card className={classes.card} onClick={handleQuizRedirect}>
          <CardContent>
            <Typography className={classes.text}>{courseName}</Typography>
          </CardContent>
        </Card>
    </div>
  );
}

export default CourseCard;

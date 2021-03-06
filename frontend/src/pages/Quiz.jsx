import React from 'react';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../components/NavBar';
import { Button, Container, Divider, Paper, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

function Quiz () {

	const [ans, setAnswered] = React.useState('#d6d7dc');
	const [wrong, setWrong] = React.useState('#d6d7dc');

	const handleAnswered = () => {
    setAnswered('#ddedea');
		setWrong('#fbe4e4');
  };

	const [questionNum, setQuestionNum] = React.useState(1);
	const [question, setQuestion] = React.useState('What course is this?');
	const [ans1, setAns1] = React.useState('COMP123');
	const [ans2, setAns2] = React.useState('Basket Weaving');
	const [ans3, setAns3] = React.useState('Drawing');
	const [ans4, setAns4] = React.useState('ENGG1000');
	const [tag1, setTag1] = React.useState('COMP123');
	const [tag2, setTag2] = React.useState('General');

	const clickedNext = () => {
    setQuestionNum(questionNum + 1);
		console.log(questionNum);
		if (questionNum === 1) {
			setQuestion('What comes after Venus?');
			setAns1('Earth');
			setAns2('Mercury');
			setAns3('Pluto');
			setAns4('Mars');
			setTag1('ASTRO1');
			setTag2('Planets');
		} else if (questionNum === 2) {
			setQuestion('What course is that?');
			setAns1('COMP2511');
			setAns2('Maths');
			setAns3('Science');
			setAns4('English');
			setTag1('COMP1511');
			setTag2('General');
		} else if (questionNum === 3) {
			setQuestion('What course are we going to do?');
			setAns1('COMP123');
			setAns2('Maths');
			setAns3('Science');
			setAns4('English');
			setTag1('COMP123');
			setTag2('General');
		} else {
			history.push(`./results`);
		}
		setAnswered('#d6d7dc');
		setWrong('#d6d7dc');
  };

	const useStyles = makeStyles((theme) => ({
		'@global': {
			body:{
			  backgroundColor: '#f2e7fe'
			}
		},
		main: {
			backgroundColor: '#f2e7fe',
			padding: theme.spacing(20, 0, 2),
		},
		paper: {
			padding: theme.spacing(5, 0, 5),
			margin: 'auto',
			maxWidth: 500,
			backgroundColor: wrong
		},
		correct: {
			padding: theme.spacing(5, 0, 5),
			margin: 'auto',
			maxWidth: 500,
			backgroundColor: ans
		},
		title: {
			padding: theme.spacing(10, 0, 25),
		},
		tag1: {
			maxWidth: 150,
			backgroundColor: '#fbf3db'
		},
		tag2: {
			maxWidth: 150,
			backgroundColor: '#ddebf1'
		},
		tags: {
			maxWidth: 600,
		},
		next: {
			position: 'absolute',
			bottom: theme.spacing(10),
			right: theme.spacing(10),
			backgroundColor: '#c8b8db'
		},
		bigPaper: {
			width: '70%',
			margin: '40px auto 0 auto',
			height: '90%',
		  },
	}));

	const classes = useStyles();
	const history = useHistory();
	
	return (
		<div>
			<div>
				<NavBar/>
			</div>
			<main className={classes.main}>
				<Paper className={classes.bigPaper} elevation={8}>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<Typography component="h2" variant="h5" color="textPrimary" style={{fontFamily: 'Bree Serif'}}>Question {questionNum}</Typography>
					</Grid>
					<Grid item xs={12} style={{paddingBottom: 100}}>
						<Typography component="h1" variant="h4" color="textPrimary" style={{fontFamily: 'Bree Serif'}}>{question}</Typography>
					</Grid>
				</Grid>
				<Container>
					<Grid container spacing={3}>
						<Grid item xs={6}>
							<Paper className={classes.correct} onClick={handleAnswered}>
								<Typography style={{fontFamily: 'Verdana'}}>{ans1}</Typography>
							</Paper>
						</Grid>
						<Grid item xs={6}>
							<Paper className={classes.paper} onClick={handleAnswered}> 
								<Typography style={{fontFamily: 'Verdana'}}>{ans2}</Typography>
							</Paper>
						</Grid>
						<Grid item xs={6}>
							<Paper className={classes.paper} onClick={handleAnswered}>
								<Typography style={{fontFamily: 'Verdana'}}>{ans3}</Typography>
							</Paper>
						</Grid>
						<Grid item xs={6} style={{paddingBottom: 100}} onClick={handleAnswered}>
							<Paper className={classes.paper}> 
								<Typography style={{fontFamily: 'Verdana'}}>{ans4}</Typography>
							</Paper>
						</Grid>
					</Grid>
					<Grid container className={classes.tags} spacing={1}>
						<Grid item xs={3}>
							<Typography style={{fontFamily: 'Verdana'}}>Tags: </Typography>
						</Grid>
						<Grid item xs={3}>
							<Paper className={classes.tag1}> 
								<Typography style={{fontFamily: 'Verdana'}}>{tag1}</Typography>
							</Paper>
						</Grid>
						<Grid item xs={3}>
							<Paper className={classes.tag2}> 
								<Typography style={{fontFamily: 'Verdana'}}>{tag2}</Typography>
							</Paper>
						</Grid>
					</Grid>
					<Button variant="contained" className={classes.next} onClick={clickedNext}>Next</Button>
				</Container>
				</Paper>
			</main>
		</div>
	);
}

export default Quiz;
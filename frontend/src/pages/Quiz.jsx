import React from 'react';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../components/NavBar';
import { Container, Paper, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

function Quiz () {
	const useStyles = makeStyles((theme) => ({
		main: {
			backgroundColor: theme.palette.background.paper,
			padding: theme.spacing(20, 0, 2),
		},
		paper: {
			padding: theme.spacing(5, 0, 5),
			margin: 'auto',
			maxWidth: 500,
			backgroundColor: '#c8b8db'
		},
		title: {
			padding: theme.spacing(10, 0, 25),
		},
		tag1: {
			maxWidth: 150,
			backgroundColor: '#fbe4e4'
		},
		tag2: {
			maxWidth: 150,
			backgroundColor: '#ddedea'
		},
		tags: {
			maxWidth: 280,
		}
	}));

	const classes = useStyles();
	const history = useHistory();
	
	return (
		<div>
			<div>
				<NavBar/>
			</div>
			<main className={classes.main}>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<Typography component="h2" variant="h5" color="textPrimary">Question 1</Typography>
					</Grid>
					<Grid item xs={12} style={{paddingBottom: 100}}>
						<Typography component="h1" variant="h4" color="textPrimary">What is the name of X Y Z?</Typography>
					</Grid>
				</Grid>
				<Container>
					<Grid container spacing={3}>
						<Grid item xs={6}>
							<Paper className={classes.paper}>
								<Typography>Answer 1</Typography>
							</Paper>
						</Grid>
						<Grid item xs={6}>
							<Paper className={classes.paper}> 
								<Typography>Answer 2</Typography>
							</Paper>
						</Grid>
						<Grid item xs={6}>
							<Paper className={classes.paper}>
								<Typography>Answer 3</Typography>
							</Paper>
						</Grid>
						<Grid item xs={6} style={{paddingBottom: 100}}>
							<Paper className={classes.paper}> 
								<Typography>Answer 4</Typography>
							</Paper>
						</Grid>
					</Grid>
					<Grid container className={classes.tags} spacing={1}>
						<Grid item xs={4}>
							<Typography>Tags: </Typography>
						</Grid>
						<Grid item xs={4}>
							<Paper className={classes.tag1}> 
								<Typography>COMP123</Typography>
							</Paper>
						</Grid>
						<Grid item xs={4}>
							<Paper className={classes.tag2}> 
								<Typography>Topic 1</Typography>
							</Paper>
						</Grid>
					</Grid>
				</Container>
			</main>
		</div>
	);
}

export default Quiz;
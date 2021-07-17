import React from 'react';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../components/NavBar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

function Dashboard () {

	const useStyles = makeStyles((theme) => ({
		heroContent: {
			backgroundColor: theme.palette.background.paper,
			padding: theme.spacing(10, 0, 2),
		},
		paper: {
			padding: theme.spacing(2),
			margin: 'auto',
			maxWidth: 500,
		},
		fab: {
			position: 'absolute',
			bottom: theme.spacing(5),
			right: theme.spacing(5),
		},
	}));

	const classes = useStyles();
	const history = useHistory();

	return (
		<div>
			<div>
				<NavBar/>
			</div>
			<main>
				<div className={classes.heroContent}>
					<Typography component="h1" variant="h4" color="textPrimary">
						Dashboard
					</Typography>
				</div>
				<Container>
				<Grid container spacing={3}>
					<Grid item xs={12}></Grid>
					<Grid item xs={12}>
						<Paper className={classes.paper}>
							<Typography>COMP123</Typography>
						</Paper>
					</Grid>
					<Grid item xs={12}>
						<Paper className={classes.paper}>
							<Typography>COMP123</Typography>
						</Paper>
					</Grid>
					<Grid item xs={12}>
						<Paper className={classes.paper}>
							<Typography>COMP123</Typography>
						</Paper>
					</Grid>
					<Grid item xs={12}>
						<Paper className={classes.paper}>
							<Typography>COMP123</Typography>
						</Paper>
					</Grid>
				</Grid>
				<Fab color="primary" aria-label="add" className={classes.fab}>
					<AddIcon />
				</Fab>
				</Container>
			</main>
		</div>
	);
}

export default Dashboard;
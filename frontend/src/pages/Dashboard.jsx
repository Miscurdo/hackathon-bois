import React from 'react';
import { useHistory } from 'react-router';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import NavBar from '../components/NavBar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Dialog from "@material-ui/core/Dialog";
import MuiDialogContent from "@material-ui/core/DialogContent";
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';

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
		modalPaper: {
			padding: theme.spacing(2),
		},
		fab: {
			position: 'absolute',
			bottom: theme.spacing(5),
			right: theme.spacing(5),
		},
	}));

	const DialogContent = withStyles((theme) => ({
		root: {
			padding: theme.spacing(2)
		}
	}))(MuiDialogContent);

	const classes = useStyles();
	const history = useHistory();

	// Open the 'Join Group/Create Group' modal
	const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

	// Open the 'Join Group' modal
	const [openJoin, setOpenJoin] = React.useState(false);

	const handleClickOpenJoin = () => {
		setOpenJoin(true);
	};
	const handleCloseJoin = () => {
		setOpenJoin(false);
		setOpen(false);
	};

	// Open the 'Create Group' modal
	const [openCreate, setOpenCreate] = React.useState(false);

	const handleClickOpenCreate = () => {
		setOpenCreate(true);
	};
	const handleCloseCreate = () => {
		setOpenCreate(false);
		setOpen(false);
	};
	
	const handleMoveToGroupHome = async e => {
		e.preventDefault();
		history.push('/group-home');
	}
	return (
		<div>
			<div>
				<NavBar/>
			</div>
			<main>
				<div className={classes.heroContent}>
					<Typography component="h1" variant="h4" color="textPrimary">
						Groups
					</Typography>
				</div>
				<Container>
				<Grid container spacing={3}>
					<Grid item xs={12}></Grid>
					<Grid item xs={12}>
						<Paper className={classes.paper} onClick={handleMoveToGroupHome}>
							<Typography>COMP123</Typography>
						</Paper>
					</Grid>
					<Grid item xs={12}>
						<Paper className={classes.paper}>
							<Typography>COMP123 Study Group</Typography>
						</Paper>
					</Grid>
					<Grid item xs={12}>
						<Paper className={classes.paper}>
							<Typography>My Other Study Group</Typography>
						</Paper>
					</Grid>
					<Grid item xs={12}>
						<Paper className={classes.paper}>
							<Typography>COMP456</Typography>
						</Paper>
					</Grid>
				</Grid>
				<Fab color="primary" aria-label="add" className={classes.fab} onClick={handleClickOpen}>
					<AddIcon />
				</Fab>
				</Container>
			</main>

			<Dialog onClose={handleClose} open={open}>
				<DialogContent dividers>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<Paper className={classes.modalPaper} onClick={handleClickOpenJoin}>
							<Typography>Join Group</Typography>
						</Paper>
					</Grid>
					<Grid item xs={12}>
						<Paper className={classes.modalPaper} onClick={handleClickOpenCreate}>
							<Typography>Create Group</Typography>
						</Paper>
					</Grid>
				</Grid>
				</DialogContent>
			</Dialog>

			<Dialog open={openJoin} onClose={handleCloseJoin}>
				<DialogTitle id="form-dialog-title">Join Group</DialogTitle>
				<DialogContent>
				<TextField
					autoFocus
					margin="dense"
					id="name"
					label="Group Name"
					type="email"
					fullWidth
        />
				<TextField
					autoFocus
					margin="dense"
					id="name"
					label="Pin"
					type="email"
					fullWidth
        />
				</DialogContent>
				<DialogActions>
          <Button onClick={handleCloseJoin} color="primary">
            Back
          </Button>
          <Button onClick={handleCloseJoin} color="primary">
            Join
          </Button>
        </DialogActions>
			</Dialog>

			<Dialog open={openCreate} onClose={handleCloseCreate}>
				<DialogTitle id="form-dialog-title">Create Group</DialogTitle>
				<DialogContent>
				<TextField
					autoFocus
					margin="dense"
					id="name"
					label="Group Name"
					type="email"
					fullWidth
        />
				<TextField
					autoFocus
					margin="dense"
					id="name"
					label="Pin (optional)"
					type="email"
					fullWidth
        />
				</DialogContent>
				<DialogActions>
          <Button onClick={handleCloseCreate} color="primary">
            Back
          </Button>
          <Button onClick={handleCloseCreate} color="primary">
            Create
          </Button>
        </DialogActions>
			</Dialog>

		</div>
	);
}

export default Dashboard;
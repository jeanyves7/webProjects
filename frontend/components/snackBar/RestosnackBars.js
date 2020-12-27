import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {useDispatch,useSelector} from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import {setRestoError} from "../../actions/actions";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function SnackBar() {
  const classes = useStyles();
  
  //using the open state to display an error using snackBar
  const open= useSelector(state => state.Restaurants.error);
    
  const dispatch = useDispatch();


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(setRestoError(false));
  };

  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
           OOPS! An error occured please try again later
        </Alert>
      </Snackbar>
    </div>
  );
}
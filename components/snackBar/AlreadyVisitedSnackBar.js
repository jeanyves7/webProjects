import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import {setDuplicateError,setSuccessSave} from "../../actions/actions";
import {useDispatch} from "react-redux";

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

export default function SnackBar({type,open}) {
  const classes = useStyles();
  
  const dispatch=useDispatch();

  // we want to handle the severity of the action
  let message;
  if(type==="error"){
    message="You already Visited this Restaurant today!";
  }else{
    message="We hope you liked, See you Soon!"
  }
    
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    if(type==="error"){
      dispatch(setDuplicateError(false));
    }else{
      dispatch(setSuccessSave(false));
    }
  };

  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={type}>
           {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
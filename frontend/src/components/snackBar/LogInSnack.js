import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {useDispatch,useSelector} from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import {setErrorLog,setSuccesLog} from "../../actions/actions";

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
  const error= useSelector(state => state.login.invalid);
  const success= useSelector(state => state.login.success);
    
  const dispatch = useDispatch();

  let open=false;
  let variant=""
  let msg=""
  if(error && !success){
      variant="error"
      msg="Invalid E-mail or password, please try again"
      open=true
  }else if(success && !error){
      variant="success"
      msg="welcome to E-Tech"
      open=true
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    if(error && !success){
       dispatch(setErrorLog(false))
    }else if(success && !error){
      dispatch(setSuccesLog(false))
    }
   
  };

  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={variant}>
          {msg}
        </Alert>
      </Snackbar>
    </div>
  );
}
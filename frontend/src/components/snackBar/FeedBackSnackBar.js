import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {useDispatch,useSelector} from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import {setPos,setNeg,setNeutre} from "../../actions/actions";

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
  const pos= useSelector(state => state.Feedback.positive);
  const neutre= useSelector(state => state.Feedback.neutral);
  const neg= useSelector(state => state.Feedback.negative);

  let snack=false
  let variant=""
  let snack_msg=""  

  console.log(pos,neutre,neg)

  if(pos && !neutre && !neg){
        variant="success"
        snack_msg=" Thank You, It was nice to know that we have served you well :)"
        snack=true
  }else if( neutre && !pos && !neg){
    variant="warning"
    snack_msg=" Have a great day, we hope you will expect more from us in the future"
    snack=true
  }else if(neg && !pos && !neutre){
    variant="error"
    snack_msg="we know how much a dissatisfied customer can get, we will reply to you as soon as possible"
    snack=true
  }
    
  const dispatch = useDispatch();


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    if(pos && !neutre && !neg){
      dispatch(setPos(false))
  }else if( neutre && !pos && !neg){
    dispatch(setNeutre(false))
  }else if(neg && !pos && !neutre){
    dispatch(setNeg(false))
  }
   snack=false
  };

  return (
    <div className={classes.root}>
      <Snackbar open={snack} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={variant}>
           {snack_msg}
        </Alert>
      </Snackbar>
    </div>
  );
}
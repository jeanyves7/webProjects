import React,{useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Paper} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Typography from "@material-ui/core/Typography";
import {useDispatch,useSelector} from "react-redux";
import { loadVResto,addVResto } from "../../actions/actions";
import SnackBar from "../snackBar/AlreadyVisitedSnackBar";
import AddIcon from '@material-ui/icons/Add';



const useStyles = makeStyles((muiBaseTheme) => ({
  root:{
    display: "grid",
    gridTemplateRows: "1fr auto",
    gridGap: "8px",
    width:"40vh",
    height:"40vh",
    backgroundRepeat:"no-repeat",
    backgroundSize: "cover",
    borderRadius:"7%",
    boxShadow: "0 8px 40px -40px rgba(255,215,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
     
    },
  },
  content: {
    alignSelf: "end",
    textAlign: "center",
    background:"gray",
    color:"white",
    opacity:"0.9",
    
    
  },
  icon: {
  color:"orange",
 

  }
}));

function RestauComponent({idresto, name,photo }) {
  const classes = useStyles();
 

  const VisitedType= useSelector(state => state.Type.VisitedType);
  const dispatch = useDispatch();

  //handle when the customer click on the visited button
  const [visited,setVisited]=useState(false)

  // if we visit the restaurant we want to load the new value
  if(visited){
    const data={
      type:VisitedType
    }
    dispatch(loadVResto(data));
    setVisited(false);
  }

  const handle = e =>{
    //this two events is to prevent to prevent the opening of the dialog 
    e.preventDefault();
    e.stopPropagation();
    
    //this var set the date to "YYYY-MM-DD"
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const data={
      idresto:idresto,
      name:name,
      visiteddate:date
    }
    console.log(data);
    // if the restaurant name and date alreadyExists in the table we don't want to dispatch the actio
      dispatch(addVResto(data));
      setVisited(true);
    
  }
  return (
    <>
      <Paper className={classes.root}  style={{ backgroundImage: `url(${photo})`}} >
          <Typography
              className={classes.content}
              variant={"h6"}
              gutterBottom>
              {name} 
            <IconButton color="primary" className={classes.icon} onClick={handle} >
              <AddIcon />
            </IconButton>
          </Typography>  
      </Paper>
    </>
    
  );
}

export default (RestauComponent);
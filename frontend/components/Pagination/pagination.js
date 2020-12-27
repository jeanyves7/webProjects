import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import {useDispatch,useSelector} from "react-redux";
import {setPage} from "../../actions/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function PaginationControlled() {
  
  const classes = useStyles();
  
  //getting the actual page from the store
  const page= useSelector(state => state.Type.page);
  //getting the total number of pages available in the backend server
  const pages=useSelector(state=>state.Restaurants.totalPages);
  
  const dispatch = useDispatch();

  //on change of 
  const handleChange = (event, value) => {
    dispatch(setPage(value)) 
  };
  return (
    <div className={classes.root}>
      <Pagination count={pages} page={page} onChange={handleChange} color="secondary" showFirstButton showLastButton  />
    </div>
  );
}
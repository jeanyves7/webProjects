import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {useDispatch,useSelector} from "react-redux";
import {setSize,setSearch} from "../../actions/actions"

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 60,
    background:"white"
  },
}));

//the current sizes
//feel free to change or append to them
const sizes=["2","4","6","8"]

export default function TypeInput() {
  const classes = useStyles();
  
  // getting the size from the GeneralSearch Reducer in the store
  const size= useSelector(state => state.Type.size);

  //state to tell us if the drop down menu is to be opened or not
  const [open, setOpen] =useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const dispatch = useDispatch();

  // function to handle the change of sizes
  const handleChange = (event) => {
    const data=event.target.value
    // setting the search field to empty
    dispatch(setSearch(""));
    dispatch(setSize(data));
  };


  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label" >size</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={size}
         onChange={handleChange}
        >
          { 
                sizes.map(size => (
                  <MenuItem key={size} value={size}>{size}</MenuItem>
              ))
          }
        </Select>
      </FormControl>
    </div>
  );
}
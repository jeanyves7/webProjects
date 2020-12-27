import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {useDispatch,useSelector} from "react-redux";
import {setType,setSearch} from "../../actions/actions"

const useStyles = makeStyles((theme) => ({
 
  formControl: {
    minWidth: 100,
    background:"white"
  },
}));

//All types used in the Application for now if we want to update the app to add more types we can simply add it to this type field
const Types=["All","Lebanese","American","Japanese","French","Italian","Mexican"]

export default function TypeInput() {
  const classes = useStyles();
 
  //getting the type from the store 
  const type= useSelector(state => state.Type.types);
  //handle drop down menu
  const [open, setOpen] =useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const dispatch = useDispatch();

  //handle the change of input
  const handleChange = (event) => {
    const data=event.target.value
    console.log(data);
    //setting the search field to an empty string
    dispatch(setSearch(""));
    //dispatching the data
    dispatch(setType(data));
  };

 
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label" >Type</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={type}
         onChange={handleChange}
        >
          {
              Types.map(type => (
                  <MenuItem key={type} value={type}>{type}</MenuItem>
              ))
          }
        </Select>
      </FormControl>
    </div>
  );
}
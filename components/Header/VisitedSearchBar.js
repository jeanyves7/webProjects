import React,{useState} from 'react';
import {AppBar,Toolbar,Box,useTheme} from '@material-ui/core';
import {useDispatch,useSelector} from "react-redux";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { fade, makeStyles } from '@material-ui/core/styles';
import TypeInput from "./typeInput";
import VisitedType from "./VisitedTypeInput";

//material ui styling for the current components
const useStyles = makeStyles((theme) => ({
  headers: {
    display:"flex",
      alignContent:"center",
      justifyContent:"center",
      alignItems:"center",
      flexDirection:`row`,
      flex:1,
  },

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
   
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();
  const theme=useTheme();
  const isMobile=useMediaQuery(theme.breakpoints.down('xs'));

  let justify;
  if(isMobile){
    justify="flex-end"
  }

return (
  <div className={classes.root}>
      <AppBar position="static" style={{background:"gray"}}> 
        <Toolbar>
            <Box  className={classes.headers} style={{justifyContent:justify}} >
              <Box p={1} >
                 <VisitedType />
              </Box>
            </Box>
      </Toolbar>
    </AppBar>
  </div>
  );
}
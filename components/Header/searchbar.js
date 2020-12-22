import React,{useState} from 'react';
import {AppBar,Toolbar,Button,InputBase,Box,useTheme} from '@material-ui/core';
import {useDispatch,useSelector} from "react-redux";
import Typography from '@material-ui/core/Typography';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import {loadResto,setPage,setSearch} from "../../actions/actions";
import TypeInput from "./typeInput";
import SizeInput from "./sizeInput";

//material ui styling for the current components
const useStyles = makeStyles((theme) => ({
  headers: {
    display:"flex",
      justifyContent:"space-between",
      alignContent:"center",
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
    }
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();
  
  // variable that store the current search value
  const searchName= useSelector(state => state.Type.search);

  // a state to store the change of the current search value
  // we created a state because we don't want to dispatch every Single character that is being typed
  // this state get the initiale value from the variable stored in the GlobalSearch Reducer
  const [current,setCurrent]=useState(searchName)
 
  const dispatch = useDispatch();
  

  //Breakpoints responsible to tell if we are in mobile forme 
  const theme=useTheme();
  const isMobile=useMediaQuery(theme.breakpoints.down("xs"));

  //function to update the value of the search name
  const updateSearch = e =>{
    setCurrent(e.target.value)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      getSearch(event);
    }
  }

  // this is onClick event to get the correspondant data
  const getSearch = e =>{
      //prevent the defualt behaviorof the page
      e.preventDefault();
      if(current!==''){
      const Name={name:current}
      //we dispatch the current search value so we don't loose it when we load the data
      dispatch(setSearch(current))
      //dispatching the name 
      dispatch(loadResto(Name));
      }
  }

  //function to display the search bar input
  const displaySearchInput = () =>{
    return ( 
    <Box  p={1}>
      <div className={classes.search}>
          <div className={classes.searchIcon}>
              <SearchIcon  />
          </div>
          <InputBase
              placeholder="Search…"
              value={current}
              onChange={updateSearch}
              onKeyDown={handleKeyDown}
              classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              inputProps={{ 'aria-label': 'search' }}
          />
      </div>
    </Box>);
  }

return (
  <div className={classes.root}>
      <AppBar position="static" style={{background:"#778899"}} >
        <Toolbar>
            <Box   className={classes.headers}>
              {!isMobile? (
                displaySearchInput()
             )
                // if we are in mobile forme we don't want to display the searchBar input 
               : <> </>}
              <Box  p={1}>
              <TypeInput />
              </Box>
              <Box p={1}>
             
              <Button style={{background:"orange"}} onClick={getSearch} >
                      <Typography >SEARCH</Typography>
                  </Button>
              </Box>
              <Box  p={1} >
              <SizeInput />
              </Box>
              
            </Box>
      </Toolbar>
    </AppBar>
    {isMobile?
        // if we are in mobile forme we want to display the search input in a second AppBar
         <AppBar position="static" >
            <Toolbar>
              <Box   className={classes.headers}>
                  {displaySearchInput()}
              </Box>
            </Toolbar>
          </AppBar>
    :<> </>
    }
  </div>
  );
}
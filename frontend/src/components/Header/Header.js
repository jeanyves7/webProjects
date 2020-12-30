import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
// import MenuIcon from '@material-ui/icons/Menu';
import { Public, ShoppingCart, Home } from '@material-ui/icons';
import { Box } from '@material-ui/core';
import { Link } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import {logOut} from "../../actions/actions"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    NavBar: {
        display:"flex",
        justifyContent: "space-around",
        width:"100%"
    },
    linkText: {
        color: "white",
        flexGrow: 1,
        textDecoration: `none`,
        textTransform: `uppercase`,
    }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const login=useSelector(state=>state.login.logIn)
  const Card= useSelector(state => state.cart.count);

 
  const dispatch=useDispatch();
  const handleLogOut=(e)=>{
    dispatch(logOut())
  }
  return (
    <div className={classes.root}>
        <AppBar position="static" className="NavBarcolor">
            <Toolbar>
                {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <Public />
                </IconButton> */}
                <Box className={classes.NavBar}>
                    <Link to="/" className={classes.linkText}>
                        <Button color="inherit">
                            <Typography variant="h6" className={classes.title}>
                                <Home />
                            </Typography>
                        </Button>
                    </Link>
                    {/* <Link to="/Chart" className={classes.linkText}>
                        <Button color="inherit">
                            <Typography variant="h6" className={classes.title}>
                                Chart
                            </Typography>
                        </Button>
                    </Link> */}
                    <Link to="/About" className={classes.linkText}>
                        <Button color="inherit">
                            <Typography variant="h6" className={classes.title}>
                                It's Feedback Time!
                            </Typography>
                        </Button>
                    </Link>
                
                    <Box className="headercontainer">
                        <Link to="/cart">
                            <Button color="inherit" className={classes.linkText}>
                                {/* <Typography variant="h6" className={classes.title}> */}
                                <Badge badgeContent={Card} color="secondary">
                                    <ShoppingCart />
                                </Badge>
                                {/* </Typography> */}
                            </Button>
                        </Link>
                        {!login?
                        <Link to="/signin">
                            <Button color="inherit" className={classes.linkText}>
                                {/* <Typography variant="h6" className={classes.title}> */}
                                    Login
                                {/* </Typography> */}
                            </Button>
                        </Link>
                        : <Link to="/signin" className={classes.linkText} onClick={handleLogOut}>
                            <Button color="inherit">
                                {/* <Typography variant="h6" className={classes.title}> */}
                                    LogOut
                                {/* </Typography> */}
                            </Button>
                        </Link>}
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    </div>
  );
}
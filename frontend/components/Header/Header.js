import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import { Public } from '@material-ui/icons';
import { Box } from '@material-ui/core';
import { Link } from "react-router-dom";

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
        flex: 0.5,
        justifyContent: "space-around"
    },
    linkText: {
        color: "white",
        textDecoration: `none`,
        textTransform: `uppercase`,
    }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <Public />
                </IconButton>
                <Box className={classes.NavBar}>
                    <Link to="/" className={classes.linkText}>
                        <Button color="inherit">
                            <Typography variant="h6" className={classes.title}>
                                Home
                            </Typography>
                        </Button>
                    </Link>
                    <Link to="/Chart" className={classes.linkText}>
                        <Button color="inherit">
                            <Typography variant="h6" className={classes.title}>
                                Chart
                            </Typography>
                        </Button>
                    </Link>
                    <Link to="/About" className={classes.linkText}>
                        <Button color="inherit">
                            <Typography variant="h6" className={classes.title}>
                                About us
                            </Typography>
                        </Button>
                    </Link>
                </Box>
                <Box>
                    <Link to="/cart" className={classes.linkText}>
                        <Button color="inherit">
                            <Typography variant="h6" className={classes.title}>
                                Cart
                            </Typography>
                        </Button>
                    </Link>
                    <Link to="/signin" className={classes.linkText}>
                        <Button color="inherit">
                            <Typography variant="h6" className={classes.title}>
                                Login
                            </Typography>
                        </Button>
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    </div>
  );
}
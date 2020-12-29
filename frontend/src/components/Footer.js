import React from "react";
import {Box, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Twitter, Facebook, Instagram, LinkedIn } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    upperContainer: {
        backgroundImage: "linear-gradient(to right, #6a11cb 0%, #2575fc 100%)",
        color: "white",
        height: "30vh",
        textAlign: "center",
        alignItems: "center"
    },
    lowerContainer: {
        height: "5vh",
        background: "linear-gradient(to top, #09203f 0%, #537895 100%)",
        textAlign: "left",
        alignItems: "center",
        paddingRight: "10%"
    },
    bar: {
        listStyleType: 'none',
        display: "flex",
        justifyContent: "space-around"
    },
    social: {
        textAlign: "center",
        marginLeft: "15%"
    }
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <footer>
            <Grid container className={classes.upperContainer}>
                <Grid item p={2} xs={1}>
                    <h2>E-tech</h2>
                </Grid>
                <Grid item xs={5}>
                    <ul className={classes.bar}>
                        <li>Home</li>
                        <li>About us</li>
                    </ul>
                </Grid>
                <Grid item xs={4} className={classes.social}>
                    <Twitter />
                    <Instagram />
                    <LinkedIn />
                    <Facebook />
                </Grid>                
            </Grid>
            <Box className={classes.lowerContainer}>
                <p style={{ margin:"0",color:"white" }}>2020 © E-tech All Rights Reserved.</p>
            </Box>
        </footer>
    );
}
import React from "react";
import {Box, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Twitter, Facebook, Instagram, LinkedIn } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    upperContainer: {
        background: "rgb(187,84,37)",
        height: "30vh",
        textAlign: "center",
        alignItems: "center"
    },
    lowerContainer: {
        height: "10vh",
        background: "rgb(81,18,6)",
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
        <div>
            <Grid container className={classes.upperContainer}>
                <Grid item p={2} xs={1}>
                    <h2>IRD</h2>
                </Grid>
                <Grid item xs={5}>
                    <ul className={classes.bar}>
                        <li>Home</li>
                        <li>Chart</li>
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
                <p style={{ margin:"0",color:"white" }}>2020 © IRD All Rights Reserved.</p>
            </Box>
        </div>
    );
}
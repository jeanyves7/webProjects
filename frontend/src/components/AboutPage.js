import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField, Paper } from '@material-ui/core';
import Contact from "./About/Contactform";
import Footer from './Footer';
import ButtonAppBar from './Header/Header';

const useStyles = makeStyles((theme) => ({
    maincontainer: {
        display:"flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(https://wallpaperaccess.com/full/175640.jpg)`, 
        backgroundRepeat:"no-repeat",
        backgroundSize: "cover",
        width: "100%",
        minHeight: "100vh",
        // opacity : "0.5",
    },
}));

export default function AboutPage() {

    const classes = useStyles();

    return (
        <>
            <ButtonAppBar />
            <div className={classes.maincontainer}>
                <Grid>
                    <Grid item xs={12} sm={8} style={{margin:"auto"}}>
                    <Contact />
                    </Grid>
                </Grid>
            </div>
            <Footer />
        </>
    );
}
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField, Paper, FormLabel,TextareaAutosize } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    papercontent : {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
        width: "60%"
    },
    formcontent: {
        "& .MuiInputBase-root" : {
            wdith: "80%",
            margin: theme.spacing(1)
        }
    },
    textfields: {
        width:"100%"
    }
}));

export default function Contact() {

    const classes = useStyles();

    return (
        <Paper className={classes.papercontent}>
            <h2 style={{ marginBottom:"50px" }} >Send us Your Feedback</h2>
            <form className={classes.formcontent}>
                <Grid container>
                    <Grid item xs={3}>
                        <FormLabel>First Name: </FormLabel>
                    </Grid>
                    <Grid item xs={9}>
                        <TextField className={classes.textfields} variant="outlined" label="First Name" />
                    </Grid>

                    <Grid item xs={3}>
                        <FormLabel>Last Name: </FormLabel>
                    </Grid>
                    <Grid item xs={9}>
                        <TextField className={classes.textfields} variant="outlined" label="Last Name" />
                    </Grid>

                    <Grid item xs={3}>
                        <FormLabel>Contact Tel :</FormLabel>
                    </Grid>
                    <Grid item xs={9}>
                        <Grid item xs={2}>
                            <TextField className={classes.textfields} variant="outlined" label="Area Code" />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField className={classes.textfields} variant="outlined" label="Tel. number" />
                        </Grid>
                    </Grid>

                    <Grid item xs={3}>
                        <FormLabel>Email :</FormLabel>
                    </Grid>
                    <Grid item xs={9}>
                        <TextField className={classes.textfields} variant="outlined" label="Email" />
                    </Grid>

                    <Grid item xs={3}>
                        <FormLabel>Feedback :</FormLabel>
                    </Grid>
                    <Grid item xs={9}>
                        <TextareaAutosize className={classes.textfields} rowsMin={3} variant="outlined" placeholder="Empty" />
                    </Grid>
                </Grid>
            </form>
        </Paper>
    );
}
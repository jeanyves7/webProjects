import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField, Paper, FormLabel,TextareaAutosize } from '@material-ui/core';
import {useDispatch,useSelector} from "react-redux";

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

    const idc=useSelector(state=> state.login.idC)

    const [firstName,setFName]=useState("");
    const [lastName,setLName]=useState("");
    const [Email,SetEmail]=useState("");
    const [num,setNum]=useState("");
    const [feed,setFeed]=useState("");

    const handleF=(e)=>{
        setFName(e.target.value)
    }

    const handleL=(e)=>{
        setLName(e.target.value);
    }

    const handleEmail=(e)=>{
        SetEmail(e.target.value);
    }

    const handleNum=(e)=>{
        setNum(e.target.value);
    }

    const handleFeed=(e)=>{
        setFeed(e.target.value);
    }

    const handleSubmit=(e)=>{
        const data={
            idC:idc,
            email:Email,
            firstN:firstName,
            lastN:lastName,
            feedback:feed,
        }
    }

    return (
        <Paper className={classes.papercontent}>
            <h2 style={{ marginBottom:"50px" }} >Send us Your Feedback</h2>  <button onClick={handleSubmit} >submit</button>
            <form className={classes.formcontent}>
                <Grid container>
                    <Grid item xs={3}>
                        <FormLabel>First Name: </FormLabel>
                    </Grid>
                    <Grid item xs={9}>
                        <TextField className={classes.textfields} variant="outlined" label="First Name" onChange={handleF} />
                    </Grid>

                    <Grid item xs={3}>
                        <FormLabel>Last Name: </FormLabel>
                    </Grid>
                    <Grid item xs={9}>
                        <TextField className={classes.textfields} variant="outlined" label="Last Name" onChange={handleL} />
                    </Grid>

                    <Grid item xs={3}>
                        <FormLabel>Contact Tel :</FormLabel>
                    </Grid>
                    <Grid item xs={9}>
                        <Grid item xs={2}>
                            <TextField className={classes.textfields} variant="outlined" label="Area Code" />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField className={classes.textfields} variant="outlined" label="Tel. number" onChange={handleNum} />
                        </Grid>
                    </Grid>

                    <Grid item xs={3}>
                        <FormLabel>Email :</FormLabel>
                    </Grid>
                    <Grid item xs={9}>
                        <TextField className={classes.textfields} variant="outlined" label="Email" onChange={handleEmail} />
                    </Grid>

                    <Grid item xs={3}>
                        <FormLabel>Feedback :</FormLabel>
                    </Grid>
                    <Grid item xs={9}>
                        <TextareaAutosize className={classes.textfields} rowsMin={3} variant="outlined" placeholder="Empty" onChange={handleFeed} />
                    </Grid>
                   
                </Grid>
            </form>
        </Paper>
    );
}
import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField, Paper, FormLabel,TextareaAutosize } from '@material-ui/core';
import {useDispatch,useSelector} from "react-redux";
import {sendFeed, setEmail,herokuFeed} from "../../actions/actions"
import { Link } from "react-router-dom";
import { Map, GoogleApiWrapper } from 'google-maps-react';

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
    const [number,setNum]=useState("");
    const [feed,setFeed]=useState("");

    const dispatch=useDispatch();

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
            fname:firstName,
            lname:lastName,
            email:Email,
            num:number,
            feedback:feed,
        }
        
        console.log(data)
        const data2={
            feedback:feed
        }
        dispatch(herokuFeed(data2))
        dispatch(sendFeed(data))
        setFName("")
        setLName("")
        setNum("")
        setEmail("")
        setFeed("")
    }

    return (
        <Paper className={classes.papercontent} style={{opacity: 0.8}}>
           
            <h2 style={{ marginBottom:"50px" }} >Send us Your Feedback</h2> 

            <div style={{ marginBottom:"50px" }}>
                <iframe width="100%" height="300" frameborder="0.5" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Mansourieh%20+(Etech%20Store)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> 
                <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=a669630dd434e9e054631a2f4dd55b23ef807e17'></script>
            </div>
            
            <form className={classes.formcontent}>
                <Grid container style={{ marginBottom:"50px", alignItems:"center" }}>
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
                        <FormLabel> Contact Tel :</FormLabel>
                    </Grid>
                    <Grid item xs={9}>
                        <Grid item xs={3}>
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
                        <TextareaAutosize className={classes.textfields} rowsMin={3} variant="outlined" placeholder="Type in your feedback please" onChange={handleFeed} />
                    </Grid>
                   
                </Grid>
            </form>
            <Link to="/" style={{display: "flex", justifyContent: 'flex-end'}}>
            <button onClick={handleSubmit} >submit</button>
            </Link>
        </Paper>
    );
}

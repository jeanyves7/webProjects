import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
    Paper,
    IconButton,
    Grid,
    Typography,
} from "@material-ui/core";
import {Home} from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
      },
    RestoContainer:{
        paddingTop:"20px",
        paddingLeft:"20px",
        paddingRight:"50px",
        justifyContent:"center",
        alignItems:"center"
    },
    root:{
        background:"#757C88",
      
    },
    images:{
        width:"75%",
        heigh:"75%",
        borderRadius:"50%",
        
    }
}))

const Info = ({name,type,cost,addrss,num,image,close}) =>{
   
    // preparing the fields that will be displayed
    const attributes=["Name: "+name,"Type: "+type,"Cost for two: "+cost,"Address: "+addrss,"Call us: "+num]
    const classes = useStyles();

    // funstion to print a gap between the papers
    const gap = () => {
        //constant to represent the gap between the attributes
        const spaceGap=[1,1,1];
        return (
        <Paper elevation={0}>
                {spaceGap.map(i=>(<Typography variant={"h4"} style={{background:"#757C88",paddingTop:"20px"}}/> ))}
        </Paper>
        );
    }

    //function responsible to fill the info with the correct data
    const fill = (text) =>{
        return (
        <>
        {gap()}
        <Paper  elevation={3} >
            <Typography variant={"h4"} style={{background:"white",borderRadius:"10%"}} color="primary"> {text} </Typography>
        </Paper>
        </>
        );
    }

    
return (
        <>
        <div className={classes.root}>
            <Grid container spacing={4} flexwrap="no-wrap"  className={classes.RestoContainer}>
                    <Grid item xs={6} >
                        <img className={classes.images} src={image}  alt=""/> 
                    </Grid>
                <Grid item xs={12} md={6}>
                {attributes.map(atr=>(
                    // displaying the info 
                    fill(atr)
                ))}
                {gap()}
                <IconButton  color="primary" style={{background:"white"}} onClick={close} >
                    <Home/>
                    <Typography variant={"h4"}  color="primary"> Home </Typography>
                </IconButton>
                {gap()}
                </Grid>
            </Grid>
        </div>
        </>
    );
}

export default Info;
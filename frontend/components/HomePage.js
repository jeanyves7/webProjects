import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from "./Card/Cards";
import {  Dialog,Box,Slide, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    maincontainer: {
        display:"flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(https://images7.alphacoders.com/313/thumb-1920-313724.jpg)`, 
        backgroundRepeat:"no-repeat",
        backgroundSize: "cover",
        width: "100%",
        minHeight:"100vh",
        // opacity : "0.5",
    },
    Cont:{
        paddingTop:"20px",
        paddingLeft:"100px",
        paddingRight:"100px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexFlow:"row wrap"    
      },
}));

const liste=[
    {A:"B",title:"Baalbak",description:"Jupiter, Venus, Mercury and Bacchus were worshipped at the site during Roman times",img:"/Gallery/baalbak.jpg"},
    {A:"S",title:"Sannine",description:"It is the birthplace of notable Lebanese artists, writers, and politicians such as Amin Maalouf, Mikhail Naïmeh, and Georges Hobeika.",img:"/Gallery/sanine.jpg"},
    {A:"T",title:"Tyre",description:"Tyre is  one of the 11 Phoenician cities and towns that are still inhabited.",img:"/Gallery/Tyre.jpg"},
    {A:"J",title:"Jbeil",description:" Byblos is one of the 20 oldest cities in the world. It has been continuously inhabited ever since it was established in 5,000 B.C.",img:"/Gallery/jbeil.jpg"},
    {A:"T",title:"Tannourine",description:"Nestled in the mountains, Tannourine is located just over 70km north of Beirut. Take the coastal road in the direction of Tripoli. After passing Byblos, continue towards Batroun and exit the highway onto the Batroun-Tannourine Road. The town is signposted from there on.",img:"/Gallery/tanourine.jpg"},
    {A:"E",title:"Ehden",description:"The remote wilderness of parts of Horsh Ehden and of the adjacent mountain areas provides the ideal setting for walks and other outdoor activities.",img:"/Gallery/ehden.jpg"}
]

export default function Home() {
    const classes = useStyles();
    return (
        <div className={classes.maincontainer} > 
        <Box className={classes.Cont}>
           {
               liste.map(re => (
                   <Box p={1} m={1} >
                    <Card av={re.A} titl={re.title} description={re.description} img={re.img} />     
                    </Box>
               ))
           }
        </Box>
        </div>
    );
}
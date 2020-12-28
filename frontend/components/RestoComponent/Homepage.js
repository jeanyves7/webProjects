import React , {useEffect,useState} from 'react';
import Pagina from '../Pagination/pagination';
import {  Dialog,Box,Slide, Typography} from "@material-ui/core";
import {useDispatch,useSelector} from "react-redux";
import { makeStyles} from "@material-ui/core/styles";
import SearchAppBar from "../Header/searchbar";
import {Link} from "react-router-dom";
import Info from "./ItemInfo";
import {loadItem,setPage} from "../../actions/actions";
import Loader from "../loader/loaders";
import SnackBar from "../snackBar/RestosnackBars";
import Card from "../Card/Cards";
import Footer from '../Footer';
import ButtonAppBar from '../Header/Header';

const useStyles=makeStyles({
    appBar: {
        position: 'relative',
      },
    RestoContainer:{
      paddingTop:"20px",
      paddingLeft:"100px",
      paddingRight:"100px",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      flexFlow:"row wrap"    
    },
    loader:{
      paddingTop:"20px",
      paddingLeft:"100px",
      paddingRight:"100px",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      flexFlow:"row wrap"
    },
    pol:{
      paddingTop:"10px",
      display:"flex",
      flex:1,
      justifyContent:"center",
    },
    linkText: {
        textDecoration: `none`,
      },
      content:{
        paddingTop:"300px",
        justifyItems:"center",
        alignItems:"center",
        justifyContent:"center",
        textAlign:"center",
      }
      
})


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const HomePage = () =>{

    const classes=useStyles();
    
    // this selector fetch for us the stored restaurants
    const Items = useSelector(state => state.Restaurants.Items);
    

  
    //This loading state is for the loaders
    const Loading=useSelector(state=>state.Restaurants.loading);
    
    //States responsable for displaying the current type and page and size per page
    const type= useSelector(state => state.Type.types);
    const page= useSelector(state => state.Type.page);
    const size= useSelector(state => state.Type.size);
    



    const dispatch = useDispatch();

    //Dialog section:
    //this state to handle the opening dialog
    const [open, setOpen] = useState(0);
    
    //seting the opening dialog to the restaurant id that we clicked on
    const handleClickOpen = par => {
      setOpen(par)
    };

    const handleClose = () => {
      setOpen(false);
    };

    const empty=(Items.length===0)
  //we render the new data based on the current type  
  useEffect(()=>{
   getRestos();
  },[page])
  
  // we render the data based on the new type and from the first page
  useEffect(()=>{
    dispatch(setPage(1));
    getRestos();
   },[type])
   // we render based on the size selected 
   useEffect(()=>{
    dispatch(setPage(1));
    getRestos();
   },[size])
  
  //function to dispatch the restaurants based on type and current page
  const getRestos =() =>{
      const data={
        type:type,
        page:page,
        size:size
      }
      dispatch(loadItem(data))
  }


  //this condition is to show if we are fetching the data to show the loaders
  
    return (
       <>
       <ButtonAppBar />
        <SnackBar />
        <SearchAppBar />
    
        {!empty ?
          <> 
        <Box  spacing={5} className={classes.RestoContainer} >
        {console.log(Items)}
          {Items.map(items=>(
              
              <Box   p={1} m={1} key={items.id}>
                  <Link onClick={()=>handleClickOpen(items.id)} to="" className={classes.linkText} >
                         <Card  className={classes.linkText} key={items.id} id={items.id} av={(items.type)[0]} titl={items.name} img={items.img} description={items.description} price={items.price} />
                  </Link>
                  <Dialog fullScreen open={open===items.id} onClose={handleClose} TransitionComponent={Transition} key={1} >
                      <Info  key={items.id}  name={items.name} type={items.type} cost={items.price}  description={items.description} image={items.img} close={handleClose}  />
                  </Dialog>
              </Box>
         ))}
        </Box>
        <Box  display="flex" style={{textAlign:"center"}} >
            <Box   margin="auto">
                <Pagina />
            </Box>
        </Box>
        </>
        :
   
  <Box className={classes.content}>
     {console.log(Items)}
    <Typography variant="h5" > No content was found :'( </Typography>
  </Box>
  }
  <Footer />
   </>
    );
          }

export default HomePage;
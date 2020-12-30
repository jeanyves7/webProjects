import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import {Box} from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddIcon from '@material-ui/icons/Add';
import {addCart,setCount} from "../../actions/actions";
import {useDispatch,useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    color:"gray",
    height:"400px",
    borderRadius:"10%",
    boxShadow: "0px 5px 20px rgb(71,71,71)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
     
    },
  
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard({id,av,titl,description,img,price}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const login=useSelector(state=>state.login.logIn)
  const idc=useSelector(state=>state.login.idC)
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const dispatch = useDispatch();
  const handleAdd = e =>{
    //this two events is to prevent to prevent the opening of the dialog 
    e.preventDefault();
    e.stopPropagation();
    const data={
        idC:idc,
        idI:id,
        img:img,
        name:titl,
        price:price,
        qty:1
    }
    dispatch(setCount())
    dispatch(addCart(data));
  }

  console.log("logged: "+login)

  useEffect(()=>{},login)

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {av}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={titl}
      />
      <div className="imgcontainer">
        <img src={img} alt=""></img>
      </div>
      {/* // <CardMedia
      //   className={classes.media}
      //   image={img}
      //   title="Paella dish"
      // /> */}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      {login ?
      <CardActions >
        <Box  style={{display:"flex",flex:1,justifyContent:"space-around"}} >
        <Typography  color="primary"  style={{marginTop:"3%"}} >Add to cart</Typography>
        <IconButton color="primary" onClick={handleAdd} >
          <AddIcon style={{marginRight:"10%"}} />
        </IconButton>
        </Box>
      </CardActions>
      :
      <></>
      }
    </Card>
    
  );
}
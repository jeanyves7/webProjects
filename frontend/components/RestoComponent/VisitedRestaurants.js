import  React, {useEffect}  from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {loadVResto} from "../../actions/actions";
import {useDispatch,useSelector} from "react-redux";
import  moment from "moment";
import SnackBar from "../snackBar/VisitedSnackBar";
import Loader from "../loader/loaders";
import SearchBar from "../header/VisitedSearchBar";

const columns = [
  { field: 'name',width: 180,
  
    },
  { field: 'VisitedDate', type: 'date', width: 200,
  }
];

export default function VisitedRestaurants() {

  //loading the Visited Restaurants from the backend
  const VRestos = useSelector(state => state.Visited.Visited);
  const loading = useSelector(state => state.Visited.loading);
  const VisitedType= useSelector(state => state.Type.VisitedType);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    getVisited();
  },[VisitedType])

  const getVisited =() =>{
    const data={
      type:VisitedType
    }
    dispatch(loadVResto(data));
  }
  
  
  let UVRestos=[]
  if(typeof(VRestos)==='object'){
   UVRestos=VRestos.map(resto =>({
    id:resto.id,
    name:resto.name,
    VisitedDate:(moment(resto.visiteddate,'YYYY-MMDD').format('MMMM Do YYYY'))
  } ))}

  //if we still loading the data we want to show loaders
 if(loading){
   return (
    <Loader />
   );
 }else{
  return (
    <>
    <SnackBar />
    <SearchBar />
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid  rows={UVRestos} columns={columns} />
    </div>
    </>
  );
 }
}


import {takeLatest, call, put} from 'redux-saga/effects'
import {LOAD_RESTO,setResto,loadingResto,setRestoError,setTotalPages} from "../actions/actions"
import {getRestos,getNRestos} from "../api/apiCalls";

//watcher that will be pass the to the root saga
//watching if any load all restaurants event is being dispatched
export function* LoadRestosWatcher(){
    yield takeLatest(LOAD_RESTO,LoadRestoFlow)
}

function* LoadRestoFlow(action){
   let Resto;
   // when a dispatch has been made we set the loaders to appear
   let isloading=true;
   yield put(loadingResto(isloading));
   try{
    // the statement is to check wether we are requesting types,sizes,another pages or we simply want to search to a name
    // if length = 1 => we are requesting a name 
    if(Object.keys(action.action).length!=1){
        Resto= yield call(getRestos,{action});
   }
   else{
       Resto= yield call(getNRestos,{action});
   }
   //once data has arrived we hide the loaders and put the corresponding data
    isloading=false;

    //Resto.content contains an array of the data
    yield put(setResto(Resto.content));
    
    //Resto.TotalPages is the number of pages corresponding to a specific size per page
    yield put(setTotalPages(Resto.totalPages))
    yield put(loadingResto(isloading));
   }
   // if an error occures we will show it using a snacKBar 
   catch (error){
    isloading=false;
    yield put(loadingResto(isloading));
    //setting the snackBar to be visible
    yield put(setRestoError(true));
    return;
   }
}
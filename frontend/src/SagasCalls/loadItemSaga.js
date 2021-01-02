import {takeLatest, call, put} from 'redux-saga/effects'
import {LOAD_ITEM,setItem,loadingItem,setTotalPages} from "../actions/actions"
import {getItems,getNItems} from "../api/apiCalls";

//watcher that will be pass the to the root saga
//watching if any load all restaurants event is being dispatched
export function* LoadItemWatcher(){
    yield takeLatest(LOAD_ITEM,LoadItemFlow)
}

function* LoadItemFlow(action){
   let items;
   // when a dispatch has been made we set the loaders to appear
   let isloading=true;
   yield put(loadingItem(isloading));
   try{
    // the statement is to check wether we are requesting types,sizes,another pages or we simply want to search to a name
    // if length = 1 => we are requesting a name 
    if(Object.keys(action.action).length!=1){
        items= yield call(getItems,{action});
   }
   else{
    items= yield call(getNItems,{action});
   }
   //once data has arrived we hide the loaders and put the corresponding data
    isloading=false;

    //Resto.content contains an array of the data
    yield put(setItem(items.content));
    
    //Resto.TotalPages is the number of pages corresponding to a specific size per page
    yield put(setTotalPages(items.totalPages))
    yield put(loadingItem(isloading));
   }
   // if an error occures we will show it using a snacKBar 
   catch (error){
    isloading=false;
    yield put(loadingItem(isloading));
    //setting the snackBar to be visible
   
    return;
   }
}
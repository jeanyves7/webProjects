import {takeLatest, call, put} from 'redux-saga/effects'
import {ADD_CART,setCart} from "../actions/actions"
import {addCart} from "../api/apiCalls"

export function* CartWatcher(){
    yield takeLatest(ADD_CART,CartWorker)
}

function* CartWorker(action){
    try{
        const dat=action.payload;
        const cart=yield call(addCart,dat)
        console.log("ADD "+cart)
    }catch(error){
        console.log(error);
    }
}
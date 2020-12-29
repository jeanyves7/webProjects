import {takeLatest, call, put} from 'redux-saga/effects';
import {UPDATE_CART,setCart} from "../actions/actions";
import {UpdateCart} from "../api/apiCalls"

export function* UpdateWatcher(){
    yield takeLatest(UPDATE_CART,UpdateWorker)
}

function* UpdateWorker(action){
    try{
        const cart=yield call(UpdateCart,{action})
        yield put(setCart(cart))
    }catch(error){
        console.log(error)
    }
}
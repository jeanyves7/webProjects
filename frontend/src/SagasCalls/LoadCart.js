import {takeLatest, call, put} from 'redux-saga/effects'
import {LOAD_CART,setCart} from "../actions/actions"
import {loadCart} from "../api/apiCalls"

export function* LoadCartWatcher(){
    yield takeLatest(LOAD_CART,LoadCartWorker)
}

function* LoadCartWorker(){
    try{
        const dat=yield call(loadCart)
        yield put(setCart(dat))
    }catch(error){
        console.log(error)
    }
}
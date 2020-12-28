import {takeLatest, call, put, take} from 'redux-saga/effects'
import {PURCHASED,setCart} from "../actions/actions"
import {purchased} from "../api/apiCalls"


export function* PurchaseWatcher(){
    yield takeLatest(PURCHASED,PurchasedWorker)
}

function* PurchasedWorker(action){
    try{
        const dat=action.payload;
        const res=yield call(purchased,dat)
        yield put(setCart(res))
    }catch(error){
        console.log(error)
    }
}
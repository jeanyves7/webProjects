import {takeLatest, call, put} from 'redux-saga/effects'
import {DELETE_ITEM,setCart} from "../actions/actions"
import {deleteItem} from "../api/apiCalls"

export function* DeleteWatcher(){
    yield takeLatest(DELETE_ITEM,DeleteWorker)
}

function* DeleteWorker(action){
    try{
        const cart=yield call(deleteItem,{action})
        yield put(setCart(cart))
    }catch(error){
        console.log(error)
    }
}
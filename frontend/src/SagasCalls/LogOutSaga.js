import {takeLatest, call, put} from 'redux-saga/effects'
import {LOG_OUT,setIdClient,setOut,setEmail} from "../actions/actions"
import {logOut} from "../api/apiCalls"

export function* LogOutWatcher(){
    yield takeLatest(LOG_OUT,LogOutWorker)
}

function* LogOutWorker(){
    try{
        const logo=yield call(logOut)
        yield put(setOut())
        yield put(setIdClient(0))
        yield put(setEmail(""))

    }catch(error){
        console.log(error);
    }
}
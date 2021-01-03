import {takeLatest, call, put} from 'redux-saga/effects'
import {CHECK_IN,setIn,setIdClient,setEmail,setConnError,setFname,setLname,setErrorLog,setSuccesLog} from "../actions/actions"
import {CheckLogIn,checkClient} from "../api/apiCalls"

export function* checkInWatcher(){
    yield takeLatest(CHECK_IN,checkInWorker)
}

function* checkInWorker(action){
    let loge=[];
    try{
        if(Object.keys(action.payload).length!=1){
            loge=yield call(CheckLogIn,{action})
            if(loge.length!=0){
                yield put(setSuccesLog(true))
            }else{
                yield put(setErrorLog(true))
            }
        }else{
            loge=yield call(checkClient)
        }
        if(loge.length!=0){
            console.log("in set in")
            yield put(setIn());
            yield put(setIdClient(loge.idC)) 
            yield put(setEmail(loge.email))
          
        }
    }catch(error){
        console.log(error);
        yield put(setConnError(true))
    }
}
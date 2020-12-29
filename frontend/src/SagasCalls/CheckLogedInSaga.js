import {takeLatest, call, put} from 'redux-saga/effects'
import {CHECK_IN,setIn,setIdClient,setEmail,setFname,setLname} from "../actions/actions"
import {CheckLogIn,checkClient} from "../api/apiCalls"

export function* checkInWatcher(){
    yield takeLatest(CHECK_IN,checkInWorker)
}

function* checkInWorker(action){
    let loge=[];
    console.log("in logged")
    console.log(action.payload)
    console.log(Object.keys(action.payload).length)
    try{
        if(Object.keys(action.payload).length!=1){
            console.log("calling check")
           
            loge=yield call(CheckLogIn,{action})
            console.log(loge);
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
    }
}
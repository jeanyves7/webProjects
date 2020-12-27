import {takeLatest, call, put} from 'redux-saga/effects'
import {CHECK_IN,setIn} from "../actions/actions"
import {CheckLogIn} from "../api/apiCalls"

export function* checkInWatcher(){
    yield takeLatest(CHECK_IN,checkInWorker)
}

function* checkInWorker(action){
    let loge;
    console.log(action)
    try{
        loge=yield call(CheckLogIn,{action})
        console.log("here log ");
        console.log(loge)
        if(loge.length!=0){
            console.log("in set in")
            yield put(setIn());
        }
    }catch(error){
        console.log(error);
    }
}
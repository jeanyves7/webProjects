import {takeLatest, call, put} from 'redux-saga/effects'
import {HEROKU_FEED,setNeutre,setPos,setNeg} from "../actions/actions"
import {feedResult} from "../api/apiCalls"

export function* HerokuWatcher(){
    yield takeLatest(HEROKU_FEED,HerokuWorker)
}

function* HerokuWorker(action){
    try{
        const feed=yield call(feedResult,{action})
      
        if(feed.success==="positive"){
            yield put(setPos(true))
        }else if(feed.success==="negative"){
            yield put(setNeg(true))
        }else{
            yield put(setNeutre(true))
        }
      
    }catch(error){
        console.log(error)
    }
}
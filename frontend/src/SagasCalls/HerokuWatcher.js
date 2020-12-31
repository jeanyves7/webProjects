import {takeLatest, call, put} from 'redux-saga/effects'
import {HEROKU_FEED} from "../actions/actions"
import {feedResult} from "../api/apiCalls"

export function* HerokuWatcher(){
    yield takeLatest(HEROKU_FEED,HerokuWorker)
}

function* HerokuWorker(action){
    try{
        const feed=yield call(feedResult,{action})
       console.log(feed.success)
    }catch(error){
        console.log(error)
    }
}
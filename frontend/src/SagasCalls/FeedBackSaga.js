import {takeLatest, call, put} from 'redux-saga/effects'
import {SEND_FEED} from "../actions/actions"
import {feedBack} from "../api/apiCalls"

export function* FeedBackWatcher(){
    yield takeLatest(SEND_FEED,FeedBackWorker)
}

function* FeedBackWorker(action){
    try{
        const dat=action.payload;
        const feed=yield call(feedBack,dat)
    }catch(error){
        console.log(error);
    }
}
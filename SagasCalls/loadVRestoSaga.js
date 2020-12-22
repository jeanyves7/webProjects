import {takeLatest, call, put} from 'redux-saga/effects'
import {LOAD_VRESTO,setVResto,loadingVResto,setVisitedError} from "../actions/actions"
import {getVRestos} from "../api/apiCalls";


//Loading visited restaurants watcher 
export function* LoadVRestosWatcher(){
    yield takeLatest(LOAD_VRESTO,LoadVRestoFlow)
}

function* LoadVRestoFlow(action){
    let isLoading=true;
    let Resto=[];
    // when a dispatch has been made we set the loaders to appear
    yield put(loadingVResto(isLoading));
    try{
            Resto= yield call(getVRestos,{action})
            //once data is received we want to hide the loaders and set the data to the store
            isLoading=false;
            yield put(setVResto(Resto))
            yield put(loadingVResto(isLoading));

    }catch (error){
        console.log("error")
        isLoading=false;
        yield put(setVisitedError(true));
        yield put(loadingVResto(isLoading));
        console.log(error);
    }
}
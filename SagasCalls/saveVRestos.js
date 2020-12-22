import {takeLatest, call, put} from 'redux-saga/effects'
import {ADD_VRESTO,setRestoError,setDuplicateError,setSuccessSave} from '../actions/actions'
import { postVRestos } from '../api/apiCalls'

//watchers for the add restaurants action
export function* saveRestoWatcher(){
  yield takeLatest(ADD_VRESTO, saveRestoFlow)
}

function* saveRestoFlow(action) {
  try{
  //making the api call
  const dat=action.payload;
  const save=yield call(postVRestos, dat);
  if(save.length===0){
    yield put(setDuplicateError(true))
  }else{
    yield put(setSuccessSave(true))
  }
  }
  // if an error occures we will show it using a snacKBar
  catch(error){
    yield put(setRestoError(true))
    return;
  }
}
import {call,all} from 'redux-saga/effects'
import {LoadRestosWatcher} from "./loadItemSaga";
import {LoadVRestosWatcher} from "./loadVRestoSaga";
import {saveRestoWatcher} from "./saveVRestos";
import {checkInWatcher} from "./CheckLogedInSaga"
import {SignUpWatcher} from "./SignUpReducer"

//root saga containg all the watchers needed in our application
export function* rootSaga(){
    yield all([
        call(LoadRestosWatcher),
        call(LoadVRestosWatcher),
        call(saveRestoWatcher),
        call(checkInWatcher),
        call(SignUpWatcher),
    ]);
}
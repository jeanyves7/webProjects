import {call,all} from 'redux-saga/effects'
import {LoadItemWatcher} from "./loadItemSaga";
import {checkInWatcher} from "./CheckLogedInSaga"
import {SignUpWatcher} from "./SignUpReducer"
import {CartWatcher} from "./CartSaga"
import {LoadCartWatcher} from "./LoadCart"
import {UpdateWatcher} from "./UpdateCart"
import {DeleteWatcher} from "./DeleteItem"
import {PurchaseWatcher} from "./Purchased"
import {LogOutWatcher} from "./LogOutSaga"
import {FeedBackWatcher} from "./FeedBackSaga"
import {HerokuWatcher} from "./HerokuWatcher"

//root saga containg all the watchers needed in our application
export function* rootSaga(){
    yield all([
        call(LoadItemWatcher),
        call(checkInWatcher),
        call(SignUpWatcher),
        call(CartWatcher),
        call(LoadCartWatcher),
        call(UpdateWatcher),
        call(DeleteWatcher),
        call(PurchaseWatcher),
        call(LogOutWatcher),
        call(FeedBackWatcher),
        call(HerokuWatcher)
        
    ]);
}
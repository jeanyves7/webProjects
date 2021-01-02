
import Items from "./ItemReducer";
import {combineReducers} from "redux";
import Type from "../Reducers/GeneralSearchReducer";
import Cart from "../Reducers/CartReducer";
import LogIn from "../Reducers/LogInReducer" ;
import Feed from "../Reducers/feedBackReducer"

//combining all the reducers before passing them to the store
const allReducers =combineReducers({
    Item: Items,
    //Type refer to the general search reducer
    Type:Type,
    cart:Cart,
    login:LogIn,
    Feedback:Feed
})

export default allReducers;
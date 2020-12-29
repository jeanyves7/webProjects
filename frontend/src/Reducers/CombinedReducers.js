
import Restos from "./ItemReducer";
import {combineReducers} from "redux";
import Type from "../Reducers/GeneralSearchReducer";
import Cart from "../Reducers/CartReducer";
import LogIn from "../Reducers/LogInReducer" ;

//combining all the reducers before passing them to the store
const allReducers =combineReducers({
    Restaurants: Restos,
    //Type refer to the general search reducer
    Type:Type,
    cart:Cart,
    login:LogIn,
})

export default allReducers;
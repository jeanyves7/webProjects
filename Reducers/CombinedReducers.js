import VisitedReducer from "./VisitedReducer";
import Restos from "./RestaurantReducer";
import {combineReducers} from "redux";
import Type from "../Reducers/GeneralSearchReducer";

//combining all the reducers before passing them to the store
const allReducers =combineReducers({
    Restaurants: Restos,
    Visited: VisitedReducer,
    //Type refer to the general search reducer
    Type:Type
})

export default allReducers;
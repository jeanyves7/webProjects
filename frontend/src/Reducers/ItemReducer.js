import {SET_ITEM,LOADING_ITEM_DATA,SET_TOTAL_PAGES} from "../actions/actions";

//initial state for the Restaurants components and pagination
const initial ={
    Items:[],
    totalPages:10,
    loading:true,
}

const RestaurantsReducer = (state=initial,action)=>{
    switch(action.type){
        case SET_ITEM:
            return{...state, Items:action.payload}
        case SET_TOTAL_PAGES:
            return {...state,totalPages:action.payload}
        case LOADING_ITEM_DATA:
            return {...state,loading:action.payload}
        default:
            return state;
    }
}

export default RestaurantsReducer;

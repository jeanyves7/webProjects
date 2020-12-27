import {SET_RESTO,LOADING_RESTO_DATA,SET_RESTO_ERROR,SET_TOTAL_PAGES} from "../actions/actions";

//initial state for the Restaurants components and pagination
const initial ={
    Restos:[],
    totalPages:10,
    loading:true,
    error:false,
}

const RestaurantsReducer = (state=initial,action)=>{
    switch(action.type){
        case SET_RESTO:
            return{...state, Restos:action.payload}
        case SET_TOTAL_PAGES:
            return {...state,totalPages:action.payload}
        case LOADING_RESTO_DATA:
            return {...state,loading:action.payload}
        case SET_RESTO_ERROR:
            return {...state,error:action.payload}
        default:
            return state;
    }
}

export default RestaurantsReducer;

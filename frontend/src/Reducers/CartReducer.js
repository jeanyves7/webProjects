import {SET_CART,SET_COUNT,DELETE_COUNT,CHECKOUT_COUNT} from "../actions/actions"

const initial={
    items:[],
    count:0
}

const cartReducer= (state=initial,action)=>{
    switch(action.type){
        case SET_CART:
            return {...state,items:action.payload}
        case SET_COUNT:
            return{...state,count:state.count+1} 
        case DELETE_COUNT:
            return{...state,count:state.count-1}
        case CHECKOUT_COUNT:
            return{...state,count:0}             
        default:
            return state;
    }

}
export default cartReducer;
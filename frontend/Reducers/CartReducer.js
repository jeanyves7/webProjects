import {SET_CART} from "../actions/actions"

const initial={
    items:[]
}

const cartReducer= (state=initial,action)=>{
    switch(action.type){
        case SET_CART:
            return {...state,items:action.payload}
            default:
                return state;
    }

}
export default cartReducer;
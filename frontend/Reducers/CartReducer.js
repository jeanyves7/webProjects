import {ADD_CART} from "../actions/actions"

const initial={
    items:[]
}

const cartReducer= (state=initial,action)=>{
    switch(action.type){
        case ADD_CART:
            console.log(action.payload);
            console.log(state.items );
            return {...state,items:[...state.items,action.payload]}
            default:
                return state;
    }

}
export default cartReducer;
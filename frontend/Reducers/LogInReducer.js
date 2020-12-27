import {SET_IN,SET_OUT} from "../actions/actions"

const initial={
    logIn:false
}

const LoggedInReducer=(state=initial,action)=>{
    
    switch(action.type){
        case SET_IN:
          
            return{...state,logIn:true}
        case SET_OUT:
            return{...state,logIn:false}    
        default:
            return state    
    }
}
export default LoggedInReducer
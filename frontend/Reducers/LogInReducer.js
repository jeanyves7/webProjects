import {SET_IN,SET_OUT,SET_IDC} from "../actions/actions"

const initial={
    logIn:false,
    idC:0
}

const LoggedInReducer=(state=initial,action)=>{
    
    switch(action.type){
        case SET_IN:
            return{...state,logIn:true}
        case SET_OUT:
            return{...state,logIn:false}   
        case SET_IDC:
            return{...state,idC:action.payload}     
        default:
            return state    
    }
}
export default LoggedInReducer
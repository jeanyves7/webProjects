import {SET_IN,SET_OUT,SET_IDC,SET_EMAIL,SET_FNAME,SET_LNAME,SET_ERROR_LOG,SET_SUCCESS_LOG} from "../actions/actions"

const initial={
    logIn:false,
    idC:0,
    email:"",
    Fname:"",
    Lname:"",
    invalid:false,
    success:false,
}

const LoggedInReducer=(state=initial,action)=>{
    
    switch(action.type){
        case SET_IN:
            return{...state,logIn:true}
        case SET_OUT:
            return{...state,logIn:false}   
        case SET_IDC:
            return{...state,idC:action.payload} 
        case SET_EMAIL:
            return{...state,email:action.payload} 
        case SET_FNAME:
            return{...state,Fname:action.payload} 
        case SET_LNAME:
            return{...state,Lname:action.payload} 
        case SET_ERROR_LOG:
            return{...state,invalid:action.payload}      
        case SET_SUCCESS_LOG:
            return {...state,success:action.payload}       
        default:
            return state    
    }
}
export default LoggedInReducer
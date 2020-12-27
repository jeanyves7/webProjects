import { SET_VRESTO,SET_VISITED_ERROR,LOADING_VRESTO_DATA,SET_DUPLICATE_ERRPR,SET_SUCCESS_SAVE} from "../actions/actions";

//visited restaurants initial states
const initialState ={
    Visited:[],
    loading:true,
    error:false,
    duplicateVError:false,
    onSuccess:false,

}

const VisitedReducer = (state=initialState,action) =>{
    switch(action.type){
        case LOADING_VRESTO_DATA:
            return {...state,loading:action.payload}
        case SET_VRESTO:
            return {...state,Visited:action.payload};
        case SET_VISITED_ERROR:
            return {...state,error:action.payload};
        case SET_DUPLICATE_ERRPR:
            return {...state,duplicateVError:action.payload};
        case SET_SUCCESS_SAVE:
            return {...state,onSuccess:action.payload};
        default:
            return state;
    }
}

export default VisitedReducer;
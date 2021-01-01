import {SET_NEGATIVE,SET_NEUTRAL,SET_POSITIVE} from "../actions/actions"

const initial={
    positive:false,
    neutral:false,
    negative:false,
}

const FeedbackReducer= (state=initial,action)=>{
    switch(action.type){
        case SET_POSITIVE:
            return {...state,positive:action.payload}
        case SET_NEUTRAL:
            return {...state,neutral:action.payload}
        case SET_NEGATIVE:
            return {...state,negative:action.payload}
        default:
            return state
    }
}
export default FeedbackReducer
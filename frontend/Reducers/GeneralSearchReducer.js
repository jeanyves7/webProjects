import {SET_TYPE,SET_PAGE,SET_SEARCH,SET_SIZE,SET_VISITED_TYPE} from "../actions/actions"


//default initial states of the type,pages,size and search field
const initalState={
    types:"All",
    size:4,
    page:1,
    search:"",
    VisitedType:"All",
}

const TypeReducer =(state=initalState,action)=>{
    switch(action.type){
        case SET_TYPE:
            return {...state,types:action.payload};
        case SET_SIZE:
            return {...state,size:action.payload};
        case SET_PAGE:
            return {...state,page:action.payload};
        case SET_SEARCH:
            return {...state,search:action.payload};
        case SET_VISITED_TYPE:
            console.log(1);
            return {...state,VisitedType:action.payload};
        default:
            return state;
    }
}

export default TypeReducer;
//Every action type will be associated a number in the comments

//actions for handling the visited restaurants
export const ADD_VRESTO="ADD_VRESTO";   //1
export const LOAD_VRESTO="LOAD_VRESTO"; //2
export const SET_VRESTO="SET_VRESTO";   //3

//actions for handling the Restaurants 
export const SET_RESTO="SET_RESTO";     //4
export const LOAD_RESTO="LOAD_RESTO";   //5
export const LOAD_NRESTO="LOAD_NRESTO"; //6

//actions for handling the Loaders while fetching the data
export const LOADING_RESTO_DATA="LOADER_RESTO_DATA";        //7
export const LOADING_VRESTO_DATA="LOADER_VRESTO_DATA";      //8

//actions for handling the errirs
export const SET_RESTO_ERROR="SET_RESTO_ERROR";         //9
export const SET_VISITED_ERROR="SET_VISITED_ERROR";     //10

//actions related to the general search
export const SET_TOTAL_PAGES="SET_TOTAL_PAGES";   //11
export const SET_PAGE="SET_PAGE";                 //12    
export const SET_TYPE="SET_TYPE";                 //13
export const SET_SEARCH="SET_SEARCH";             //14
export const SET_SIZE="SET_SIZE";                 //15
export const SET_VISITED_TYPE="SET_VISITED_TYPE";  //16

//actions related to the success of adding a a visited restaurant to the backend
export const SET_DUPLICATE_ERRPR="SET_DUPLICATE_ERROR" //17
export const SET_SUCCESS_SAVE="SET_SUCCESS_SAVE"       //18

//Visited section:
//1
export const addVResto = (Resto) =>({
    type:ADD_VRESTO,
    payload:Resto,
});

//2
export const loadVResto =(data) =>({
    type:LOAD_VRESTO,
    payload:data
});

//3
export const setVResto = (Resto) =>({
    type:SET_VRESTO,
    payload:Resto

});

//All restaurants section:
//4
export const setResto = (Resto) =>({
    type:SET_RESTO,
    payload:Resto,
});

//5
//load all restaurants / including the type
export const loadResto = (payload) =>({
    type:LOAD_RESTO,
    action:payload,
});

//6
//this actions is to load the restaurant by name
export const loadNResto=(Resto)=>({
    type:LOAD_NRESTO,
    payload:Resto
});

//Loaders section:
//7 => All restaurants
export const loadingResto= (load) =>({
    type:LOADING_RESTO_DATA,
    payload:load,
});

//8 => Visited Restaurants
export const loadingVResto= (load) =>({
    type:LOADING_VRESTO_DATA,
    payload:load,
});

//Error Section:
//9 => All restaurants
export const setRestoError=(data)=>({
    type:SET_RESTO_ERROR,
    payload:data,
});

//10 => Visited Restaurants
export const setVisitedError=(data)=>({
    type:SET_VISITED_ERROR,
    payload:data,
});


//General Search section:
//11
export const setTotalPages=(data)=>({
    type:SET_TOTAL_PAGES,
    payload:data,
});

//12
export const setPage=(data)=>({
    type:SET_PAGE,
    payload:data,
})

//13
export const setType =(type)=>({
    type:SET_TYPE,
    payload:type,
});

//14
export const setSearch=(data)=>({
    type:SET_SEARCH,
    payload:data,    
});

//15
export const setSize=(data)=>({
    type:SET_SIZE,
    payload:data,
});

//16 
export const setVisitedType=(data)=>({
    type:SET_VISITED_TYPE,
    payload:data,
});

//17
export const setDuplicateError=(data)=>({
    type:SET_DUPLICATE_ERRPR,
    payload:data,
});

//18
export const setSuccessSave=(data)=>({
    type:SET_SUCCESS_SAVE,
    payload:data,
})
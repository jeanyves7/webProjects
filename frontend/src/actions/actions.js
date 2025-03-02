//Every action type will be associated a number in the comments
 
export const SET_ITEM="SET_ITEM";     //4
export const LOAD_ITEM="LOAD_ITEM";   //5
export const LOAD_NRESTO="LOAD_NRESTO"; //6

//actions for handling the Loaders while fetching the data
export const LOADING_ITEM_DATA="LOADING_ITEM_DATA";        //7


//actions related to the general search
export const SET_TOTAL_PAGES="SET_TOTAL_PAGES";   //11
export const SET_PAGE="SET_PAGE";                 //12    
export const SET_TYPE="SET_TYPE";                 //13
export const SET_SEARCH="SET_SEARCH";             //14
export const SET_SIZE="SET_SIZE";                 //15
export const SET_VISITED_TYPE="SET_VISITED_TYPE";  //16


export const ADD_CART="ADD_CART"//19

export const SET_IN="SET_IN"//20
export const SET_OUT="SET_OUT"//21
export const CHECK_IN="CHECK_IN"//22
export const SIGN_UP="SIGN_UP"//23
export const SET_IDC="SET_IDC"//24
export const SEND_FEED="SEND_FEED"//25
export const SET_CART="SET_CART"//26
export const LOAD_CART="LOAD_CART"//27
export const UPDATE_CART="UPDATE_CART"//28
export const DELETE_ITEM="DELETE_ITEM"//29
export const PURCHASED="PURCHASED"//30

export const SET_EMAIL="SET_EMAIL"//31
export const SET_FNAME="SET_FNAME"//32
export const SET_LNAME="SET_LNAME"//33
export const LOG_OUT="LOG_OUT"//34
export const SET_COUNT="SET_COUNT"//35
export const DELETE_COUNT=" DELETE_COUNT"//36
export const CHECKOUT_COUNT="CHECKOUT_COUNT"//37

export const HEROKU_FEED="HEROKU_FEED"//38

export const SET_POSITIVE="SET_POSITIVE"//39
export const SET_NEUTRAL="SET_NEUTRAL"//40
export const SET_NEGATIVE="SET_NEGATIVE"//41

export const SET_ERROR_LOG="SET_ERROR_LOG"//42
export const SET_SUCCESS_LOG="SET_SUCCESS_LOG"//43
export const SET_CONNECTION_ERROR="SET_CONNECTION_ERROR"//44


//All restaurants section:
//4
export const setItem = (items) =>({
    type:SET_ITEM,
    payload:items,
});

//5
//load all restaurants / including the type
export const loadItem = (payload) =>({
    type:LOAD_ITEM,
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
export const loadingItem= (load) =>({
    type:LOADING_ITEM_DATA,
    payload:load,
});



//Error Section:
//9 => All restaurants




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

//19
export const addCart=(data)=>({
    type:ADD_CART,
    payload:data
})

//20
export const setIn=()=>({
    type:SET_IN,
   
})

//21
export const setOut=()=>({
    type:SET_OUT
})

//22
export const checkIn=(data)=>({
  type:CHECK_IN,
  payload:data  
})

//23
export const signUp=(data)=>({
    type:SIGN_UP,
    payload:data,
})

//24
export const setIdClient=(data)=>({
    type:SET_IDC,
    payload:data
})

//25
export const sendFeed=(data)=>({
    type:SEND_FEED,
    payload:data,
})

//26
export const setCart=(data)=>({
    type:SET_CART,
    payload:data
})

//27
export const loadCart=()=>({
    type:LOAD_CART,
})

//28 
export const updateQty=(data)=>({
    type:UPDATE_CART,
    payload:data,
})

//29
export const deleteItem=(data)=>({
    type:DELETE_ITEM,
    payload:data
})

//30
export const  purchase=(data)=>({
    type:PURCHASED,
    payload:data
})

//31
export const setEmail=(data)=>({
    type:SET_EMAIL,
    payload:data
})

//32
export const setFname=(data)=>({
    type:SET_FNAME,
    payload:data
})

//33
export const setLname=(data)=>({
    type:SET_LNAME,
    payload:data
})

//34
export const logOut=()=>({
    type:LOG_OUT
})

//35
export const setCount=()=>({
    type:SET_COUNT
})

//36
export const setDelete=()=>({
    type:DELETE_COUNT
})

//37
export const checkOutCount=()=>({
    type:CHECKOUT_COUNT
})
//38
export const herokuFeed=(data)=>({
    type:HEROKU_FEED,
    payload:data
})
//39
export const setPos=(data)=>({
    type:SET_POSITIVE,
    payload:data
})

//40
export const setNeutre=(data)=>({
    type:SET_NEUTRAL,
    payload:data
})
//41
export const setNeg=(data)=>({
    type:SET_NEGATIVE,
    payload:data
})
//42
export const setErrorLog=(data)=>({
    type:SET_ERROR_LOG,
    payload:data
})

//43
export const setSuccesLog=(data)=>({
    type:SET_SUCCESS_LOG,
    payload:data
})
//44
export const setConnError=(data)=>({
    type:SET_CONNECTION_ERROR,
    payload:data
})
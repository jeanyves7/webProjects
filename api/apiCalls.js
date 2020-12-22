import api from "./index"

//api call for all the restaurants
export const getRestos =  async (restos) => { 
    try{
    //parsing the results of the action payload to be fit the api call

    // reducing 1 from the actual page  because in spring boot the pages start from 0
    const pag=restos.action.action.page -1
    const realPage=pag.toString();

    const Type=restos.action.action.type;
    const size=restos.action.action.size;
    
    //making the call:
    const res = await api.get(`Restaurants/${Type}/?page=${realPage}&size=${size}`);
    return res.data;
    }catch (error) {
        console.log(error);
    }
}

//api call to get the restaurants by name
export const getNRestos =  async (restos) => { 
   try{
    const Name=restos.action.action.name;
   //making the call
    const res = await api.get(`Restaurants/name/${Name}`);
    return res.data;
   }catch (error) {
    console.log(error);
    }
}

//api call to get the visited restaurants
export const getVRestos= async (data) =>{
    try{
    const type=data.action.payload.type
    const res = await api.get(`VisitedRestaurants/${type}`);
    return res.data;
    }catch (error) {
        console.log(error);
    }
}

//api call to set the visited restaurant
export const postVRestos =  async (data) =>{
    //data represents the type of restaurant that we want to show in the visited Table 
    //By default it's All we are requesting all type of visited restaurants
    try {
        const res = await api.post("/VisitedRestaurants", data);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

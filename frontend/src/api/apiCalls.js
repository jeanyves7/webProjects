import api from "./index"
import herok from "./heroku"
import {useDispatch,useSelector} from "react-redux";

//api call for all the restaurants
export const getItems =  async (restos) => { 
    try{
    //parsing the results of the action payload to be fit the api call

    // reducing 1 from the actual page  because in spring boot the pages start from 0
    const pag=restos.action.action.page -1
    const realPage=pag.toString();

    const Type=restos.action.action.type;
    const size=restos.action.action.size;
    
    //making the call:
    const res = await api.get(`items/${Type}/?page=${realPage}&size=${size}`);
    return res.data;
    }catch (error) {
        console.log(error);
    }
}

//api call to get the restaurants by name
export const getNItems =  async (restos) => { 
   try{
    const Name=restos.action.action.name;
   //making the call
    const res = await api.get(`items/name/${Name}`);
    return res.data;
   }catch (error) {
    console.log(error);
    }
}



export const CheckLogIn=async(data)=>{
    console.log(data.action.payload.Email)
    try{
        const res=await api.get(`/client/login/?email=${data.action.payload.Email}&password=${data.action.payload.pass}`);
        return res.data
    }catch(error){
        console.log(error);
    }
}

export const SignUp=async(data)=>{
    console.log(data)
    try{
       const res=await api.post("/client/signUp",data)
       return res.data;
    }catch(error){
        console.log(error);
    }
}

export const feedBack=async(data)=>{
    console.log(data)
    try{
       const res=await api.post("/client/feedback",data)
       return res.data;
    }catch(error){
        console.log(error);
    }
}

export const addCart=async(data)=>{
    try{
        const res=await api.post("/client/cart",data)
        return res.data;
     }catch(error){
         console.log(error);
     }
}

export const loadCart=async()=>{
    try{
        const res=await api.get("/client/cart")
        return res.data;
    }catch(error){
        console.log(error)
    }
}

export const UpdateCart=async(data)=>{
    const id=data.action.payload.idi;
    const qty=data.action.payload.qty;
    try{
        const res=await api.patch(`/client/Cart/qty/?id=${id}&qty=${qty}`)
        return res.data
    }catch(error){
        console.log(error)
    }
}

export const deleteItem=async(data)=>{
    const id=data.action.payload.idi;
    try{
        const res=await api.post(`/client/delete/item/?id=${id}`)
        return res.data
    }catch(error){
        console.log(error)
    }
}

export const purchased=async(data)=>{
    try{
        const res=await api.post("/client/purchased",data);
        return res.data
    }catch(error){
        console.log(error)
    }
}

export const checkClient=async()=>{
    try{
        const res=await api.get("/client/CheckClient")
        return res.data
    }catch(error){
        console.log(error)
    }
}

export const logOut=async()=>{
    try{
        const res=await api.get("client/logOut")
        return res.data
    }catch(error){
        console.log(error)
    }
}

export const feedResult=async(data)=>{
    try{
        const res=await herok.post("/sentiment",data)
        return res.data
    }catch(error){
        console.log(error)
    }
}
import axios from "axios"

const Url='http://localhost:3002/users'

export const adduser =async(data)=>{

 try {
   return  await axios.post(Url,data);
    
 } catch (error) {
    console.log(error.message)
    
 }   
}


export const getuser = async()=>{

    try {
        return await axios.get(Url);
        
    } catch (error) {
        console.log(error.message)
        
    }
}
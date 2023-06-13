import axios from "axios"

const Url='http://127.0.0.1:3005/users'

export const adduser =async(data)=>{

 try {
   return  await axios.post(Url,data);
    
 } catch (error) {
    console.log(error.message)
    
 }   
}


export const getusers = async()=>{

    try {
        return await axios.get(Url);
        
    } catch (error) {
        console.log(error.message)
        
    }
} 
export const getuser=async(data)=>{

    try{

        return await axios.get(`${Url}/${data}`)

    }
    catch(error){
        console.log(error.message)

    }
}

export const edituser=async(data,id)=>{

    try{

        return await axios.put(`${Url}/${id}`,data)

    }
    catch(error){
        console.log(error.message)
    }
}

export const deleteuser=async(id)=>{

    try{
        return await axios.delete(`${Url}/${id}`)

    }
    catch(error){
        console.log(error.message)
    }
}
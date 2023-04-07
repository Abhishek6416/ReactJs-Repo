import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { FormGroup,FormControl, Typography, InputLabel, Input, Button,styled } from '@mui/material'
import { getuser ,edituser} from './apiService/api'
import { useNavigate,useParams } from 'react-router-dom'

const Container=styled(FormGroup)`
width:50%;
margin:5% auto 0 auto;

& > div {
    margin-top:20px
}
`
const initValues={

    name:'',
    username:'',
    email:'',
    phone:'',
}

export default function EditUser() {
    const [user,setUser]=useState(initValues)

    const navigate=useNavigate();
    const {id}=useParams();

    useEffect(()=>{

      getUserData();


    },[])

 
    // useEffect
    const getUserData=async()=>{
      let response =await getuser(id);
      console.log(response)
      setUser(response.data)

      


    }


    const handleChange =(e)=>{
        // console.log(e.target.name,e.target.value)
        setUser({...user,[e.target.name]:e.target.value})
        console.log(user)


    }


    const handleClick =async ()=>{

      await edituser(user,id);
      navigate('/all')
     

    }
  return (
    <div>
    <Container>
    <Typography variant='h2'>EDIT USER</Typography>

{/* now we want the state data inside this input fields in form component value attribute is used to controlled components
now 1-->if the value field is controlled by the input field that is whatever data we can add that is uncontrolled components



now2--> if the value field controls the input field that whatever data we want to edit we will open that and edit it that is value is 
controlling the input field then it is called controlled components

 */}
    <FormControl>
    <InputLabel>Name</InputLabel>
    <Input onChange={handleChange} name="name" value={user.name}/>
    </FormControl>


    <FormControl>
    <InputLabel>UserName</InputLabel>
    <Input onChange={handleChange}   name="username" value={user.username}/>
    </FormControl>


    <FormControl>
    <InputLabel>Email</InputLabel>
    <Input onChange={handleChange}   name="email" value={user.email}/>
    </FormControl>


    <FormControl>
    <InputLabel>Phone</InputLabel>
    <Input onChange={handleChange}   name="phone" value={user.phone}/>
    </FormControl>


    <FormControl> 
    <Button variant='contained' onClick={handleClick}>Edit User</Button>
    </FormControl>




    </Container>




    </div>
  )
}

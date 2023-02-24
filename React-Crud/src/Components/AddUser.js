import React from 'react'
import { useState } from 'react'
import { FormGroup,FormControl, Typography, InputLabel, Input, Button,styled } from '@mui/material'
import { adduser } from './apiService/api'
import { Navigate, useNavigate } from 'react-router-dom'

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

export default function AddUser() {
    const [user,setUser]=useState(initValues)

    const navigate=useNavigate();


    const handleChange =(e)=>{
        // console.log(e.target.name,e.target.value)
        setUser({...user,[e.target.name]:e.target.value})
        console.log(user)


    }


    const handleClick =async ()=>{

      await  adduser(user);
      navigate('/all')
     

    }
  return (
    <div>
    <Container>
    <Typography variant='h3'>ADD USER</Typography>


    <FormControl>
    <InputLabel>Name</InputLabel>
    <Input onChange={handleChange} name="name"/>
    </FormControl>


    <FormControl>
    <InputLabel>UserName</InputLabel>
    <Input onChange={handleChange}   name="username"/>
    </FormControl>


    <FormControl>
    <InputLabel>Email</InputLabel>
    <Input onChange={handleChange}   name="email"/>
    </FormControl>


    <FormControl>
    <InputLabel>Phone</InputLabel>
    <Input onChange={handleChange}   name="phone"/>
    </FormControl>


    <FormControl>
    <Button variant='contained' onClick={handleClick}>Submit</Button>
    </FormControl>




    </Container>




    </div>
  )
}

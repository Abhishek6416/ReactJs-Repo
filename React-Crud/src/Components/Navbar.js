import React from 'react'
import { AppBar,Toolbar,styled } from '@mui/material'
import { NavLink } from 'react-router-dom'

const Header=styled(AppBar)`
      background:#111111;
`

const Tabs=styled(NavLink)`
margin-right:40px;
font-size:20px;
color:inherit;
text-decoration:none;
`

export default function Navbar() {
  return (
   <Header position='static'>
   <Toolbar>
   <Tabs to="/" >CodeForInterview</Tabs >
   <Tabs to="/all" >AllUser</Tabs >
   <Tabs to="/user">AddUser</Tabs >
  




   </Toolbar>
   </Header>





   
  )
}

import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className='Nav'>

        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/todo">Todo</Link>
        <Link to="/product">Products</Link>
        <Link to="/counter">Counters</Link>
    </div>
  )
}



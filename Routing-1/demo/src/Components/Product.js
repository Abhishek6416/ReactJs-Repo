import React from 'react'
import './Product.css'
import { Link,Outlet } from 'react-router-dom'
export default function Product() {
  return (
    <div className='main'>

      <div className='main1'>

        <Link to="electronics">Electronics</Link>
        <Link to="jewelery">Jewellery</Link>
        <Link to="">Men's Section</Link>
        <Link to="">Women's Section</Link>
      </div>



      <div>
        <Outlet/>
      </div>
    </div>
  )
}

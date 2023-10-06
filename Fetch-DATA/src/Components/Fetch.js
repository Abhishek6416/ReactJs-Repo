import React from 'react'
import { useState } from 'react'

export default function Fetch() {
    const [state,setState]=useState([])


    const handleEvent=()=>{


        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>response.json())
        .then((data)=>
        
        setState(data))
    }
  return (
    <div>



        <button onClick={handleEvent}>get data</button>

        {
            state.map((elem,i)=>{

                return(

                    <div>

                        <h2>{state.name}</h2>
                    </div>
                )
            })
        }
    </div>
  )
}

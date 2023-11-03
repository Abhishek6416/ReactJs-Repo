import React from "react"
import { useState,useRef,useEffect } from "react"

export const Stopwatch=()=>{

    const[time,setTime]=useState(0)
   

    let timeHandler=useRef()


    const handleStart=()=>{
       timeHandler.current= setInterval(()=>{

            setTime(prev=>prev+1)

        },1000)

    }

    const handleStop=()=>{

        clearInterval(timeHandler.current)

        
    }

    return(

        <div>
        <h1>Stopwatch</h1>
        <p>{time}</p>

        <button onClick={handleStart}>Play</button>
        <button onClick={handleStop}>Pause</button>
        <button onClick={()=>{setTime(0)}}>Reset</button>


       
        </div>
    )


}
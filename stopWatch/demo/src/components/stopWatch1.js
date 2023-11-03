import React, { useEffect, useRef } from "react"

import { useState } from "react"

export const Stopwatch1=()=>{

    const [time,setTime]=useState(0)

    useEffect(()=>{

        handleTime()
        return ()=>clearInterval(maniTime.current)
    })

   let maniTime=useRef()
    function handleTime(){
      maniTime.current=  setInterval(()=>{
           setTime(prev=>prev+1)
        },1000)
    }

    return(
        <div>
            <h1>StopWatch1</h1>
            <p>{time}</p>

            <button onClick={()=>{setTime(0)}}>Restart</button>
            <button onClick={()=>{clearInterval(maniTime.current)}}>Pause</button>
        </div>
    )

}
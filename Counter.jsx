import React, { useEffect, useState } from 'react'
import axios from "axios"
const Counter = () => {
    const [count, setCount] = useState(0)

    useEffect(()=>{
       const getdata= async()=>{
        const res= await axios('http://localhost:8080/counter')
        setCount(res.data.value)
       } 
       getdata()
    },[])
    const handleDec=async()=>{
      setCount(count-1)
        const res= await axios.post('http://localhost:8080/counter', {"value":count-1})
     
      }
   
    
    const handleInc=async()=>{
      setCount(count+1)
      const res= await axios.post('http://localhost:8080/counter', {"value":count+1})
    }

    

  return (
    <div>
        <h2 textid="counter">Counter:</h2>
        <div style={{"display":"flex", justifyContent:"center", gap:"10px"}}>
         <button descBtn="desc-btn" onClick={handleDec}>-</button>
        <h2 counterid="count">{count}</h2>
        <button addbtn="addbtn" onClick={handleInc}>+</button>
        </div>
    </div>
  )
}

export default Counter
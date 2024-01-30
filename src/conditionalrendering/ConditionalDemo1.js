import React, { useState } from 'react'

export default function ConditionalDemo1() 
{
  const [status,setstatus] = useState(true)

  const change = () => {
    setstatus(!status)
  }
  
  return (
    <div>
    <h3>Conditional Rendering Demo 1</h3>
    
    {
      status ?
      <p style={{color:"red"}}>KLU</p> :
      <p style={{color:"darkgreen"}}>KL UNIVERSITY</p>
    }

    <button onClick={change}>CHANGE</button>
    </div>
  )
}

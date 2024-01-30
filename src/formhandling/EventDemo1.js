import React, { useState } from 'react'

export default function EventDemo1() 
{
    const [name,setName] = useState("")

    const display = (event) =>
    {
        setName(event.target.value)
    }

  return (
    <div>
        <h3>Event Handling Demo 1</h3>

        Enter Name: <input type="text" value={name} onChange={display}/><br/>
        My Name is {name}

    </div>
  )
}

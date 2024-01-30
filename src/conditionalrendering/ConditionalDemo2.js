import React, { useState } from 'react'

export default function ConditionalDemo2() 
{
    const [flag,setflag] = useState(false)

    const change = () => {
        setflag(!flag)
    }

  return (
    <div>
        <h3>Conditional Rendering Demo 2</h3>

        {
            flag ?
            <button onClick={change}>LOG IN</button> :
            <button onClick={change}>LOG OUT</button>
        }

    </div>
  )
}

import React, { useState } from 'react'
import Contact from './Contact'
import Home from './Home'

export default function ConditionalDemo4() 
{
    const [flag,setflag] = useState (true)

    const change = () =>
    {
        setflag(!flag)
    }

  return (
    <div>
        <h3>Conditional Rendering Demo 4</h3>
        {
            flag ? <Home/> : <Contact/>
        }
        <button onClick={change}>Click Here</button>
    </div>
  )
}

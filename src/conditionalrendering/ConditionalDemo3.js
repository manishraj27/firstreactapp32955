import React, { useState } from 'react'

export default function ConditionalDemo3() 
{
    const [status,setstatus] = useState(true)

    const logout = () => {
        setstatus(true)
    }

    const login = () => {
        setstatus(false)
    }


  return (
    <div>
        <h3>Conditional Rendering Demo 3</h3>
        {
            status ?
            <div>
                <p style={{fontSize:"15pt", color:'red', fontWeight:"bold"}}>Please Log In to Home Page</p>
                <button onClick={login}>Login</button>
            </div> :
            <div>
                <p style={{fontSize:"15pt", color:'green', fontWeight:"bold"}}>Welcome KLU, This is my Home Page</p>
                <button onClick={logout}>Logout</button>
            </div>
        }
    </div>
  )
}

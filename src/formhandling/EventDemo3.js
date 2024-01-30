import React, { useState } from 'react'

export default function EventDemo3() 
{
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")

    const inputname = (event) =>
    {
        setName(event.target.value)
    }

    const inputpwd = (event) =>
    {
        setPassword(event.target.value)
    }

    const display = () =>
    {
        if(name.length==0 && password.length==0)
        {
            document.getElementById("errorname").innerHTML="Please Enter Name"
            document.getElementById("errorpwd").innerHTML="Please Enter Password"
        }
        else if (name.length==0) {
            document.getElementById("errorname").innerHTML="Please Enter Name"
            document.getElementById("errorpwd").innerHTML=""
        }
        else if (password.length==0) {
            document.getElementById("errorpwd").innerHTML="Please Enter Password"
            document.getElementById("errorname").innerHTML=""
        }
        else
        {
            document.getElementById("errorpwd").innerHTML=""
            document.getElementById("errorname").innerHTML=""
            alert(`Name=${name} Password=${password}`)
        }
    }

  return (
    <div>
        <h3>Event Handling Demo 3</h3>
        Enter Name <input type="text" id="name" value={name} onChange={inputname}/>
        <i id='errorname'style={{color:'red'}}></i>
        <br/>
        Enter Password <input type="password" value={password} id="pwd" onChange={inputpwd}/>
        <i id='errorpwd'style={{color:'red'}}></i>
        <br/>
        {/* Name:{name}&nbsp;&nbsp; Password:{password} */}
        <button onClick={display}>Display</button>
    </div>
  )
}

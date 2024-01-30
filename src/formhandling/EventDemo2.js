import React, { useState } from 'react'

export default function EventDemo2() 
{
    const [name,setname] = useState("")

    const inputname = (event) => 
    {
        setname(event.target.value)
    }

    const display = () => 
    {
        if(name.length===0)
        {
          alert("Please Enter Name")
          document.getElementById("name").focus()
        }
        else
        {
          alert(name)
        }
    }

    const uppercase = () =>
    {
      if(name.length===0)
      {
        alert("Please Enter Name")
        document.getElementById("name").focus()
      }
      else
      {
        alert(name.toUpperCase())
      }
    }

    const lowercase = () =>
    {
      if(name.length===0)
      {
        alert("Please Enter Name")
        document.getElementById("name").focus()
      }
      else{
        alert(name.toLowerCase())
      }
    }

    const namelength = () =>
    {
      if(name.length===0)
      {
        alert("Please Enter Name")
        document.getElementById("name").focus()
      }
      else
      {
        alert(`Name Length= ${name.length}`)
      }
    }

  return (
    <div>
        <h3>Event Handling Demo 2</h3>
        <input type="text" placeholder='Enter Name' id="name" value={name} onChange={inputname}/><br/>
        <br/>
        <button onClick={display}>Display Name</button>&nbsp; &nbsp;
        <button onClick={uppercase}>Upper Case Name</button>&nbsp; &nbsp;
        <button onClick={lowercase}>Lower Case Name</button>&nbsp; &nbsp;
        <button onClick={namelength}>Name Length</button>
    </div>
  )
}

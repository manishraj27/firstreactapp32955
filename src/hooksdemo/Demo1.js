import React, { useState } from 'react'
import './counter.css'

export default function Demo1() 
{
    const [count,setcount]= useState(0)
    //count is a state object
    //setcount is a function which is used to update the count

    const increment = () => {
        setcount(count+1)
    }

    const decrement = () => {
        setcount(count-1)
    }

  return (
    <div>
        <h3>React Hooks Demo with useState</h3>
        <h4><u>Counter App</u></h4>
        Count={count} <br/>
        <button onClick={increment} className='button'>INCREMENT</button>
        <button onClick={decrement} className='button'>DECREMENT</button>
    </div>
  )
}

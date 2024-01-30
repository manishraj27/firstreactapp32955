import React, { useEffect, useState } from 'react'

export default function Demo2() 
{
    const [count,setcount] = useState(0)

    useEffect(() => {
        document.title=`COUNT=${count}`
        return () => {
            document.title="React App"
        };
    }, [count]);

    const increment = () => {
        setcount(count+1)
    }

    const decrement = () => {
        setcount(count-1)
    }


  return (
    <div>
        <h3>React Hooks Demo with useEffect</h3>
        COUNT = {count}<br/><br/>
        <button onClick={increment}>Increment</button>
        &nbsp;&nbsp;&nbsp; 
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

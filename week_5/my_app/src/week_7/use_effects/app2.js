import React, { useEffect, useState } from 'react'

export default function App2() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState("red")

    //this will run the code on every render
    // useEffect(() => {
    //   document.title = `Count: ${count}`
    // })

    //this will run the code on the first render
    // useEffect(() => {
    //     document.title = `Count: ${count}`
    // }, [])

    //this will run the code only when the count changes 
    useEffect(() => {
        // document.title = `Count: ${count}`
        document.title = `Count: ${count} Color: ${color}`

    }, [count])
    

    // useEffect(() => {
    //     console.log("The count is: ", count);

    //     return () => {
    //         console.log("I am being cleaned up!");
    //     }
    // });

  return (
    <div className='tutorial'>
        <h1 style={{color: color}}>Count: {count}</h1>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setColor(c => c === "green" ? "red" : "green")}>Change Color</button>
    </div>
  )
}


/**
 * 
 * Side effects are as a result of a state changing
 * 
 * [] - this is what you use to tell useeffect what it should listen to, react to, in order to run this code.
 * if you dont provide anything, it wont listen to anything
 * 
 * We also have the optional return function
 * 
 * useEffect(function, [dependencies])
 * 
 * 1. useEffect(() => {})               Runs after every re-render
 * 2. useEffect(() => {}, [])           Runs only on mount
 * 3. useEffect(() => {}, [value])      Runs on mount + when value changes
 * 
 * USES
 * 1. Event Listeners
 * 2. DOM manipulation
 * 3. Subscriptions (real-time updates)
 * 4. Fetching Data from an API
 * 5. Clean up when a component unmounts
 */
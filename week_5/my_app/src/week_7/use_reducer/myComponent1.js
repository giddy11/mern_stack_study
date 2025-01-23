import React, { useReducer, useState } from 'react'

export default function MyComponent1() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prev => prev + 1)
    }

    const decrement = () => {
        setCount(prev => prev + 1)
    }

  return (
    <div>
        <button onClick={0}>-</button>
    </div>
  )
}

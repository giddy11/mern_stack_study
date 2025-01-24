import React, { useReducer, useState } from 'react'

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
}

// function reducer(state, action) {
//   return {count: state.count + 1}
// }

function reducer(state, action) {
  switch (action.type) {
    // case 'increment':
    case ACTIONS.INCREMENT:
      return {count: state.count + 1}
    // case 'decrement':
    case ACTIONS.DECREMENT:
      return {count: state.count - 1}
    default:
      return state
  }
  
}

export default function MyComponent1() {
  const [state, dispatch] = useReducer(reducer, {count: 0})
    const [count, setCount] = useState(0);

    const increment = () => {
        // setCount(prev => prev + 1)
        // dispatch()
        // dispatch({type: 'increment'})
        dispatch({type: ACTIONS.INCREMENT})
    }

    const decrement = () => {
        // setCount(prev => prev - 1)
        // dispatch({type: 'decrement'})
        dispatch({type: ACTIONS.DECREMENT})
    }

  return (
    <div className='app5'>
        <button onClick={decrement}>-</button>
        {/* <span>{count}</span> */}
        <span>{state.count}</span>
        <button onClick={increment}>+</button>
    </div>
  )
}

//for the above we just dispatching just one which is increment, but what if we want to dispatch more than one.
import React from 'react'
import MyComponent1 from './myComponent1'
import MyComponent2 from './myComponent2'

export default function App4() {
  return (
    <div>
        {/* <MyComponent1/> */}
        <MyComponent2/>
    </div>
  )
}

/**
 * It is very similar to useState which re-renders the component when the state value changes
 * 
 * useRef() = "use Reference" does not cause re-renders when its value changes.
 *              When u want a component to remember some information, but you dont want that
 *              info to trigger new renders.
 * 
 * 1. Accessing/Interacting with DOM elements
 * 2. Handling Focus, Animations, and Transitions
 * 3. Managing Timers and Intervals
 * 
 * 
 */
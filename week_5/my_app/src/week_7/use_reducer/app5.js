import React from 'react'
import MyComponent1 from './myComponent1'
import MyComponent2 from './myComponent2'

export default function App5() {
  return (
    <div>
        {/* <MyComponent1/> */}
        <MyComponent2/>
    </div>
  )
}

/**
 * useReducer = This helps you manage complex state logic in react applications
 * 
 * HOW DOES IT WORK
 * -it is used to store and update states just like the useState hook
 * -it accepts a reducer function as its first parameter and the initial state as the second.
 * -it returns an array that holds the current state value and a dispatch function to which you can pass an action and later invoke it.
 * -the useReducer function is tightly coupled to a specific reducer.
 * -we dispatch action objects to that reducer only, whereas in Redux, the dispatch function sends the action object to the store.
 * -at the time of the dispatch, the components dont need to know which reducer will process the action.
 * 
 * THE FIRST ARGUMENT:
 * the argument tat you get to use is the reducer function
 * this is a function that will take in the state, action that u define in your code and it will make
 * a copy of that state and then based on the action will do certain things to the state to make some changes
 * Then it will return the copy that will go into the state variable through the useReducer hook
 * 
 * THE SECOND ARGUMENT:
 * is the initial value of the state variable. It is required and not optional
 * 
 */
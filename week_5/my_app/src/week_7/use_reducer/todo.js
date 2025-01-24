import React from 'react'
import { ACTIONS } from './myComponent2'

export default function Todo(props) {
  return (
    <div>
        <span style={{color: props.todo.complete ? "green" : "black"}}>
            {props.todo.name}
        </span>
        <button onClick={() => props.dispatch({type: ACTIONS.TOGGLE_TODO, payload: {id: props.todo.id}})}>Toggle</button>
        <button onClick={() => props.dispatch({type: ACTIONS.DELETE_TODO, payload: {id: props.todo.id}})}>Delete</button>
    </div>
  )
}
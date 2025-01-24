import React, { useReducer, useState } from 'react'
import Todo from './todo'

export const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo', // to completing
  DELETE_TODO: 'delete-todo',
}

function reducer(todos, action) {
  switch(action.type) {
    case ACTIONS.ADD_TODO:
        return [...todos, newTodo(action.payload.name)]
    case ACTIONS.TOGGLE_TODO:
        return todos.map(todo => {
            if (todo.id === action.payload.id) {
                return {...todo, complete: !todo.complete}
            }
            return todo
        })
    case ACTIONS.DELETE_TODO:
        return todos.filter(todo => todo.id !== action.payload.id);
    default:
        return todos; // Return the current state by default
  }
}

function newTodo(name) {
    return {
        id: Date.now(),
        name: name,
        complete: false
    }
}

export default function MyComponent2() {
  const [todos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    // dispatch({type: ACTIONS.ADD_TODO})
    dispatch({type: ACTIONS.ADD_TODO, payload: {name: name }})
    setName('')
  }

  console.log(todos)

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' value={name} onChange={e => setName(e.target.value)}/>
        </form>
        {todos.map(todo => {
            return (
            <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
        )})}
    </div>
  )
}
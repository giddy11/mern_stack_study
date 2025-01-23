import React, { useContext } from 'react'
import { UserContext } from './componentA'

export default function ComponentD(props) {
    const user = useContext(UserContext)
  return (
    <div className='box'>
        <h1>Component D</h1>
        {/* <h2>{`Bye ${props.user}`}</h2> */}
        <h2>{`Bye ${user}`}</h2>
    </div>
  )
}

import React from 'react'
import ComponentD from './componentD'

export default function ComponentC(props) {
  return (
    <div className='box'>
        <h1>Component C</h1>
        <ComponentD user={props.user}/>
    </div>
  )
}

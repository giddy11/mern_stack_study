import React from 'react'

export default function ButtonPropertyComp(props) {
  return (
    <div>
        <h1>{props.header}</h1>
        <p>{props.subContent}</p>
        <button onClick={props.funcHandler}>Show Alert</button>
    </div>
  )
}

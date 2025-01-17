import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

export default function Route_param() {
    const {message} = useParams()
  return (
    <div>
        <p>THis is a routed page</p>
        <p>{message}</p>
    </div>
  )
}

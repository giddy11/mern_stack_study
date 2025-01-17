import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Page_1() {
    const navigate = useNavigate()
    let addInfo = "New information from a diff page"
    let path = `/param/${addInfo}`

    const navigatePAge = () => {
        navigate('/')
    }
  return (
    <div>
        <h1>This is page one</h1>
        <button>
            <Link to={'/page2'}>Go to Page 2</Link>
            <Link to={path}>Go to Page 2 with param</Link>
        </button>

        <button onClick={navigatePAge}>Navigate button</button>
    </div>
  )
}

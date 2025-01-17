import React from 'react'
import { Link } from 'react-router-dom'

export default function Page_2() {
  return (
    <div>
        <h1>This is page Two</h1>
        <button>
            <Link to={'/page1'}>Go to Page 1</Link>
        </button>
    </div>
  )
}

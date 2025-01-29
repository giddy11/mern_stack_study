import React from 'react'
import '../styles/navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {

    const handleLogout = () => {
        console.log("Logout successfully")
    }
  return (
    <nav className='nabvar_container'>
        <div className='logo'>
            <Link to="/dashboard">NoteApp</Link>
        </div>

        <input
            type='text'
            placeholder='Search notes...'
        />

        <div className='right_nav'>
            <span className='username'>Username</span>
            <Link to="/login" className='login'>
                Login
            </Link>
            <Link to="/signup" className='signup'>
                Signup
            </Link>

            <button onClick={handleLogout} className=''>
                Logout
            </button>
        </div>
    </nav>
  )
}

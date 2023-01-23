import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

export default function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about/">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>

          <li>
            <Link to="/signup" className='saynup'>Create account</Link>
          </li>

          <li>
            <Link to="/signin" className='saynin'>Sign In</Link>
          </li>
          
        </ul>
      </nav>
    </div>
  )
}

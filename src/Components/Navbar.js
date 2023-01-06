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
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/rates">Rates</Link>
          </li>
          <li>
            <Link to="/download">Download</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

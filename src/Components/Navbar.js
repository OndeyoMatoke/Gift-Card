import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

export default function Navbar() {
  return (
    <>   
   
      <nav className='navbar'>        
        
        <i class="fa-solid fa-bars" className='menu'></i> 
        <div className='navbar-links'>
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
            
            </div>   
                
      </nav>
      
    </>
  )
}

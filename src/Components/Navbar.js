import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'


import 'font-awesome/css/font-awesome.min.css' 
import { FaBars } from 'react-icons/fa'


export default function Navbar() {
  return (
    <>   
         <FaBars
           className='menu'
         />
      <nav className='navu'>        
        
        <i class="fa-solid fa-bars" className='menu'></i> 
        <div className='navu-links'>
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

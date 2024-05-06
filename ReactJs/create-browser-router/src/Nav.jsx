import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <Link to={"/home/login"} className='login'>Login</Link>
        <Link to={"/home/signup"} className='login'>Signup</Link>
        <Link to={"/home/contact"} className='login'>Contact</Link>
        
    </div>
  )
}

export default Nav
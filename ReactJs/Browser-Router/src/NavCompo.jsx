import React from 'react'
import { Link } from 'react-router-dom'

const NavCompo = () => {
  return (
    <div className='nav'>
        <Link to={"/home/login"} className='nav-login'>Login</Link>
        <Link to={"/home/signup"} className='nav-signup'>Signup</Link>
        <Link to={"/home/contact"} className='nav-contact'>Contact</Link>
        <Link to={"/home/about"} className='nav-about'>About</Link>
    </div>
  )
}

export default NavCompo
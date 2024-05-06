import React from 'react'
import Home from './Home'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className='landing'>
        <Link to={"/home"} className='landing-text'>HOME</Link>
        <br />
        {/* <button to={"/home"}>get</button> */}
    </div>
  )
}

export default Landing
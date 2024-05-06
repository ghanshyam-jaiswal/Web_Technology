import React from 'react'
import NavCompo from './NavCompo'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
        <NavCompo/>
        <Outlet/>
    </div>
  )
}

export default Home
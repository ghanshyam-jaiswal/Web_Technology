import React, { useState } from 'react'
import HomePage from './HomePage'
import LoginForm from './LoginForm'
// import { Weather } from './Weather'
// import Election from './Election'
export const App = () => {
    let [state,setstate]=useState({age:0})
  return (
    <>
    {/* <p>{state.age}</p>
    <button onClick={()=>{setstate({age:state.age+1})}}>increase</button>
    <Election {...state}/> */}
    {/* <Weather/> */}
    {/* <HomePage/> */}
    <LoginForm/>
    </>
  )
}

export default App

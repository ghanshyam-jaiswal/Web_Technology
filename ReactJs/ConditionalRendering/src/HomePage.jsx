import React, { useState } from 'react'
import "./HomePage.css";
export const HomePage = () => {
    let [btn,setBtn]=useState("login");
    let handle=(e)=>{
        let {innerText}=e.target;
        setBtn(innerText);
    }
    let handleInput=()=>{
        let {value}=e.target;
        setBtn(value);
    }
  return (
    <section>
        <nav>
            <input type="text" onChange={handleInput}/>
            {/* {btn=="login"?<button className='navbtn'>login</button>:<button className='navbtn'>log out</button>}  */}
            {/* ternary operator */}
            {/* {btn=="login" && <button className='navbtn'>login</button>} */}
            {/* short-circuit operator */}
            {btn=="log out" && <button className='navbtn'>log out</button>}
        </nav>
        <button onClick={handle}>login </button>
        <button onClick={handle}>log out</button>
    </section>
  )
}

export default HomePage

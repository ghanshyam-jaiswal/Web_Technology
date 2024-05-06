import React, { useState } from 'react'

const App = () => {
    // let [state,setState]=useState({shyam:""});
    // let handleChange=(e)=>{
    // setState({shyam:e.target.value})

// console.log(state)
// console.log(state.shyam)

    let [details,setDetails]=useState({
        loginId:"",
        password:""
    })

    let handleDate=(e)=>{
        let {value,name}=e.target;
        setDetails({...details,[name]:value})
    }
    console.log(details)

  return (
    <div>
        {/* <p>{state.shyam}</p>
        <button onClick={handleChange}>Click</button>
        <button onClick={handleChange}>click2</button>
        <button onMouseOver={handleChange}>click2</button> 
         <section onMouseOver={handleChange}>This is section</section>  */}
        <label htmlFor="">Login Id:</label>
        <input type="text" name="loginId" onChange={handleDate}/>
        <br />
        <label htmlFor="">Password:</label>
        <input type="password" name="password" id="" onChange={handleDate}/>
    </div>
    
    
  )

        }
export default App
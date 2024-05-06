import React, {useState } from 'react'

const Controlled = () => {
    let [state,setState]=useState({
        loginId:"",
        password:""
    })
    let handleChange=(e)=>{
        let{value,name}=e.target;
        setState({...state,[name]:value})
    }
  return (
    <div>
        <form action="" >
            <label htmlFor="label">Login Id: </label>
            <input type="text" id='label' name='loginId' onChange={handleChange}/><br />
            <label htmlFor="pass">Password: </label>
            <input type="password" id='pass' name='password' onChange={handleChange} /><br />
           <button type='submit'>Submit</button>
        </form>
        <p>{state.loginId}</p>
        <p>{state.password}</p>

    </div>
  )
}

export default Controlled
import React, { useRef } from 'react'

const UnControlled = () => {
    let loginRef=useRef()
    let passwordRef=useRef();
    let handleSubmit=(e)=>{
        e.preventDefault()
        console.log(loginRef.current.value)
        console.log(passwordRef.current.value)
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="label">Login Id: </label>
            <input type="text" id='label' ref={loginRef}/><br />
            <label htmlFor="pass">Password: </label>
            <input type="password" id='pass' ref={passwordRef} /><br />
           <button type='submit'>Submit</button>

        </form>
    </div>
  )
}

export default UnControlled
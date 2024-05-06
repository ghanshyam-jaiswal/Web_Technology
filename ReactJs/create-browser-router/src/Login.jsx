import React from 'react'

const Login = () => {
  return (
    <div  className='login-form'>
      <form action="">
        <label htmlFor="name">Email:</label>
        <input type="text" id='name'/>
        <br />
        <label htmlFor="pass">Password:</label>
        <input type="password" id='pass'/>
        <br />
        <button type='submit'>submit</button>
        
      </form>
    </div>
  )
}

export default Login
import React, { useState } from 'react'

const LoginForm = () => {
    let [login,setLogin]=useState({
        loginId:"",
        password:""
    });
    let hadleChange=(e)=>{
        let {name,value}=e.target;
        setLogin({...login,[name]:value});
    }
    console.log(login)
  return (
    <section>
        <div>
            <form action="">
            <label htmlFor="id">LoginId:</label>
            <input type="text" name="loginId" id="id" onChange={hadleChange} value={login.loginId}/>
            <br />
            <label htmlFor="pass">Password:</label>
            <input type="password" name="password" id="pass" onChange={hadleChange} value={login.password}/>
            <br />
            {/* {login.loginId.length>5 && login.password.length>5 ? <input type="submit" name="" id="" /> : <button disabled>Loading...</button> } */} 
            {login.loginId.length>5 && login.password.length>5 &&   <input type="submit" name="" id="" />}
            </form>
        </div>
    </section>
  )
}

export default LoginForm
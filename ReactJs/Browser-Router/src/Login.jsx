import React from 'react'
import { CiUser } from "react-icons/ci";
import { RiLockPasswordFill } from "react-icons/ri";

const Login = () => {
  return (
        <div className='login'>
            <div className="login-content">
                <h1 className='login-text'>Login</h1>
                <div className="login-username">
                    <CiUser />
                    <input type="text" placeholder='User Name'/>
                </div>
                
                <div className="login-password">
                    <RiLockPasswordFill />
                    <input type="password" placeholder='Password'/>
                </div>
                <div className="login-button">
                    <form action="">
                     <input type='submit' className='login-button-text' />
                    </form>
                </div>
            </div>
            

        </div>



    
  )
}

export default Login
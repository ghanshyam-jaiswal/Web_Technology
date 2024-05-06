import React from 'react'
import { CiUser } from "react-icons/ci";
import { RiLockPasswordFill } from "react-icons/ri";

const Signup = () => {
  return (
    <div className='signup'>
            <div className="signup-content">
                <h1 className='signup-text'>SignUp</h1>
                <div className="signup-username">
                    <CiUser />
                    <input type="text" placeholder='User Name'/>
                </div>
                
                <div className="signup-password">
                    <RiLockPasswordFill />
                    <input type="password" placeholder='Password'/>
                </div>
                <div className="signup-button">
                    <form action="">
                     <input type='submit' className='signup-button-text' />
                    </form>
                </div>
            </div>
    </div>
  )
}

export default Signup
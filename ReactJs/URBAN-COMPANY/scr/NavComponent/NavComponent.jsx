import React from 'react';
import logo from '../assets/UrbanLogo.webp';
import { IoLocationOutline } from "react-icons/io5";

export const NavComponent = () => {
  return (
    <section className='navmain'>
        <article className='navBody'>
            <div className='logo'>
                <img src="{logo}" alt="" />
            </div>
            <div className='drop-search'>
                <div className='searchParent'>
                <IoLocationOutline className="location" />
                <select name="" id="" className='dropDown'>
                    <option value="">New Delhi</option>
                    <option value="">Gurgaon</option>
                    <option value="">Bengalore</option>
                    <option value="">Pune</option>
                    <option value="">Mumbai</option>
                    <option value="">Chandigarh</option>
                </select>
                </div>
                <input type="search" />
            </div>
            <button className='login-btn'>Login</button>
        </article>
    </section>
  )
}

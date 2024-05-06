import React, { useState,useEffect } from 'react'
import HOC from './HOC'

const Github = ({data}) => {
   
    let [state,setState]=useState()

    useEffect(()=>{
      data("https://api.github.com/users").then((response)=>{
        setState(response);
      });
    },[]);
    console.log(state)
  return (
    <div>
      Github
    </div>
  )
}

export default HOC(Github)
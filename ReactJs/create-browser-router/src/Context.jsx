import React, { createContext, useEffect, useState } from 'react'

export let global=createContext();
let {Provider}=global;

const Context = ({children}) => {

    let [Data,setDate]=useState([])
    let fetchdata=async()=>{
        let response=await fetch("https://api.github.com/users");
        let data=await response.json();
        setDate(data)
    }
    useEffect(()=>{
        fetchdata();
    },[])
  return (
        <Provider value={{Data,setDate}}>{children}</Provider>
  )

}

export default Context
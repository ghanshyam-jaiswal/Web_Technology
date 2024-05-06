import React, { createContext, useState } from 'react'

export let globalval=createContext();
let {Provider}=globalval
const GlobalContext = ({children}) => {
    let [ToDo,setToDo]=useState([])
    console.log(ToDo)
  return (
    <Provider value={{ToDo,setToDo}}>
        {children}
    </Provider>
  )
}

export default GlobalContext
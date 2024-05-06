import React, { createContext } from 'react'
import Consumer from './Consumer';

export let context=createContext();
// console.log(context);
export const ContextApi = () => {
   
    const emp={
        empId:1,
        empName:"Jeevan"
    };
    const student={
        studentId:10,
        studentName:"shyam"
    };
  return (
   <context.Provider value={{emp,student}}>
     <Consumer/>
    </context.Provider>
  )
}

export default ContextApi
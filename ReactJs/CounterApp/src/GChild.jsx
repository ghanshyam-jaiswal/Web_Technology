import React from 'react'

export const GChild = ({fun1}) => {
    let {state,setstate}=fun1;
  return (
   <div>
    
    <button onClick={()=>{setstate(state+1)}}>Increment</button>
    <button onClick={()=>{setstate(state-1)}}>Decrement</button>
    <button onClick={()=>{setstate(0)}}>Reset</button>
 </div>
  )
}

export default GChild;


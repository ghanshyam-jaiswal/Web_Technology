import React, { useState } from 'react'
import { Parent } from './Parent'
 const GParent = () => {
    let [state,setState]=useState(0)
    
  return (
    
    <div>
        <p>{state}</p>
        <Parent data={state}/>
    </div>
  )
}
export default GParent;
import React from 'react'
import { Child } from './Child'
export const Parent = ({data}) => {
  return (
    <div>
        <Child fun={data}/>
    </div>
  )
}

export default Parent;

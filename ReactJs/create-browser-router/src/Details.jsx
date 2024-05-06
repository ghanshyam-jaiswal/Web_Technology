import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Details = () => {
    let {state}=useLocation();
    let param=useParams();
    console.log(param)
  return (
    <div>
      <img src={state.avatar_url} alt="" />
      <p>{state.login}</p>
      <p>{state.id}</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, nam.</p>
    </div>
  )
}

export default Details
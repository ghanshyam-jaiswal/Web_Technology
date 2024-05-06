import React, { useEffect, useState } from 'react'
import HOC from './HOC'

const FakeStoreData = ({data}) => {
  let [state,setState]=useState()

    useEffect(()=>{
      data("https://fakestoreapi.com/products").then((response)=>{
        setState(response);
      });
    },[]);
    console.log(state)
  return (
    <div>FakeStoreData</div>
  )
}

export default HOC(FakeStoreData)
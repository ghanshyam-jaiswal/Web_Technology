import React, { useEffect, useState } from 'react'

const App = () => {
    let [state,setState]=useState({
        count:0
    })
    

    let fetchData=async()=>{
        let response = await fetch("https://api.github.com/users");
        let data = await response.json();
        setState(data)
    }
        useEffect(()=>{
            fetchData();
            console.log(state)
        },[state])
  return (
    <div>
        <p>{state.count}</p>
        <button onClick={
              ()=>{
             setState({count:state.count+1})
            }
        }
        >Click</button>
        
    </div>
  )
}

export default App
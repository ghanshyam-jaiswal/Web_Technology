import React, { useRef } from 'react'

const FuncBasedCompo = () => {
    let inputRef=useRef();
    let inputRef2=useRef();
    let handleChange2=()=>{
        inputRef2.current.value="ghannu";
        inputRef2.current.style.backgroundColor="green";
    }
    let handleChange=()=>{
        inputRef.current.value="shyam";
        inputRef.current.style.backgroundColor="yellow";
    }
  return (
    <section>
        <input type="text" ref={inputRef}/>
        <button onClick={handleChange}>Change Content</button>
        <br />
        <input type="text" ref={inputRef2}/>
        <button onClick={handleChange2} >Change Content 2</button>
    </section>
  )
}

export default FuncBasedCompo
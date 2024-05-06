import React, { useCallback, useMemo, useState } from 'react'

const Counter = () => {

    let [counterOne,setCounterOne]=useState(0);
    let [counterTwo,setCounterTwo]=useState(0);

    let increaseOne=()=>{
        setCounterOne(counterOne+1);
    }
    let increaseTwo=()=>{
        setCounterTwo(counterTwo+1);
    }

    let check1=useMemo(()=>{
        let i=0;
        while(i<2000000000){
            i++
        }
         return  counterOne%2==0? "even" : "odd"
        },[counterOne]) // It returns value so call it by direct variable and multiple dependency we can pass.

    // let check1=useCallback(()=>{
    //     let i=0;
    //     while(i<2000000000){
    //         i++
    //     }
    //      return  counterOne%2==0? "even" : "odd"
    //     },[counterOne]) //it returns a function so we have to call it by () and multiple dependency we can pass.

    let check2=()=>{
        return  counterTwo%2==0? "even" : "odd"
       }
    
  return (
    <div>
        counterOne<button onClick={increaseOne}>{counterOne}</button> {check1}<br /><br />
        counterTwo <button onClick={increaseTwo}>{counterTwo}</button> {check2()}
    </div>
  )
}

export default Counter
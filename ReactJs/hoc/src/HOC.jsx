import React from 'react'

const HOC = (WrapComponent) => {
    return ()=>{
        let fetchData=async(url)=>{
            let response = await fetch('${url}');
            let data = await response.json();
            return data;
    }
    return (
        <WrapComponent data={state}>
    
        </WrapComponent>
      )
    }
}

export default HOC
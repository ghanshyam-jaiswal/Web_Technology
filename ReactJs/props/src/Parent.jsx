import React,{useState} from 'react'
import Child from './Child';

const Parent = ()=>{
    let [state,setState]=useState(10);
    return(
        <div>
            <Child data={{state,setState}}/>;
        </div>
    )
};

export default Parent;
import React from 'react'
import { context } from './ContextApi'
import { useContext } from 'react';
import  Consumer1  from './Consumer1';

const Consumer = () => {
    let data = useContext(context);
    // console.log(data)
  return (
    <div>
       <p>{data.emp.empId}</p>
       {/* <p>{data.emp.empName}</p>

       <p>{data.student.studentId}</p>
        <p>{data.student.studentName}</p> */}
        
    <Consumer1/>
    </div>
  )
}

export default Consumer

import React, { useContext } from 'react'
import { globalval } from './GlobalContext'

const AllTask = () => {
    let {ToDo,setToDo}=useContext(globalval)
    console.log(ToDo);
    let handleDelete=(index)=>{
        console.log(index);
        let filterData=ToDo.filter((ele,ind)=>ind!=index);
        setToDo(filterData);
    };
  return (
   <section>
    {ToDo.map((ele,index)=>{
        return (
            <div>
                <h1>{ele.taskName}</h1>
                <button onClick={()=>{handleDelete(index)}}>Delete</button>
            </div>
        );
    })}
   </section>
  )
}

export default AllTask
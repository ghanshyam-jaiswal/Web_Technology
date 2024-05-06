import React, { useContext, useState } from 'react'
import { globalval } from './GlobalContext';

const AddToDo = () => {
    let [task,setTask]=useState({
        taskName:"",
        description:""
    })
    let {ToDo,setToDo}=useContext(globalval)
    let {taskName,description}=task;
    // let {taskName,description}=task;
    let handleChange=(e)=>{
        let {name,value}=e.target;
        setTask({...task,[name]:value})
    }
    let handleSubmit=(e)=>{
        e.preventDefault();
        setToDo([...ToDo,{task}])
        setTask({
            taskName:"",
            description:""
        })
    }
  return (
    <div>
        <h1>Create To Do</h1>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">Task Name:</label>
            <input type="text" name="taskName" onChange={handleChange} value={taskName}/>
            <br />
            <label htmlFor="">Description</label><br />
            <textarea name="description" id="" cols="30" rows="10" onChange={handleChange} value={description}></textarea>
            <br />
            <button>Add Task</button>
        </form>
    </div>
  )
}

export default AddToDo
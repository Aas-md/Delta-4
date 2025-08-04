import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm(){

    const [task,setTask] = useState("")
    const dispatch  = useDispatch();

    let handleInputChange = (event)=>{
          return  setTask(event.target.value)
    }

    let handleOnSubmit = (event)=>{
        event.preventDefault()
        dispatch(addTodo(task));
       setTask("")
    }



    return (
        <form onSubmit={handleOnSubmit}>
            <input placeholder="add A task" value={task} onChange={handleInputChange} />
            &nbsp;
            <button>Add Task</button>
        </form>
    )
}
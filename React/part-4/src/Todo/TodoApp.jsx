import { useState } from "react";
import uuid from "uuid4";

export default function TodoApp() {


    let [arr, setArr] = useState([{ task: "first task", id: uuid() }]);
    let [task, setTask] = useState("")

    function addTask() {

        setArr((prevTask) => {
            return [...prevTask, { task: task, id: uuid() }];
        })
        setTask("")

    }

    let updateInputValue = (event) => {
        setTask(event.target.value)

    }

    function deleteTask(id){
        let newArr = arr.filter((task)=> task.id != id);
        setArr(newArr)
    }

 function upperCaseAll() {
    setArr((prevArr) => 
        prevArr.map((task) => ({
            ...task,
            task: task.task.toLocaleUpperCase()
        }))
    );
}


    return (
        <div>
            <input value={task} onChange={updateInputValue} placeholder="tast.." />
            <br /><br /><br />
            <button onClick={addTask}>Add</button>
            <br /><br /><br />  <hr />
            <ul>
                {
                    arr.map((t) => (


                         <li key={t.id}>
                            <span>{t.task}</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <button onClick={()=> deleteTask(t.id)}>Delete</button>

                         </li>
                    ))
                }
            </ul>

            <button onClick={upperCaseAll}>Upper case All</button>


        </div>
    )
}
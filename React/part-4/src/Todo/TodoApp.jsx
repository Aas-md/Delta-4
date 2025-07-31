import { useState } from "react";

export default function TodoApp() {


    let [arr, setArr] = useState(['sample task','sedond task'])
    let [task, setTask] = useState("")

    function addTask() {
        let copy = [...arr];
        copy.push(task);
        setArr(copy);
        setTask("")

    }

    let updateInputValue = (event)=>{
        setTask(event.target.value)
        
    }

    return (
        <div>
            <input value={task} onChange={updateInputValue} placeholder="tast.." />
            <br /><br /><br />
            <button onClick={addTask}>Add</button>
            <br /><br /><br />  <hr />
            <ul>
                {
                    arr.map((t) => {


                        return <li>{t}</li>
                    })
                }
            </ul>


        </div>
    )
}
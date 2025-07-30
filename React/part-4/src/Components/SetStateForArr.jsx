import { useState } from "react";

export default function SetStateForArr(){

    let [arr,setArr] = useState([1,2,3,4])

    function updateArray(){
        let copy = [...arr];
        copy[0] = 100000
        copy[1] = 200000
        setArr(copy)
    }

    return (
        <div>
        <p>{arr}</p>
        <button onClick={updateArray}> change</button>
        </div>
    )
}
import { useState, useEffect } from "react"

export default function Counter(){

    let [countx,setCountx] = useState(0)
    let [county,setCounty] = useState(0)

    useEffect(()=>{
        console.log("Hello useEffect I am learning you")
    },[countx])

    let incCountx = ()=>{
        setCountx((currCount)=> currCount + 1);
    }
    
    let incCounty = ()=>{
        setCounty((currCount)=> currCount + 1);
    }

    return (
        <div>
        <h1>Count = {countx}</h1>
        <button onClick={incCountx}>+1</button>
        <br />
        <h1>Count = {county}</h1>
        <button onClick={incCounty}>+1</button>
        </div>
    )
}
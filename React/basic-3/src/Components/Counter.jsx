import { useState } from "react"

export default function Counter() {

    let [count,setCount ] = useState(0)
   

    const incCount = ()=>{
       setCount((currCount)=>{
          return  currCount+1
       })
       setCount((currCount)=>{
        return currCount +1
       })
        
       
    }

    return (
        <div>
            <h2>count = {count}</h2>
            <button onClick={incCount}>counter</button>
        </div>
    )
}
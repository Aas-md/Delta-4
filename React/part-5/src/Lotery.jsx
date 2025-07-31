import { useState } from "react"
import {getRanArr,sum} from "./help"

export default function Lotery(){

    let [ticket,setTicket] = useState(getRanArr(3))
    let isWin = sum(ticket) >= 15

    function getTicket(){
        setTicket(getRanArr(3))      
    }

    return (
        <div>
            <h1>Lotery Game!</h1>
            <span>{ticket[0]}</span>
            <span>{ticket[1]}</span>
            <span>{ticket[2]}</span>
           
            <br /><br /><br />
            <button onClick={getTicket}>Generate Ticket</button>
             <br /><br /><br />
            <h3>{isWin == true && "Hurray you won the loteryr"}</h3>
        </div>
    )
}
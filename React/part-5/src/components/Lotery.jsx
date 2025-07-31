import { useState } from "react"
import {getRanArr,sum} from "../help"
import Ticket from "./Ticket"


export default function Lotery({n,winningSum}){

    let [ticket,setTicket] = useState(getRanArr(n))
    let isWin = winningSum(ticket)

    function getTicket(){
        setTicket(getRanArr(n))      
    }

    return (
        <div>
            <h1>Lotery Game!</h1>
            <Ticket tickets={ticket}/>
           
            <br /><br /><br />
            <button onClick={getTicket}>Generate Ticket</button>
             <br /><br /><br />
            <h3>{isWin == true && "Hurray you won the loteryr"}</h3>
        </div>
    )
}
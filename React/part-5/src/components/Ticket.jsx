import TicketNum from "./TicketNum"
import './Ticket.css'

export default function Ticket({tickets}){
    return (
        <div className="Ticket">
            <p>Ticket</p>
          {
            tickets.map((num,idx)=>(
            <TicketNum num={num} key={idx}/>

            ))}
        </div>
    )
}
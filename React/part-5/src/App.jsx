import './App.css'
import Ticket from "./components/Ticket"
import Lotery from "./components/Lotery"
import { sum,getRanArr } from './help'



function App() {

  function winCnd(ticket){

  return sum(ticket) >= 15;
}
  return (
   <>
      <Lotery n ={3} winningSum = {winCnd}/>
   </>
     
    
  )
}

export default App

import { useState } from 'react'
import './lotery.css'
import Lotery from './Lotery'

function App() {

  return <div className='box'>
    <Lotery/>
  </div>
}

export default App



  // let [ticket,setTicket] = useState(0)
  // let [win,setWin] = useState(0)


  // function getTicket(){
    
  //   let num = Math.floor(Math.random()*900) + 100;
  //   setTicket(num)
  //   if(isWin(num)){
  //     setWin(1);
  //   }else{
  //     setWin(0);
  //   }
  // }

  // function isWin(num){

  //   let sum =0;
  //   while(num){
  //     let x = num % 10;
  //     sum += x;
  //     num = num /10;
  //   }

  //   if(sum >= 15)return true;
  //   return false;
  // }
  
  // return (
  //   <div className='box'>
  //     {win == true && <h1>Hurra You won the lottery</h1>}

  //     <p>Lotery number ={ticket}</p>
  //     <button onClick={getTicket}>get new Ticket</button>
  //   </div>
  // )

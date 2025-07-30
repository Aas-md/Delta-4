import { useState } from 'react';

export default function SetStateForObj() {

    
  let [moves,setMoves] = useState( {blue : 0, red : 0, yellow : 0, green : 0});

  function updateMoves(){
    
    setMoves((currMove)=>{
      return {...currMove,blue : currMove.blue + 1};
    })
  }

  // thing for yello red and green
 
    return (
        <div>
            <p>Game begins!</p>
            <div className="board">
                <p>Blue move ={moves.blue} </p>
                <button onClick={updateMoves} style={{ backgroundColor: "blue" }}>+1</button>
                <p>Yellow move = {moves.yellow}</p>
                <button style={{ backgroundColor: "yellow", color: "black" }}>+1</button>
                <p>Green move = {moves.green}</p>
                <button style={{ backgroundColor: "green" }}>+1</button>
                <p>Red move = {moves.red}</p>
                <button style={{ backgroundColor: "red" }}>+1</button>

            </div>
        </div>
    )
}
import { useEffect, useState } from "react";

export default function Joke(){

    const url = 'https://official-joke-api.appspot.com/jokes/random';
    let [joke, setJoke] = useState({});

    let getJoke =async ()=>{

        let res = await fetch(url);
        let jSonRes = await res.json();
        setJoke(jSonRes);

    }

    useEffect(()=>{

        getJoke()

    },[])// only one time

    return (
        <div>
            <h1>Joke</h1>
            <h1>{joke.setup}</h1>
            <h1>{joke.punchline}</h1>
            <button onClick={getJoke}>Get Joke</button>
        </div>
    )
}
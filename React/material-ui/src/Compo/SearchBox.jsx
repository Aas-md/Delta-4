import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';



export default function SearchBox(){

    const API_KEY = "1e51f90b3e84f8f49da455cf57b95f67";
    const API_URL = 'http://api.openweathermap.org/data/2.5/weather';
    let [city,setCity] = useState("");

    async function getWeatherInfo(){
        let res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        let jSonRes = await res.json();
        console.log(jSonRes);
        let result = {
            
        }
    }

    let handleChange = (event)=>{
        setCity(event.target.value);
    }

    let handleSubmit = (event)=>{
        event.preventDefault();
        console.log(city)
        setCity("")
        getWeatherInfo()
    }

    return (
    <div className='searchBox'>
        <h1>Search Box</h1>
       <form onSubmit={handleSubmit}>
         <TextField id="city" label="city name" variant="outlined" required value={city} onChange={handleChange}/>
         <br /><br />
          <Button variant="contained" type='submit'>Search</Button>

       </form>
    </div>
    )
}
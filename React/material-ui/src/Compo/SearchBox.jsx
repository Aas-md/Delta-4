import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';



export default function SearchBox({updateInfo}){

    const API_KEY = "1e51f90b3e84f8f49da455cf57b95f67";
    const API_URL = 'http://api.openweathermap.org/data/2.5/weather';
    let [city,setCity] = useState("");

    async function getWeatherInfo(){
        let res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        let jSonRes = await res.json();
        // console.log(jSonRes);
        let result = {
            city : city,
            temp : jSonRes.main.temp,
            tempMin : jSonRes.main.temp_min,
            tempMax : jSonRes.main.temp_max,
            humidity : jSonRes.main.humidity,
            feelsLike : jSonRes.main.feels_like,
            weather : jSonRes.weather[0].description
        }

        console.log(result);
        return result;
    }

    let handleChange = (event)=>{
        setCity(event.target.value);
    }

    let handleSubmit = async (event)=>{
        event.preventDefault();
        console.log(city)
        setCity("")
        let result = await getWeatherInfo()
        updateInfo(result)
    }

    return (
    <div className='searchBox'>
       
       <form onSubmit={handleSubmit}>
         <TextField id="city" label="city name" variant="outlined" required value={city} onChange={handleChange}/>
         <br /><br />
          <Button variant="contained" type='submit'>Search</Button>

       </form>
    </div>
    )
}
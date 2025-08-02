import { useState } from 'react'
import InfoBox from './InfoBox'
import SearchBox from './SearchBox'


export default function WeatherApp(){

    let [weatherInfo,setWeatherInfo] = useState(
      {
        city: "Delhi",
        feelsLike: 39.35,
        humidity: 64,
        temp: 32.39,
        tempMax: 32.39,
        tempMin: 32.39,
        weather: "overcast clouds"
    })

    let updateInfo = (result)=>{
        setWeatherInfo(result)
    }


    return (
        <div>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info = {weatherInfo}/>
            
        </div>
    )
}
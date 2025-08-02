import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import './InfoBox.css'
import Typography from '@mui/material/Typography';


export default function InfoBox({info}) {
    let INIT_IMG = "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";


    return (
        <div className='infoBox'>
            <h1>Weather Info {info.weather}</h1>

            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={INIT_IMG}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <p>Temperature = {info.temp} &deg;C</p>
                        <p>Humidity = {info.humidity}</p>
                        <p>Min Temp = {info.tempMin} &deg;C</p>
                        <p>Max Temp = {info.tempMax} &deg;C</p>
                        <p>Feels Like = {info.feelsLike} &deg;C</p>
                    </Typography>
                </CardContent>

            </Card>
            </div>

        </div>
    )
}
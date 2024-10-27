import './App.css'
import SearchBar from './Components/SearchBar';
import BigCard from './Components/BigCard';
import  { useEffect, useState} from 'react';


function App() {

  const [city, setCity] = useState('New York');
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [todayWeather, setTodayWeather] = useState();
  const [fourDayWeather, setFourDayWeather] = useState();

  async function GetWeatherDetails(){
    console.log(`Recieved Latitude and Longitude: ${latitude} , ${longitude}`);
  }

  useEffect(() => {
    GetWeatherDetails();
  },[latitude,longitude]);


  
  return (
    <div className="App bg-cover bg-center h-screen opacity-90" >
      <SearchBar city={city} setCity={setCity} setLat={setLatitude} setLon={setLongitude} />
      <BigCard alt="Forecast Icon" temprature='28°C' weather_Description='Clear sky' city={city}/>
    </div>
  );
}

export default App;

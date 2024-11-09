import './App.css'
import SearchBar from './Components/SearchBar';
import BigCard from './Components/BigCard';
import  { useEffect, useState} from 'react';

function App() {

  const [city, setCity] = useState('New York');
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [dailyTemp, setDailyTemp] = useState("28°C");
  const [dailyWeatherDesc, setDailyWeatherDesc] = useState("Clear Sky");
  const [fourDayWeather, setFourDayWeather] = useState();
  const [dailyIconURL,setDailyIconURL] = useState();
  
  
  async function GetGeoGraphicCoordinates(city) {
    const APIkey = process.env.REACT_APP_OPEN_WEATHER_API;
    try {
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${APIkey}`
      );

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      if (json.length > 0) {
        setLatitude(json[0].lat);
        setLongitude(json[0].lon);
      }
    } catch (error) {
      console.error("Error fetching geographic coordinates:", error.message);
    }
  }

  useEffect(() => {
    GetGeoGraphicCoordinates(city);
  }, [city]);


  useEffect(() => {
    async function GetWeatherDetails() {
      const APIkey = process.env.REACT_APP_OPEN_WEATHER_API;
    
      try {
        const dailyWeather = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIkey}`
        );
    
        if (!dailyWeather.ok) {
          throw new Error(`Response status: ${dailyWeather.status}`);
        }
        
        
          const dailyWeatherJSON = await dailyWeather.json();
          const tempCelsius = (dailyWeatherJSON.main.temp - 273.15).toFixed(0) + "°C";
          const description = dailyWeatherJSON.weather[0].description;
          setDailyIconURL(`https://openweathermap.org/img/wn/${dailyWeatherJSON.weather[0].icon}@2x.png`)
          setDailyTemp(tempCelsius);
          setDailyWeatherDesc(description);

          try {
            const forecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${APIkey}`);

            if(!forecast.ok){
              throw new Error(`Response status: ${dailyWeather.status}`);
            }

            const forecastJSON = await forecast.json();
            setFourDayWeather(forecastJSON);
          } catch (error) {
            console.error("Error fetching weather details:", error.message);
          }

      } catch (error) {
        console.error("Error fetching weather details:", error.message);
      }
    }

    if (latitude !== undefined && longitude !== undefined) {
    GetWeatherDetails();
    }
  },[latitude,longitude]);

  return (
    <div className="App bg-cover bg-center h-screen opacity-90" >
      <SearchBar city={city} setCity={setCity}/>
      <BigCard alt="Forecast Icon" temprature={dailyTemp} weather_Description={dailyWeatherDesc} city={city} fourDayWeather={fourDayWeather} dailyIconURL={dailyIconURL} />
    </div>
  );
}

export default App;

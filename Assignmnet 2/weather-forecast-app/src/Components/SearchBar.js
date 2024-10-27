import React from 'react';

export default function SearchBar(props) {

  async function GetGeoGraphicCoordiantes(city){
    const APIkey = process.env.REACT_APP_OPEN_WEATHER_API;

    try {
     
      const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city.replace(' ','')}&limit=1&appid=${APIkey}`);

      if(!response.ok){
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      if (json.length > 0) {
        const {lat, lon} = json[0];
        props.setLat(lat);
        props.setLon(lon);
        props.setCity(city);
      }

    } catch (error) {
      console.error(error.message);
    }
  }
  
  function onKeyDown(event) {
    if (event.key === 'Enter' && event.target.value !== '')
    {
      GetGeoGraphicCoordiantes(event.target.value);
    }
  }

  return (
    <div className='flex justify-center'>
      <input
        className='outline-none rounded-2xl w-3/5 h-10 p-2 mt-5'
        type='text'
        placeholder='Enter a city...'
       
        onKeyDown={onKeyDown}
      />
    </div>
  );
}

import React from 'react';
import PropTypes from 'prop-types';
import CloudSVG from '../Assets/Images/cloudy-cloud.svg';
import SmallCard from './SmallCard';


//For daily weather
export default function BigCard(props) {

    function GetNextFourDaysInfo() {
        const dayCards = [];
    
        if (props.fourDayWeather && props.fourDayWeather.list) {
            let foundDays = 0;
    
            for (let i = 0; i < props.fourDayWeather.list.length; i++) {
                const dayData = props.fourDayWeather.list[i];
    
                if (dayData.dt_txt.endsWith("00:00:00")) {
                    if (foundDays < 4) {
                        const temp = `${dayData.main.temp.toFixed(0)}°C`;
                        const date = new Date(dayData.dt_txt);
                        const day = date.getDay();
                        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
                        dayCards.push(
                            <SmallCard key={foundDays} temprature={temp} day={dayNames[day]} />
                        );
    
                        foundDays++; 
                    }
                }
                if (foundDays >= 4) {
                    break;
                }
            }
        }
    
        return dayCards;
    }
    

  return (
    <div className='flex flex-col justify-center items-center my-10 '>
      <div className='w-4/5 h-96 bg-white border-0 rounded-3xl flex justify-evenly bg-opacity-50'>
        <img src={CloudSVG} className='w-80 h-80' alt={props.alt} />
        <div className='my-10'>
            <h5 className='text-xl'>Today</h5> 
            <h2 className='text-7xl font-bold'>{props.city}</h2>
            <h5 className='my-2 text-lg text-blue-950'>Temperature: {props.temprature}</h5> 
            <p className='text-blue-950'>{props.weather_Description}</p>
        </div>
      </div>
      <div className='flex flex-row justify-evenly w-2/3 items-center -mt-10'>
        {GetNextFourDaysInfo()};
      </div>
    </div>
  )
}

BigCard.propTypes = {
    alt: PropTypes.string.isRequired,
    temprature: PropTypes.string.isRequired,
    weather_Description: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired
}



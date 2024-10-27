import React from 'react';
import PropTypes from 'prop-types';
import CloudSVG from '../Assets/Images/cloudy-cloud.svg';
import SmallCard from './SmallCard';

export default function BigCard(props) {

    function GetNextFourDaysInfo(){
        const dayCards = [];
        for(var i = 0; i < 4 ; i++){
            dayCards.push(<SmallCard key={i} />);
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

// BigCard.defaultProps = {
//     alt: "Forecast Icon",
//     temprature: "28°C",
//     weather_Description: "Clear Sky",
//     city: "New York"
// }


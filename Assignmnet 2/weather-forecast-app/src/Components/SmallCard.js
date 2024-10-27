import React from 'react';
import PropTypes from 'prop-types';
import CloudSVG from '../Assets/Images/cloudy-cloud.svg';

export default function SmallCard(props) {
  return (
    <div className='w-24 h-full max-h-24 bg-white bg-opacity-50 border-0 rounded-3xl flex flex-col justify-center items-center'>

      <h5 className='font-bold'>{props.day}</h5>
      <img src={props.svg} className='w-1/2 h-1/2' alt={props.alt}/>
      <h5>{props.temprature}</h5>
      
    </div>
  );
}

SmallCard.propTypes = {
    svg: PropTypes.elementType.isRequired,
    day: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    temprature: PropTypes.string.isRequired
}


SmallCard.defaultProps = {
    svg: CloudSVG,
    day: "Monday",
    alt: "Forecast Icon",
    temprature: "28°C"
}
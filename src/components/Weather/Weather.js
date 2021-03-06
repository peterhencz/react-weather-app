import React from 'react';
import './weather.scss';
import icons from '../../services/icons';


// The Weathercomponent shows the city tile with the weather informations and sets the icon
// 

const Weather = ({city, country, temperature, description, icon }) => {
  return (
    <div className="weather">
      <span className="location">
        { city && <h2> { city } </h2> }
        { country && <h4> { country } </h4> }
      </span>
      { icon && <img alt="icon" src={icons[`icon_${icon}`]} />}
      <span className="temp">
      { temperature && <h1>{ temperature } °C</h1> }
      { description && <h3>{ description }</h3> }
      </span>
    </div> 
  );
};

export default Weather;

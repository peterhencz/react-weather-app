import React from 'react';
import '../styles/weather.scss';

const Weather = ({city, country, temperature, humidity, description }) => (
  <div className="weather">
    { city && country && <p>Location: { city }, { country }</p> }
    { temperature && <p>Temperature: { temperature } °C</p> }
    { humidity && <p>Humidity: { humidity }</p> }
    { description && <p>Description: { description }</p> }
  </div> 
);

export default Weather;

import React from 'react';
import '../styles/mainpanel.scss';
import Titles from './titles';
import Form from './form';

const MainPanel = ({getWeather, error}) => (
  <div className="main-panel">
    <Titles />
    <Form 
      getWeather={getWeather}
    />
    { error && <p>{ error }</p> }
  </div>
);

export default MainPanel;

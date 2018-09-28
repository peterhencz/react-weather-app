import React from 'react';
import '../styles/mainpanel.scss';
import Titles from './titles';
import Form from './form';

const MainPanel = ({handleFormSubmit, error}) => (
  <div className="main-panel">
    <Titles />
    <Form 
      getWeather={handleFormSubmit}
    />
    { error && <p>{ error }</p> }
  </div>
);

export default MainPanel;

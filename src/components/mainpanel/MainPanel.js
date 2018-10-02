import React from 'react';
import './mainpanel.scss';
import Titles from '../titles/titles';
import Form from '../form/form';

// The MainPanel contains the title, the input forms and the submit button

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

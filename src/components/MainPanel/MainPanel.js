import React from 'react';
import './MainPanel.scss';
import Titles from '../Titles/Titles';
import Form from '../Form/Form';

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

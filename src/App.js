import React from 'react';
import MainPanel from './components/mainpanel/MainPanel';
import Weather from './components//weather/weather';
import getWeather from './services/weatherapi';
import './index.scss';
import './App.scss';


class App extends React.Component {

  state = {
    temperature: null,
    city: null,
    country: null,
    icon: null,
    description: null,
    error: null,
    hasError: true
  }

  handleFormSubmit = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    if (city === '' || country === '') { 
      this.setState({
        hasError: true,
        error: 'Please choose a city/country'
      })
      return
    }

    const data = await getWeather(city, country);

    if (data.cod === 200) {
      this.setState({
        temperature: Math.floor(data.main.temp - 273),
        city: data.name,
        country: data.sys.country,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        error: "",
        hasError: false
      });      
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        icon: undefined,
        description: undefined,
        error: data.message
      });
    }
  }

  render() {
    return (
      <div className="main">
        <MainPanel 
          handleFormSubmit={this.handleFormSubmit} 
          error={this.state.error} />
        {
          this.state.hasError
            ? null 
            :
            <Weather 
              temperature={this.state.temperature}
              city={this.state.city}
              country={this.state.country}
              description={this.state.description}
              icon={this.state.icon}
            />
        }
      </div>
    );
  }
};

export default App;

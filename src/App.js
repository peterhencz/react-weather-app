import React from 'react';
import MainPanel from './components/MainPanel';
import Weather from './components/weather';
import './index.scss';
import './App.scss';

const API_KEY = "7257dfb135c8fcd4ac3b2fbf49fadc31";

class App extends React.Component {

  state = {
    temperature: null,
    city: null,
    country: null,
    humidity: null,
    description: null,
    error: null,
    hasError: true
  }
  
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data = await api_call.json();
    console.log(data);
    if (city && country) { 
      this.setState({
        temperature: Math.floor(data.main.temp - 273),
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: "",
        hasError: false
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please choose a city",
        hasError: true
      });
    }
  }
  render() {
    return (
      <div className="main">
        <MainPanel 
          getWeather={this.getWeather} 
          error={this.state.error} />
        {
          this.state.hasError
            ? null 
            :
            <Weather 
              temperature={this.state.temperature}
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              description={this.state.description}
            />
        }
      </div>
    );
  }
};

export default App;

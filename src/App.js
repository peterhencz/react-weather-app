import React from 'react';
import MainPanel from './components/MainPanel/MainPanel';
import Weather from './components/Weather/Weather';
import { connect } from 'react-redux';
import './index.scss';
import './App.scss';


class App extends React.Component {

  render() {
    return (
      <div className="main">
        <MainPanel
          handleFormSubmit={this.handleFormSubmit}
          error={this.props.error} />
          <div className="weatherPanel">
            {
              this.props.hasError
              ? null
              : this.props.city.map( (city, i) => {
                return(
                <Weather
                  key={city}
                  temperature={this.props.temperature[i]}
                  city={city}
                  country={this.props.country[i]}
                  description={this.props.description}
                  icon={this.props.icon}
                />)
              })
            }
        </div>
      </div>
    );
  }
};

const mapStateToProps = store => ({
  city: store.weatherReducer.city,
  temperature: store.weatherReducer.temperature,
  country: store.weatherReducer.country,
  description: store.weatherReducer.description,
  icon: store.weatherReducer.icon,
  error: store.weatherReducer.error,
 })

const mapDispatchToProps = { }

export default connect(mapStateToProps, mapDispatchToProps)(App);

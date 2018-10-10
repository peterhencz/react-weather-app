import { takeEvery, put, call } from 'redux-saga/effects';
import getWeather from './services/weatherapi';

function* addWeather(action) {
  console.log('cica');
  const { city, country } = action.payload;

    if (city === '' || country === '') {
      yield put({
        type: 'ADD_WEATHER_ERROR',
        payload: {
        hasError: true,
        error: 'Please choose a city/country',
      }
    });
  } else {
    try {
      const data = yield call(getWeather, city, country);

      if (data.cod === 200) {
        yield put({
          type: 'ADD_WEATHER_SUCCEEDED',
          payload: {
            temperature: Math.floor(data.main.temp - 273),
            city: data.name,
            country: data.sys.country,
            description: data.weather[0].description,
            icon: data.weather[0].icon,
          }
        });
      }
    } catch(error) {
      console.log('hiba')
    } 
  }
}

function* mySaga() {
  yield takeEvery('ADD_WEATHER_REQUESTED', addWeather);
}

export default mySaga;
export const addWeather = (city, country) => ({
  type: 'ADD_WEATHER_REQUESTED',
  payload: {
    city, 
    country,
  }
})

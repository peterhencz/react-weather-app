const API_KEY = "7257dfb135c8fcd4ac3b2fbf49fadc31";

// This service calls the api and get data from the selected city

const getWeather = async (city, country) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`,
  )
  .then(response => {
    if (response.ok) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error('Failed to load'));
    }
  })
  .then(response => response.json())
  .then(data => {
    return data;
  })
  .catch(error => {
    console.log(error.message);
    throw error;
  });
}

export default getWeather;

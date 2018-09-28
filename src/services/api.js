const API_KEY = "7257dfb135c8fcd4ac3b2fbf49fadc31";

const getWeather = async (city, country) => {
  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
  const data = await api_call.json();
  console.log(data);
  return data;
}

export default getWeather;

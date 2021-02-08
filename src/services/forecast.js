//Request to get the forecast for an specific city
export const getForecast = async(coord) => {

  const {lat, lon} = coord;

  const urlOpenWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${process.env.REACT_APP_API_KEY_OPENWEATHER}`;
  const response = await fetch(urlOpenWeather);
  const result = await response.json();

  return result;
}
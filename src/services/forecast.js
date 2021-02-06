//Request to get the forecast for an specific city
export const getForecast = async(coord) => {

    const {lat, lon} = coord;
    const apiKeyOpenWeatherMap = '90d59b52f0d676557ad6edc22bbde499';
    const urlOpenWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${apiKeyOpenWeatherMap}`;
    const response = await fetch(urlOpenWeather);
    const result = await response.json();

    return result;
  }
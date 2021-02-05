export const getForecast = async(cityCode) => {

    let cityInfo = {};

    const apiKeyOpenWeatherMap = '90d59b52f0d676557ad6edc22bbde499';
    const urlOpenWeather = `https://api.openweathermap.org/data/2.5/forecast?id=${cityCode}&appid=${apiKeyOpenWeatherMap}`;
    const response = await fetch(urlOpenWeather);
    const result = await response.json();
    cityInfo = result;
    
    return cityInfo;
  }
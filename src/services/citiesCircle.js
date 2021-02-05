export const getCitiesCircle = async(geolocationInfo) => {

    let citiesInfo = {};
    
    if (geolocationInfo) {
      const coordinates = geolocationInfo.geometry;
      const apiKeyOpenWeatherMap = '90d59b52f0d676557ad6edc22bbde499';
      const urlOpenWeather = `https://api.openweathermap.org/data/2.5/find?lat=${coordinates.lat}&lon=${coordinates.lng}&cnt=5&appid=${apiKeyOpenWeatherMap}`;

      const response = await fetch(urlOpenWeather);
      const result = await response.json();

      citiesInfo = {...result, ...geolocationInfo};
    } else {
      citiesInfo = null;
    }
    
    return citiesInfo;
  }
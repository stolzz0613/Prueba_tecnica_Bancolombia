
//Request to get the basic weather information for the nearest cities
export const getCitiesCircle = async(geolocationInfo) => {

  let citiesInfo = {};
  const coordinates = geolocationInfo.geometry;
  const urlOpenWeather = `https://api.openweathermap.org/data/2.5/find?lat=${coordinates.lat}&lon=${coordinates.lng}&cnt=6&appid=${process.env.REACT_APP_API_KEY_OPENWEATHER}`;
  const response = await fetch(urlOpenWeather);
  const result = await response.json();
  citiesInfo = {...result, ...geolocationInfo};

  return citiesInfo;
}
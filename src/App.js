import {useState, useEffect} from 'react';
import Header from './components/Header';
import Form from './components/Form';


function App() {

  //State for form
  const [search, setsearch] = useState({
    city: '',
  });
  const {city} = search;

  //State for api request
  const [request, setrequest] = useState(false);

  //State for result
  const [result, setresult] = useState({});

  useEffect(() => {
      const callApi = async () => {
        if(request){
          const geolocationInfo = await getGeolocationInfo();
          const wheatherInfo = geolocationInfo
            ? await getWeatherInfo(geolocationInfo)
            : null;
          setresult(wheatherInfo);
          setrequest(false);
        }
      };
      callApi();
  }, [request]);

  const getGeolocationInfo = async() => {
    const apiKeyOpenCage = '3f3b5b21e99b42da9f7e0ecd21c9981e';
    const urlOpenCage = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${apiKeyOpenCage}`;

    const response = await fetch(urlOpenCage);
    const result = await response.json();

    let geolocationInfo = {};
    console.log(result);
    geolocationInfo = result.results.length > 0 
        ? result.results[0]
        : null;

    return geolocationInfo;
  }

  const getWeatherInfo = async(geolocationInfo) => {
    const coordinates = geolocationInfo.geometry;
    const apiKeyOpenWeatherMap = '90d59b52f0d676557ad6edc22bbde499';
    const urlOpenWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lng}&exclude=minutely,hourly&appid=${apiKeyOpenWeatherMap}`;

    const response = await fetch(urlOpenWeather);
    const result = await response.json();

    let weatherInfo = {};

    weatherInfo = result;

    return weatherInfo;
  }

  return (
   <>
    <Header 
      title = 'Weather App'
    />

    <div className = 'contenedor-form'>
      <div className = 'container'>
        <div className = 'row'>
          <div className = 'col m6 s12'>
            <Form 
              search = {search}
              setsearch = {setsearch}
              setrequest = {setrequest}
            />
          </div>
          <div className = 'col m6 s12'>
            2
          </div>
        </div>
      </div>
    </div>
   </>
  );
}

export default App;

import {useState, useEffect} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import CitiesList from './components/CitiesList';
import Spinner from "./components/Spinner/Spinner";
import {getGeolocationInfo} from './services/geolocationInfo';
import {getCitiesCircle} from './services/citiesCircle';


function App() {

  //State for form
  const [search, setsearch]= useState({
    city: '',
  });

  //State for Spinner
  const [spinner, setspinner] = useState(false);

  //State for initial request
  const [initialRequest, setinitialRequest] = useState(true);

  //State for api request
  const [request, setrequest]= useState(false);

  //State for result
  const [result, setresult]= useState({});

  //State for non result
  const [nonresult, setnonresult]= useState(true);

  //State for message
  const [message, setmessage]= useState('');

  useEffect(() => {
    const callApi= async () => {
      if(initialRequest){
        setspinner(true);
        window.navigator.geolocation.getCurrentPosition(success);
        setinitialRequest(false);
      }
      if(request){
        setspinner(true);
        const {city}= search;
        let geolocationInfo= await getGeolocationInfo(city, setmessage);
        
        if(geolocationInfo !== null){
          let citiesInfo= await getCitiesCircle(geolocationInfo);
          setrequest(false);
          setspinner(false);
          setresult(citiesInfo);
          setnonresult(false);
        } else {
          setrequest(false);
          setspinner(false);
          setnonresult(true);
          setmessage('No results found');
        }
      } else {
        setTimeout(() => {
          setspinner(false);
          setmessage('Enter a city to start the search');
        }, 5000); 
      }
    };
    callApi();
  }, [request, initialRequest, search]);
 
  const success= async(pos) => {
    var crd = pos.coords;
    let geolocationInfo = {
      geometry: {
          lat: crd.latitude,
          lng: crd.longitude
      }
    }
    let citiesInfo= await getCitiesCircle(geolocationInfo);
    setspinner(false);
    setresult(citiesInfo);
    setnonresult(false);
  };


  return (
   <>
    <Header 
      title= 'Weather App'
    />

    <div className= 'contenedor-form'>
      <div className= 'container'>
        <div className= 'row'>
          <Form 
            search= {search}
            setsearch= {setsearch}
            setrequest= {setrequest}
            setspinner= {setspinner}
          />
        </div>
        {!spinner
          ?
            <div className= 'row'>
              {!nonresult
                ? <CitiesList 
                      cities= {result.list}
                  />
                : <p className ='error red darken-4'>{message}</p>
              }
            </div>
          :
            <Spinner />
        }
      </div>
    </div>
   </>
  );
}

export default App;

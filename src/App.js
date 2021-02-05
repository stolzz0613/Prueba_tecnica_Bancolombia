import {useState, useEffect} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import CitiesList from './components/CitiesList';
import {getGeolocationInfo} from './services/geolocationInfo';
import {getCitiesCircle} from './services/citiesCircle';


function App() {

  //State for form
  const [search, setsearch]= useState({
    city: '',
  });
  const {city}= search;

  //State for api request
  const [request, setrequest]= useState(false);

  //State for result
  const [result, setresult]= useState({});

  //State for non result
  const [nonresult, setnonresult]= useState(false);

  //State for message
  const [message, setmessage]= useState('Ingrese una ciudad para iniciar la busqueda');

  useEffect(() => {
      const callApi= async () => {
        if(request){
          let geolocationInfo= await getGeolocationInfo(city, setmessage);
          let citiesInfo= await getCitiesCircle(geolocationInfo);
          
          setresult(citiesInfo);
          setnonresult(true);
          setrequest(false);
        }
      };
      callApi();
  }, [request]);

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
          />
        </div>
        <div className= 'row'>
          {nonresult
            ? <CitiesList 
                  cities= {result.list}
              />
            : <p>{message}</p>
          }
        </div>
      </div>
    </div>
   </>
  );
}

export default App;

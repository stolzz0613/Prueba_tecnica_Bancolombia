import {useState, useEffect} from 'react';
import {getForecast} from '../services/forecast';
import ForecastChart from './ForecastChart';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import sunrise from '../assets/amanecer.png';
import sunset from '../assets/luna.png';
import storm from '../assets/snow-storm.png';
import humidity from '../assets/humidity.png';
import pressure from '../assets/barometer.png';


const ModalInfo= ({city})=> {
    const {wind, main, coord}= city;
    
    const [open, setOpen] = useState(false);
    const [forecastChartReady, setforecastChartReady] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    //State to store the forecast
    const [cityForecast, setcityForecast] = useState({
        current:{
            sunrise: '',
            sunset: ''
        }
    });

    const convertTime= (time)=> {
        var formattedTime= new Date(time * 1000);
        formattedTime= formattedTime.toLocaleTimeString();
        return formattedTime;
    }

    useEffect(() => {
        const callApiForecast = async () => {
            if(open){
                const forecast = await getForecast(coord);
                setcityForecast(forecast);
                setforecastChartReady(true);
            }
        };
        callApiForecast();
    }, [open, coord]);

    return (
        <div>
            <button onClick={onOpenModal}>Open modal</button>
            <Modal open={open} onClose={onCloseModal} center>
                <div className='modalContainer'>
                    <div className= 'modalHeader'>
                        <div className='row'>
                            <p className='modalTitle col s12 m8'>Additional Information</p>
                            <div className='center col s6 m2'>
                                <img className='icon' alt='sunrise' src= {sunrise}/>
                                <p>{convertTime(cityForecast.current.sunrise)}</p>
                            </div>
                            <div className='center col s6 m2'>
                                <img className='icon' alt='sunset' src= {sunset}/>
                                <p>{convertTime(cityForecast.current.sunset)}</p>
                            </div>
                        </div>
                    </div>
                    <div className='row center'>
                        <div className='icon-container col s12 m4'>
                            <img className='icon' alt='wind' src= {storm}/>
                            <h5 className= 'center'>Wind speed:</h5>
                            <h6 className= 'center'>{wind.speed} m/h</h6>
                        </div>
                        <div className= 'icon-container col s12 m4'>
                            <img className='icon' alt='humidity' src= {humidity}/>
                            <h5 className= 'center'>Humidity:</h5>
                            <h6 className= 'center'>{(main.humidity)} %</h6>
                        </div>
                        <div className='icon-container col s12 m4'>
                            <img className='icon' alt='pressure' src= {pressure}/>
                            <h5 className= 'center'>Pressure:</h5>
                            <h6 className= 'center'>{(main.pressure)} hPa</h6>
                        </div>
                    </div>
                    <hr/>
                    {forecastChartReady
                        ?
                            <ForecastChart
                                forecastInfo = {cityForecast}
                            />
                        : null
                    }
                </div>
            </Modal>
        </div>
    );
};
export default ModalInfo;
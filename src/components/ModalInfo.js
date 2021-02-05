import {useState} from 'react';
import ForecastChart from './ForecastChart';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import sunrise from '../assets/amanecer.png';
import sunset from '../assets/luna.png';

const ModalInfo= ({city, cityForecast})=> {
    const {wind, main}= city;
    
    const convertTime= (time)=> {
        var formattedTime= new Date(time * 1000);
        var formattedTime= formattedTime.toLocaleTimeString();
        return formattedTime;
    }

    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    return (
        <div>
            <button onClick={onOpenModal}>Open modal</button>
            <Modal open={open} onClose={onCloseModal} center>
                <div className= 'modalHeader'>
                    <div className='row'>
                        <p className='modalTitle col s12 m8'>Additional Information</p>
                        <div className='center col s6 m2'>
                            <img className='icon' src= {sunrise}/>
                            <p>{convertTime(cityForecast.current.sunrise)}</p>
                        </div>
                        <div className='center col s6 m2'>
                            <img className='icon' src= {sunset}/>
                            <p>{convertTime(cityForecast.current.sunset)}</p>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col s12 m4'>
                        <h5 className= 'center'>Wind speed:</h5>
                        <h6 className= 'center'>{wind.speed} m/h</h6>
                    </div>
                    <div className= 'col s12 m4'>
                        <h5 className= 'center'>Humidity:</h5>
                        <h6 className= 'center'>{(main.humidity)} %</h6>
                    </div>
                    <div className='col s12 m4'>
                        <h5 className= 'center'>Pressure:</h5>
                        <h6 className= 'center'>{(main.pressure)} hPa</h6>
                    </div>
                </div>
                <hr/>
                <ForecastChart 
                    forecastInfo = {cityForecast}
                />
            </Modal>
        </div>
    );
};
export default ModalInfo;
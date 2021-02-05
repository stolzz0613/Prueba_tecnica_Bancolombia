import {useState, useEffect, useRef} from 'react';
import Popup from 'reactjs-popup';
import sunrise from '../assets/amanecer.png';
import sunset from '../assets/luna.png';

const ModalInfo = ({city, cityForecast}) => {
    const {wind, main} = city;
    const {list} = cityForecast;
    
    const convertTime = (time) => {
        var formattedTime = new Date(time * 1000);
        var formattedTime = formattedTime.toLocaleTimeString();
        return formattedTime;
    }

    const ref = useRef();
    const close = () => ref.current.close();

    return (
        <Popup
            ref={ref}
            trigger={
                <button 
                    className="waves-effect waves-light btn-large green accent-4"
                > Get more Information </button>
            }
            modal
        >
            <div>
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className = 'col s12 center'>
                    <h4>Additional Information</h4>
                    <hr/>
                </div>
                <div className='row'>
                    <div className='col s12 m4'>
                        <h5 className = 'center'>Wind speed:</h5>
                        <h6 className = 'center'>{wind.speed}</h6>
                    </div>
                    <div className='col s12 m4'>
                        <h5 className = 'center'>Humidity:</h5>
                        <h6 className = 'center'>{(main.humidity)} %</h6>
                    </div>
                    <div className='col s12 m4'>
                        <h5 className = 'center'>Pressure:</h5>
                        <h6 className = 'center'>{(main.pressure)} hPa</h6>
                    </div>
                </div>
                <hr/>
                <div className='row center'>
                    <div className='col s6'>
                        <img className='icon' src={sunrise}/>
                        <p>{convertTime(cityForecast.city.sunrise)}</p>
                    </div>
                    <div className='col s6'>
                        <img className='icon' src={sunset}/>
                        <p>{convertTime(cityForecast.city.sunset)}</p>
                    </div>
                </div>
            </div>
        </Popup>
    );
};
export default ModalInfo;
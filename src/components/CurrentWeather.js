import ModalInfo from './ModalInfo';

const CurrenWeather = ({city}) => {

    const {name, weather, main} = city;
    const urlIcon = `http://openweathermap.org/img/wn/${weather[0].icon}@4x.png`;

    return (
        <div className = 'col s12'>
            <div className='card-panel white'>
                <div>
                    <div className ='row'>
                        <img 
                            className = 'col'
                            src = {urlIcon}
                            alt = 'icon'
                        />
                        <div className = 'col s12 m6'>
                            <h2>Current weather for: </h2>
                            <p className = 'city-name'>
                                {name}
                            </p>
                        </div>
                    </div>
                    <div className ='row'>
                        <div className='col s12 m6 l3'>
                            <h5 className = 'center'>{weather[0].main}</h5>
                            <h6 className = 'center'>{weather[0].description}</h6>
                        </div>
                        <div className='col s12 m6 l3'>
                            <h5 className = 'center'>Current:</h5>
                            <h6 className = 'center'>{(main.temp - 273.15).toFixed(2)} &deg;C</h6>
                        </div>
                        <div className='col s12 m6 l3'>
                            <h5 className = 'center'>Max:</h5>
                            <h6 className = 'center'>{(main.temp_max - 273.15).toFixed(2)} &deg;C</h6>
                        </div>
                        <div className='col s12 m6 l3'>
                            <h5 className = 'center'>Min:</h5>
                            <h6 className = 'center'>{(main.temp_min - 273.15).toFixed(2)} &deg;C</h6>
                        </div>
                    </div>
                    <div className='center-align s12'>
                        <ModalInfo
                            city = {city}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default CurrenWeather;
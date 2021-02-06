import ModalInfo from './ModalInfo';

const CurrenWeather = ({city}) => {

    const {name, weather, main} = city;
    const urlIcon = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

    return (
        <div className = 'col s12 m4'>
            <div className='card-panel'>
                <div className='center'>
                    <div className='card-header'>
                        <p className = 'city-name'>{name}</p>
                        <h6>{weather[0].description}</h6>
                        <h6>{(main.temp - 273.15).toFixed(2)} &deg;C</h6>
                    </div>
                    <span className = 'weatherIcon'>
                        <img
                            src = {urlIcon}
                            alt = 'icon'
                        />
                    </span>
                    <div className ='minmaxDiv row'>
                        <div className='col s12 m6 l6'>
                            <p className = 'city-name center'>Max</p>
                            <h6 className = 'center'>{(main.temp_max - 273.15).toFixed(2)} &deg;C</h6>
                        </div>
                        <div className='col s12 m6 l6'>
                            <p className = ' city-name center'>Min</p>
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
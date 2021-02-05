import Popup from 'reactjs-popup';
import sunrise from '../assets/amanecer.png';
import sunset from '../assets/luna.png';

const ModalInfo = ({city}) => {
    const {name, wind, main} = city;
    return (
        <Popup
            trigger={<button className="waves-effect waves-light btn-large green accent-4"> Get more Information </button>}
            modal
        >
            <div>
                <div className='col s12'>
                    <h5 className = 'center'>Wind speed:</h5>
                    <h6 className = 'center'>{wind.speed}</h6>
                </div>
                <div className='col s12'>
                    <h5 className = 'center'>Humidity:</h5>
                    <h6 className = 'center'>{(main.humidity)} %</h6>
                </div>
                <div className='col s12'>
                    <h5 className = 'center'>Pressure:</h5>
                    <h6 className = 'center'>{(main.pressure)} hPa</h6>
                </div>
                <div className='col s12'>
                    <h5 className = 'center'>Min:</h5>
                    <h6 className = 'center'>{(main.temp_min - 273.15).toFixed(2)} &deg;C</h6>
                </div>
                <div className='row'>
                    <div className='col s6'>
                        <img className='icon' src={sunrise}/>
                        <p>amanecer</p>
                    </div>
                    <div className='col s6'>
                        <img className='icon' src={sunset}/>
                        <p>anocher</p>
                    </div>
                </div>
            </div>
        </Popup>
    );
};
export default ModalInfo;
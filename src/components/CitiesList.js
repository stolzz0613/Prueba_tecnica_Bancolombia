import CurrenWeather from "./CurrentWeather";

const CitiesList = ({cities}) => {
    return (
        <div className='mt-5'>
            {cities.map(city => (
                <CurrenWeather 
                    city = {city}
                />
            ))}
        </div>
    );
}
 
export default CitiesList;
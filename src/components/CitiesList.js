import CurrenWeather from "./CurrentWeather";

const CitiesList = ({cities}) => {
    return (
        <div className='mt-5'>
            {cities.map(city => (
                <CurrenWeather 
                    city = {city}
                    key = {city.id}
                />
            ))}
        </div>
    );
}

export default CitiesList;
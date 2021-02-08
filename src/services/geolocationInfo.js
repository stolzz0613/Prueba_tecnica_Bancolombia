//Request to get the coordinates for a name
export const getGeolocationInfo = async(city, setmessage) => {

    const urlOpenCage = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${process.env.REACT_APP_API_KEY_OPENCAGE}`;
    
    const response = await fetch(urlOpenCage);
    const result = await response.json();

    let geolocationInfo = {};
    if (result.results.length > 0) {
        geolocationInfo = result.results[0];
    } else {
        geolocationInfo = null;
        setmessage('No se encontraron resultados');
    }

    return geolocationInfo;
}
//Request to get the coordinates for a name
export const getGeolocationInfo = async(city, setmessage) => {

    const apiKeyOpenCage = '3f3b5b21e99b42da9f7e0ecd21c9981e';
    const urlOpenCage = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${apiKeyOpenCage}`;

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
const axios = require('axios');

const getLugarLatLng = async( dir ) => {

const encodedUrl = encodeURI( dir )

const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUrl }`,
    timeout: 1000,
    headers: {'x-rapidapi-key': '9770a1a25cmsh525a064e54f1419p170539jsnd6b7e32fe986'}
    });

const resp = await instance.get()

if ( resp.data.Results.lenght === 0 ){
    throw new Error(`No hay resultados para ${ dir }`);
}

const data = resp.data.Results[0];
const dirreccion = data.name;
const lat = data.lat;
const lng = data.lon;
          

    return {
        dirreccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}



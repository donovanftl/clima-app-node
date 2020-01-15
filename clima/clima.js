const axios = require('axios');

const getClima = async( lat, lng ) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=95c83b8d4b8731d6674097b1e60a8a55&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima    
}
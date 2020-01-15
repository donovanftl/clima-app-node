const lugar = require ( './lugar/lugar' );
const clima = require ( './clima/clima' );


const argv = require('yargs').options({
    dirreccion:{
        alias: 'd',
        desc: 'Dirreccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// argv.dirreccion

// lugar.getLugarLatLng( argv.dirreccion )
//         .then(console.log);

// clima.getClima( 40.750000, -74.000000)
//         .then(console.log)
//         .catch(console.log);
const getInfo = async( dirreccion ) => {
    
    try {
        const coord = await lugar.getLugarLatLng( dirreccion );
        const temp = await clima.getClima ( coord.lat, coord.lng );
        return `El clima de ${ coord.dirreccion } es de ${ temp }.`  
        
    } catch (e) {
        return `No se pudo determinar de ese lugar ${ dirreccion }`;
    }

}
getInfo ( argv.dirreccion)
        .then(console.log)
        .catch(console.log); 

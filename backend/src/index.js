require('dotenv').config();

const app = require('./app');
require('./database');

//async para marcar el uso de await
async function main(){
    await app.listen(app.get('port')); //metodo asincrono por await, a que inicie el servidor
    console.log('servidor en puerto ', app.get('port'));
}

main();
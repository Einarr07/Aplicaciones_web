const app = require('./server.js')
const connection = require('./database.js')
require('dotenv').config()

//connection()
app.listen(app.get('port'),()=>{
    console.log(`Servidor activo puerto ${app.get('port')}`);
})
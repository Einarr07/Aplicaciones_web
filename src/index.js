const app = require('./server.js')

app.listen(app.get('port'),()=>{
    console.log(`Servidor activo puerto ${app.get('port')}`);
})
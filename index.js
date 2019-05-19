const express = require('express');
const bodyParser = require('body-parser')
const morgan = require('morgan')

var app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));

//Settings
app.set('port',process.env.PORT || 3000);

//Rutas
require('./src/rutas/rutasTiendas')(app);

app.listen(app.get('port'), () =>{
  console.log('Server on port',app.get('port'))
})


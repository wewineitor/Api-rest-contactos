const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
const port = 4000;

app.set('port', process.env.PORT || port);

app.use(cors());
app.options('*', cors());
app.use(morgan('dev'));
app.use(express.json());



//Rutas
app.use(require('./routes/rutas'));

mongoose.connect('mongodb://localhost/Proyecto');

app.listen(port, () => {
    console.log('Servidor conectado en puerto', app.get('port'));
});


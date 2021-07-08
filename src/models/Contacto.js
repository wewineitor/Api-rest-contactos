const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let contacto = new Schema({
    Nombre: String,
    Numero: Number
});

module.exports = mongoose.model('contactos', contacto);

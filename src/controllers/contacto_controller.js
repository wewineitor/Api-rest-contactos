const Contacto = require('../models/Contacto')

const contactos = {};

contactos.getContactos = async(req, res) => {
    const contacto = await Contacto.find();
    res.json(contacto);
}

contactos.addContacto = async(req, res) => {
    const contacto = new Contacto(req.body);
    await contacto.save();
    res.json({"Status": "Ok"});
}

contactos.updateContacto = async(req, res) => {
    const {id} = req.params;
    await Contacto.updateOne({"_id": id}, req.body);
    res.json({"Status": "Ok"});
}

contactos.delContacto = async(req, res) => {
    const {Nombre, Numero} = req.body;
    await Contacto.remove({"Nombre": Nombre, "Numero": Numero});
    res.json({"Status": "Ok"});
}

module.exports = contactos;
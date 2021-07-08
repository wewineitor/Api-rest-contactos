const express = require('express');
const contacto_controller = require('../controllers/contacto_controller');
const router = express.Router();

router.get('/contactos', contacto_controller.getContactos);
router.post('/contactos', contacto_controller.addContacto);
router.put('/contactos/:id', contacto_controller.updateContacto);
router.delete('/contactos', contacto_controller.delContacto);

module.exports = router;
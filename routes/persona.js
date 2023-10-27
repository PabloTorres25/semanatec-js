// Este va a tener la ruta y va a conectar al controller, y de ahi lo conectaremos al index
const express = require('express');
const router = express.Router();
const personaController = require("../controllers/persona");    // Lo que hicimos del modulo exports, es para que pdodamos usarlo en esta linea

// Rutas de mi controller
router.post('/agregarPersona', personaController.postAgregarPersona);
router.get('/consultarPersonas', personaController.getConsultaPersonas);

module.exports = router

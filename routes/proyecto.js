// Este va a tener la ruta y va a conectar al controller, y de ahi lo conectaremos al index
const express = require('express');
const router = express.Router();
const proyectoController = require("../controllers/proyecto");    // Lo que hicimos del modulo exports, es para que pdodamos usarlo en esta linea

// Rutas de mi controller
router.post('/agregarProyecto', proyectoController.postAgregarProyecto);
router.get('/consultarProyectos', proyectoController.getConsultaProyectos);

module.exports = router

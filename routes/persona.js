// Este va a tener la ruta y va a conectar al controller, y de ahi lo conectaremos al index
const express = require('express');
const router = express.Router();
const personaController = require("../controllers/persona");
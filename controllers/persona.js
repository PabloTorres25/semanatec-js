const Seq = require('sequelize');
const sequelize = require('../util/database');
const Persona = sequelize.models.persona;

exports.postAgregarPersona=(req, res)=>{
    console.log(req.body);
    Persona.create(req.body);
}
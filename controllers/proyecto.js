const Seq = require('sequelize');
const sequelize = require('../util/database');
const Proyecto = sequelize.models.proyecto;

exports.postAgregarProyecto=(req, res)=>{
    console.log(req.body);
    Proyecto.create(req.body)
    .then(result=>{
        console.log("Registro exitoso");
        res.send("Resgistro exitoso");
    })
    .catch(error=>{
        console.log(error);
        res.send('Hubo un problema')
    })
}
exports.getConsultaProyectos = async(req,res)=>{
    try{
        const result = await Proyecto.findAll();
        res.send(result);
    }catch(error){
        console.log(error);
        res.send('Hubo un problema')
    }
}

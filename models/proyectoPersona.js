const Sequelize=require('sequelize');

const ProyectoPersona = (sequelize)=>{
    sequelize.define('proyectopersona',{
        // Como es tabla intermedia entre un MUCHOS a MUCHOS, podemos dejala sin atributos
        estado:Sequelize.STRING(20)
    })
};
// Para llamar la tabla ProyectoPersona desde otro archivo 
module.exports = ProyectoPersona;

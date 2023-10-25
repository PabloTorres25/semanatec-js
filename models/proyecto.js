const Sequelize=require('sequelize');

const Proyecto = (sequelize)=>{
    sequelize.define('proyecto',{
        idPersona:{
            type:Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        nombre:Sequelize.STRING,
        descripcion:Sequelize.STRING
    })
};
// Para llamar la tabla Proyecto desde otro archivo 
module.exports = Proyecto;

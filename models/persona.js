const Sequelize=require('sequelize');

const Persona = (sequelize)=>{
    sequelize.define('persona',{
        idPersona:{
            type:Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        nombre:Sequelize.STRING(50)
    })
};
// Para llamar la tabla Persona desde otro archivo 
module.exports = Persona;

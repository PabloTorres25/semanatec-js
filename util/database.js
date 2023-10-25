// Como utilizar la herramienta ORM Sequelize
const Sequelize=require('sequelize');
const {applyRelations} = require('./relations')
// Configurar la conexión
// mysql -u admin -h -P 3306 -p
const sequelize = new Sequelize('semanatec', 'admin', 'password', {
    dialect:'mysql',
    host:'database-1.ck9ajljbobd5.us-east-1.rds.amazonaws.com',
    define:{
        // Evitar que nos ponga createAt y updateAt
        timestamps: false,
        // Pluralizar
        freezeTableName: true   
    }
});

// Cargar modelos
const modelDefiners = [
    require('../models/persona'),
    require('../models/proyecto'),
    require('../models/proyectopersona')
]

// Vincular el modelo con el objeto de conexión
for(const modelDefiner of modelDefiners){
    modelDefiner(sequelize)
}

// Contruir las relaciones
applyRelations(sequelize);

// Exportar el elemento de conexión
module.exports = sequelize;
 
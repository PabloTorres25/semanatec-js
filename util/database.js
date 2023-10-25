// Como utilizar la herramienta ORM Sequelize
const Sequelize=require('sequelize');
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

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
        freezeTableName:true   
    }
});

// Creamos una Tabla llamada ejemplo
const Ejemplo = sequelize.define('ejemplo',{
    idTrabajo:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    descripcion:{
        type: Sequelize.STRING,
        allowNull: true
    }
});

// Prueba de conexión
sequelize.sync()
.then(result =>{        //1
    console.log("Conexión exitosa");
})
.catch(error=>console.log(error));

/**
 * En Node, el codigo se ejecuta dependiendo del hilo de codigo de Node, es decir, no se ejecuta en el orden en 
 * el que esta escrito.
 * 1.   JavaScript, hace promesas de que el codigo se va a ejecutar, pero no te dice cuando, por eso utilizamos
 *      el "then"
 */
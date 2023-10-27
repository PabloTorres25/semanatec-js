// Importar bibliotecas
const express = require("express");
const app = express();
const personaRoutes = require('./routes/persona')               //4
// Trae el objeto de conexión
const sequelize = require('./util/database')

//middleware                                                    //1
app.use(express.json());
app.use('')

// Mala practica
app.get('/test', (request, response)=>{                         //3
    console.log("Esto no se debe de hacer pero funciona")
    response.send('<h1>Servidor Funcionando</h1>')
})

// Levantar el server y escuchar peticiones
sequelize.sync()
.then(result =>{
    app.listen(8080, ()=>{                                      //2
        console.log("Servidor escuchando")
    })  
})
.catch(error=>console.log(error));

  


/**
 * NOTAS
 * En js el punto y coma es opcional, es intercambiable con el enter, y ponerlo se considera una buena practica
 * 
 * 1.   El Middleware es el que recibe la petición y si le falta algo lo va a procesar y despues lo enviara al backend, si no lo tenemos puede que funcione pero tamien puede que fallen algunas de las rutas
 * 
 * 2.   Callback: Una función que se va a ejecutar cuando se llama a una función
 *      Aqui por ejemplo cuando escuche el listen llama al console.log
 * 
 * 3.   Hacer esto es una mala practica ya que rompe con el modelo MVC, en el index no se deberian de hacer llamadas a la base de datos
 * 
 * 4.   Rutas de persona
 */
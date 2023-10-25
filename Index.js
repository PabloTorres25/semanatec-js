// Importar bibliotecas
const express = require("express");
const app = express();
//middleware        //1
app.use(expressjson());

// Levantar el server
app.listen(8080, ()=>{
    console.log("Servidor escuchando :")
})      //2


/**
 * NOTAS
 * En js el punto y coma es opcional, es intercambiable con el enter, y ponerlo se considera una buena practica
 * 
 * 1.   El Middleware es el que recibe la petición y si le falta algo lo va a procesar y despues lo enviara al backend, si no lo tenemos puede que funcione pero tamien puede que fallen algunas de las rutas
 * 
 * Callback: Una función que se va a ejecutar cuando se llama a una función
 * Aqui por ejemplo cuando escuche el listen llama al console.log
 */
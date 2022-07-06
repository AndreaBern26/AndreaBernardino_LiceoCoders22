//Creación del server
const express = require("express");//Requiero mi framework de express 

//Configuración del server
const app = express(); //LLama a la función express para crear una app que nos permita configurar todo nuestro servidor.

app.set("view engine", "ejs"); //Le decimos que utilice ejs como motor de vista

/*Métodos más importantes para servidores:
    .get: acceder a un recurso y a información relativa, no necesitas alterar o modificar el estado de esta información obtenida.
    .post: enviar cierta información al servidor. Ejemplo: de un formulario para guardar la información del formulario para su uso más adelante.
    .head: acceder a un recurso y recuperar solo las cabeceras de la respuesta, sin obtener ninguna información del recurso.
    .put: reemplazar el estado de cierta información ya existente en el sistema.
    .delete: borrar un recurso (relativo a la URI que envias) en el sistema.
    .options: saber que tipos de métodos de respuesta soporta el servidor. Se usa para el CORS.
*/

app.get('/', (req,res) =>{ //Solicitamos la obtención de la url con .get('ruta', función).
    
    //Código a ejecutar cada vez que se acceda a esta URL.
    console.log('Here');
    //res.sendStatus(500); //Si hay un error en el server, manda un mensaje de error.
    //res.send("Hi"); //Manda como respuesta Hi al usuario. Sólo manda texto.
    //res.status(500).send("Hi"); //Internamente hay un error pero le manda al usuario el saludo igualmente.
    
    //res.download('server.js'); //envía un archivo al usuario para descargárselo a través de la ruta.
    //res.json ({message: "Error"}); //También podemos mandar objetos json
    
    //res.render("index");//Representamos un archivo html renderizamos el archivo
    res.render("index", {text: "World"});
});

const userRouter = require('./routes/users');

app.use("/users", userRouter);//vinculamos las rutas. Aquí estamos anidando las rutas de usuario.
app.listen(3000);//Ejecuta nuestro servidor con un puerto como parámetro. Ya tenemos el servidor a la escucha de peticiones en el puerto 3000.

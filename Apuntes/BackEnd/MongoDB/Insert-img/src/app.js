const express = require('express');
const morgan = require ('morgan');
const multer = require ('multer');
const path = require('path');
const { uuid } = require('uuidv4');
const db = require('./database');
const { format } = require('timeago.js')

//Initializations
const app = express();


//Settings
app.set('port', process.env.PORT || 3000); //Si existe un puerto definido en las variables de entorno, cógelo. Si no existe, toma el puerto 3000
app.set('views', path.join (__dirname, 'views'));
app.set('view engine', 'ejs');

//Middleware
app.use(morgan('dev')); //Muestra la info de la petición
app.use(express.urlencoded({extended:false})); //Para entender los datos del formulario.
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/img/uploads'),
    filename: (req, file, cb, filename) =>{
        cb(null, uuid() + path.extname(file.originalname)); //Extrae la extensión del nombre.
    }
});
app.use(multer({ storage:storage }).single('image'));

//Global variables
app.use((req,res,next) =>{
    app.locals.format = format;
    next();
});
//Routes
app.use(require('./routes/index'));

//Static Files
app.use(express.static(path.join(__dirname, 'public')));

//Start the server
app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`);
});

const express = require('express');
const path = require('path'); //Une directorios
const indexRouter = require ('./routes/index');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid'); //Id aleatorio

//Initilizations
const app = express();

//Settings
app.set('port',3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Middleware
const storage = multer.diskStorage({
    //Configuración de guardado del archivo
    destination: path.join(__dirname, '/public/images'), //indica la dirección de ruta donde tiene que guardar el archivo.
    filename: (req,file, cb) =>{
        cb(null, uuidv4() + path.extname(file.originalname).toLocaleLowerCase()); //Coge la extensión del archivo y la concatenas.
    } //Es en realidad una función. Es el nombre con el que se guarda el archivo
});

const upload = multer({
    storage:storage,
    dest: path.join(__dirname, '/public/images'), //Le digo que lo coloque dentro de la carpeta src.
    limits:{fileSize: 2000000},
    fileFilter: (req, file, cb) =>{
        const filetypes = /jpeg|jpg|gif|png/;
        const mimetype = filetypes.test(file.mimetype); //mimetype es la extensión del archivo
        const extname = filetypes.test(path.extname(file.originalname));//nombre igual que el archivo.
        
        if(mimetype && extname){
            return cb(null, true);//No hagas nada, solo sigue con lo tuyo porque no hay error.
        }

        cb("Error: El archivo debe ser una imagen");
    }
}).single('image');

app.use(upload);

//Routes
app.use(indexRouter);

//Static Files
/*Hago accesible la carpeta public desde el navegador*/ 
app.use(express.static(path.join(__dirname, 'public')));

//Start server

/*Escucha en el puerto que he configurado arriba y cuando
se inicie, me imprima por consola el mensaje de que ya está
escuchando en el puerto dicho*/
app.listen(app.get('port'), () =>{
    console.log(`Server on port ${app.get('port')}`)
});
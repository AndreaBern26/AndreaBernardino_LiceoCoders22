/*Creación servidor Express*/
import express from "express"; //importo express
import {loginRouter} from "../routes/login.js";
import passport from "passport"; //importo passport
import "../middlewares/google.js" //importo el middleware de google

const app = express();

/*-----MIDDLEWARES-----*/
app.use(express.json());
app.use(passport.initialize()); //inicializo passport

//Routes
app.use(
    "/auth", 
    passport.authenticate("auth-goole", {
        //Configuración de la autenticación
        scope:[ //scope es el nivel de alcance a la info del usuario
            "https://www.googleapis.com/auth/userinfo.email", //Permite ver su dirección de correo electrónico
            "https://www.googleapis.com/auth/userinfo.profile", //Permite ver su información personal, incluida la información personal que haya puesto a disposición del público.
        ],
        session:false,
    }), 
    loginRouter
);//Defino el router con el callback URL que he importado.

app.listen (3000, ()=> console.log("http://localhost:3000"));
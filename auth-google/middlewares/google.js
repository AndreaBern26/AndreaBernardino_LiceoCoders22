import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import { config } from 'dotenv'; //variables de entorno
import passport from 'passport';
config(); //Carga las variables de entorno definidas en nuestro archivo .env.

const emails = ["andreabern26@gmail.com"]; //base de datos de prueba

//Use the GoogleStrategy within Passport.
//  Strattegies in Passport require a 'verify' function, witch accept
//  credentials (in this case, an accessToken, refreshToken, and Google
//  profile), and invoke a callback with a user object.

passport.use(
    "auth-google", 
    new GoogleStrategy(
      {
        clientID:     process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/google", //Misma URL que hemos definido en Google Cloud
        //passReqToCallback: true
      },
      function(accessToken, refreshToken, profile, done) {
        const response = emails.includes(profile.emails[0].value); //El método includes() determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda.

        //Si existe en la base de datos
        if (response){
          done(null,profile);//Devuelve el perfil. done(error, qué devuelve); Como no hay error, el 1er parámetro es null
        }else{
          //Si no existe, guárdalo en la base de datos
          emails.push(profile.emails[0].value); //guardo el usuario en el array
          done(null,profile);
        }
      }
));

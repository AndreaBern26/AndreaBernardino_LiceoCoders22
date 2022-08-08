const mongoose = require('mongoose'); //Para tener disponible Mongoose en el archivo. Tengo que hacer esto en cada archivo que vaya a usar Mongoose

const uri = 'mongodb://localhost:27017/TrueLove';

/*
    Proceso de conexión a base de datos (se intenta conectar)
    Si no puede, coge ese error (catch) y lo imprime por consola
*/
mongoose.connect(uri).catch(err => console.log(err));


/*
    Función que se ejecuta cuando ya ha ocurrido la conexión.

    Cuando tu conexión sea abierta quiero ver por consola la base de datos a 
    la que estoy conectada.

    Como la conexión se ejecuta sólo una vez, se utiliza el método once.

    El _ es para decirle que no voy a usar ningún parámetro en la función.
*/
mongoose.connection.once('open', _ =>{ 
    console.log('Database is connected to', uri);
})

/*
    Cuando ocurra un error en la conexión, quiero ver el error por consola

    Tiene el parámetro err que es el error que me va a dar si hay
*/
mongoose.connection.on('error', err =>{
    console.log(err);
});

/*
    La diferencia entre .once y .on es:
        -> El evento .once sólo voy a escucharlo una vez. Una vez que se
            ejecuta el código, luego será ignorado.
        -> El evento .on no importa cuántas veces ocurra el evento que 
            siempre se ejecutará el código de la función descrita en el.
*/
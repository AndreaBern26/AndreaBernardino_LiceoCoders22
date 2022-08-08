/*
    Código asíncrono. Evita usar callbacks y escribir promesas
*/

require('./connection');

const Product = require('./models/Product');


/*Función asíncrona*/
async function main(){
    const product = new Product({
        name: 'keyboard',
        description: 'Coursair k68 RGB Gaming keyboard',
        price: 150
    });
    
    /*
        Await especifica que el códgio a continuación es asíncrono
        Para que funcione, tiene que estar dentro de una función async
    */
    const productSaved = await product.save();
    return productSaved;
}


/* 
    Promesa main
    Una vez que termine de ejecutar la función main, entonces me muestras por
    consola el producto guardado. Si existe un error, muéstramelo
*/
main()
    .then(productSaved => console.log(productSaved))
    .catch(err => console.log(err));
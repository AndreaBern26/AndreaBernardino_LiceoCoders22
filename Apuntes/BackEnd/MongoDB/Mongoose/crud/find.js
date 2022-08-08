/*Listar productos*/
require('../connection');

const Product = require('../models/Product');

/*Función asíncrona*/
async function main(){
    //const products = await Product.find() //Busca todo los productos que tenga guardados en mi base de datos.
    const products = await Product.find({name:"laptop"});
    console.log(products);
}

main();
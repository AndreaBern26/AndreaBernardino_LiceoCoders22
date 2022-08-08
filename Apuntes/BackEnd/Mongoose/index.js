require('./connection');
const Product = require('./models/Product');//Para poder usar el modelo


//Creo un nuevo producto con id por defecto (puesto por Mongoose)
const product1 = new Product({
    name: 'laptop',
    description: 'lenovo thinkpad x1 carbon 6th generation',
    price: 1300.99
});



/*
    El método nombreProducto.save() guarda el nuevo producto en la base
    de datos.

    Puede contener una función con parámetros el error que me pueda dar al guardarlo
    o bien el documento que ha creado Mongo para mi nuevo producto.

    Sé que guarda el nuevo producto por la variable __v: 0 que envía junto a las
    propiedades del objeto.
*/
product1.save((err,document) =>{
    if (err){
        console.log (err);
    }else{
        console.log (document);
    }
});

console.log(product1);


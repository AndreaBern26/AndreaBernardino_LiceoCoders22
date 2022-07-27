/*
    Esquema que necesitamos para crear un modelo.

    Un esquema son las propiedades que van a tener los datos dentro de la base
    de datos. Es decir, la estructura en común que va a tener un objeto.
 */

/*
    Destructuring. Extrae una propiedad de un objeto.
    En este caso, extraigo una función de Mongoose.
*/    
const { Schema, model} = require('mongoose');


/*Creación del esquema*/

const productSchema = new Schema ({
    name: {type: String},
    description: {type: String},
    price: {type: Number, default: 0} //Precio por defecto = 0€

});

/*El modelo es lo que me va a permitir añadir, borrar, actualizar los datos, etc.

  El modelo lo creo con el método model('nombre de mi modelo', nombre de mi esquema);
*/
module.exports = model('Product', productSchema);

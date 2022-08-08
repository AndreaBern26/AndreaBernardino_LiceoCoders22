/*Permite buscar sólo un producto */
require('../connection');

const Product = require('../models/Product');

/*Función para crear producto nuevo*/
const createProducts = async () =>{
    const laptopOne = new Product({
        name: 'laptop hp',
        description: 'htp pavilion 15',
        price: 634.25
    });

    await laptopOne.save();

    const laptopTwo = new Product({
        name: 'laptop lenovo',
        description: 'lenovo x1',
        price: 856.98
    });

    await laptopTwo.save();
}

createProducts();
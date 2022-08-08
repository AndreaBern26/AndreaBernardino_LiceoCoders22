require('../connection');

const Product = require ('../models/Product');

/*Elimina todos los datos que tengan el nombre laptop*/
const deleteElements = async () => { 
    const result = await Product.deleteMany({name: 'laptop'});
    console.log(result);
}

//deleteElements();

/*Elimina todos los datos que tengan el nombre laptop*/
const deleteAnElement = async () => { 
    const result = await Product.deleteOne({name: 'laptop hp'});
    console.log(result);
}

//deleteAnElement();

/*Busca un objeto en específico y lo elimina*/
const deleteElement = async () => { 
    const result = await Product.findOneAndDelete({name: 'keyboard'});
    console.log(result);
}

//deleteElement();


/*Busca un objeto por ID y lo elimina*/
const deleteElementById = async () => { 
    const result = await Product.findByIdAndDelete('62e16d08301845332f3f2d49');
    console.log(result);
}

deleteElementById();
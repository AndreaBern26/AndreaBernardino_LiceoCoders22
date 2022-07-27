/*Permite buscar sólo un producto */
require('../connection');

const User = require('../models/User');

/*Función para obtener un usuario en específico*/
async function getUser(){
    //Busca en la colección usuario a uno que tenga el nombre de joe
   const user = await User.findOne({username: 'Joe'});
   console.log(user);
}

getUser();
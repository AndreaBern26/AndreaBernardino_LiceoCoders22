
require('../connection');

const User = require('../models/User');

/*Otro modo de actualizar los datos sin necesidad del método update*/
const someFunction = async () =>{
    const user = await User.findOne({username:'Joe'});
    console.log(user);
    user.password = 'minuevacontraseña'
    user.save();
}

//someFunction();
/*
    Función para actualizar un objeto.

    El método update tiene dos parámetros:
        1. la propiedad por la que buscar los datos a reemplazar
        2. La propiedad que quiero reemplazar en dichos datos.
*/
async function updateUser(){
   const user = await User.update({username: 'Joe'}, 
   {password: 'contraseñaSegura'});
   
   console.log(user);
}

//updateUser();

const otherFunction = async () => {
    const user = await User.findOneAndUpdate({username: 'nina26'}, 
    {name: 'Nina Simone'},
    {new: true}) //new:true para que se actualice el dato.
    console.log(user);
}

otherFunction();
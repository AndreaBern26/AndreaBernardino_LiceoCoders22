const express = require('express');
const router = express.Router(); //Enrutador. Es como una mini app que está completamente operativa pero sólo existe en este archivo
                                  //Esto hace que las cosas que configuramos aquí serán independientes del enrutador principal (app.get('/'))
//Creo otra ruta llamada users
router.get("/", (req,res) =>{
  res.send("User List");

});

//Creo una subruta en la ruta users
router.get("/new", (req,res) =>{
  res.send("User New Form");
});

router.post("/", (req, res) => {
    res.send("Create User");
}); //Envío la info de un formulario de nuevo usuario

/*
//Ruta de usuario
router.get("/:id", (req, res) =>{ //Acceso del usuario a su perfil. Los ":" hacen a un parámetro dinámico
  //res.params.id; //Para acceder al parámetro id
  res.send(`Get User With ID ${req.params.id}`); //Requerimos la id del usuario y enviamos la info.

});

//Actualizar usuario
router.put("/:id", (req, res) =>{ //Acceso del usuario a su perfil. Los ":" hacen a un parámetro dinámico
  //res.params.id; //Para acceder al parámetro id
  res.send(`Update User With ID ${req.params.id}`); //Requerimos la id del usuario y enviamos la info.

});

//Eliminar usuario
router.delete("/:id", (req, res) =>{ //Acceso del usuario a su perfil. Los ":" hacen a un parámetro dinámico
  //res.params.id; //Para acceder al parámetro id
  res.send(`Delete User With ID ${req.params.id}`); //Requerimos la id del usuario y enviamos la info.

});
*/

//Con express
router.route("/:id")
.get((req, res) =>{
  console.log(req.user);
  res.send(`Get User With ID ${req.params.id}`); 
})
.put((req, res) =>{
  res.send(`Update User With ID ${req.params.id}`);
})
.delete((req, res) =>{ 
  res.send(`Delete User With ID ${req.params.id}`); 
});

/*Es lo mismo una cosa que la otra, con la diferencia que con express sólo tuvimos que definir la ruta una vez
  y todas las solicitudes coincidirán con esa ruta.
*/

const users = [{name: "Andrea"}, {name: "Lucas"}];
//Middleware
router.param("id", (req, res, next, id) =>{
  req.user = users[id];
  next();
}); //Hace que la función se ejecute cada vez que un parámetro coincida con el parámetro que se le pasa
module.exports = router; //Exporto el enrutador
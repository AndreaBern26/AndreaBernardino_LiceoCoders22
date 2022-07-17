import { Router } from "express";
/*
    Un objeto Router es una instancia aislada de middleware y rutas. Puede 
    considerarse como una "miniaplicación", capaz solo de realizar funciones de 
    middleware y enrutamiento. Cada aplicación Express tiene un enrutador de 
    aplicaciones integrado.
*/

const loginRouter = Router(); //El método Router() crea un nuevo objeto router.

/*
    Una vez que haya creado un objeto de enrutador, puede agregarle rutas de método 
    HTTP y middleware (como get, put, post, etc.) como si fuera una aplicación
*/


/*
    Callback URL: ruta a la cual se le hace una solicitud luego de que 
    nosotros hayamos completado una autenticación. Con esto recibimos toda 
    la info del usuario
*/

loginRouter.get("/google", (req, res) => res.send(req.user));//callback URL. Devuelve la info del usuario 

export {loginRouter}; //Exportamos como objeto loginRouter


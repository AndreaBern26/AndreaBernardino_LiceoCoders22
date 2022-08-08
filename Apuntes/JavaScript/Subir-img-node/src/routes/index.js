const {Router} = require('express'); //Router me permite crear rutas.

const path = require('path');

const router = Router(); //Ejecuto Router para poder crear rutas.

//Routes
router.get('/',(req,res) =>{
    res.render('index');
});

router.post('/upload', (req,res) =>{
    console.log(req.file);
    res.send("uploaded");
});

module.exports = router;
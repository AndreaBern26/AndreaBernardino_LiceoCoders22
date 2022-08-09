const { Router } = require('express');
const path = require('path');
const { unlink } = require('fs-extra');
const Image = require('../models/Image');

const router = Router();

/*Página principal*/
router.get('/', async (req, res) => {
    const images = await Image.find();
    res.render('index', { images });
});

/*Página que contiene el formulario*/
router.get('/form', (req, res) => {
    res.render('form');
});

/*Página de envío del formulario*/
router.post('/form', async (req, res) => {
    const image = new Image();
    image.title = req.body.title;
    image.description = req.body.description;
    image.filename = req.file.filename;
    image.path = '/img/uploads/' + req.file.filename;
    image.originalname = req.file.originalname;
    image.mimetype = req.file.mimetype;
    image.size = req.file.size;

    await image.save();
    res.redirect('/');
});

/*Pagina que contiene la imagen seleccionada*/
router.get('/image/:id', async (req, res) => {
    const image = await Image.findById(req.params.id);
    res.render('profile', { image });
});


/*Página que borra la imagen seleccionada*/
router.get('/image/:id/delete', async (req, res) => {
    const imageDeleted = await Image.findByIdAndDelete(req.params.id);
    await unlink(path.resolve('./src/public' + imageDeleted.path));
    res.redirect('/');
});


module.exports = router;
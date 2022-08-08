const { Schema, model } = require('mongoose');

const userSchema = new Schema ({
    username: {type: String, unique: true, required: true}, //Unique: Sólo puede ser guardado un nombre, no dos iguales.
    password: {type: String, default: new Date()}, //Por defecto la fecha actual.
    date: {type: Date},
    name: {String}
});

module.exports = model('User', userSchema);



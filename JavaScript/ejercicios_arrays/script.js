/*Ejercicio frutas

let frutas = ["Peras", "Manzanas" , "Plátanos", "Kiwis", "Cocos"];
let vacio = [];

for (let i = 0; i < frutas.length;i++){
    vacio [i] = frutas[i];
    console.log ("Listado de frutas: " + frutas + "\n" + "Listado de lista vacía: " + vacio);
}
*/

/*Ejercicio alumnos con arrays
let alumno1 = {
    nombre: "Amaia",
    primerApellido: "Lopez",
    segudnoApellido: "Alonso",
    edad: 30,
    ciudad: "Madrid"
};

let alumno2 = {
    nombre: "Matías",
    primerApellido: "Zito",
    segudnoApellido: "García",
    edad: 28,
    ciudad: "Logroño"
};

let alumno3 = {
    nombre: "Karol",
    primerApellido: "Blandon",
    segudnoApellido: "Fernández",
    edad: 32,
    ciudad: "Tudela"
};

let alumno4 = {
    nombre: "Andrea",
    primerApellido: "Bernardino",
    segudnoApellido: "del Pino",
    edad: 27,
    ciudad: "Logroño"
};

let alumno5 = {
    nombre: "Carmelo",
    primerApellido: "Caballero",
    segudnoApellido: "Ruiz",
    edad: 52,
    ciudad: "Logroño"
};


let alumnos_array = [ alumno1,alumno2,alumno3,alumno4,alumno5];

for (let i = 0; i < alumnos_array.length;i++){
    console.log("Nombre: " + alumnos_array[i].nombre + ". Primer apellido: " + alumnos_array[i].primerApellido + ". Segundo apellido: " + 
        alumnos_array[i].segudnoApellido + ". Edad: " + alumnos_array[i].edad + ". Ciudad: " + alumnos_array[i].ciudad);
}
*/

/*Ejercicio array alumnos con base de datos */

let alumnos_json = JSON.parse(alumnos); //convierte cadenas JSON en objetos JavaScript
let lista = "";

for (let i = 0; i < alumnos_json.length;i++){
    lista += "<p>" + "Nombre: " + alumnos_json[i].nombre + ". Primer apellido: " + alumnos_json[i].primerApellido + ". Segundo apellido: "
        + alumnos_json[i].segundoApellido + ". DNI: " + alumnos_json[i].dni + "Fecha de nacimiento: " + alumnos_json[i].fecha_de_nacimiento 
        + ". Ciudad de residencia: " + alumnos_json[i].ciudad_residencia + "<p>";
}

lista =  document.getElementsByClassName('content')[0].innerHTML;


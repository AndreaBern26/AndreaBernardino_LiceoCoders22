/*Esto sale una vez que la alerta la quito dando a aceptar y aparece como contenido la página web
    *Si no hay alerta, veo que es agregar contenido a la página web sin necesidad de hacerlo en el archivo HTML.
*/
document.write('Esto es una prueba para escribir en el contenido <br>');

/*Este texto sólo aparece en la consola de la página. Para verlo, click derecho -> inspeccionar -> console
    *Es útil para poner comentarios sobre el código que no se vean en el sitio web, sino que sólo lo pueda ver un desarrollador web.
*/

console.log('Este mensaje saldría por consola');

/*Esto sale con tal que se ejecuta la página web
    *Lo veo útil para pedir permisos para la página web como conocer la ubicación, permitir notificaciones o cuando se le va a
    redirigir al usuario a otra página web externa del sitio.

    *Una alerta es lo primero que se ejecuta.
*/
alert ('¡Cuidado, que esto es una alerta!');

/*Variables*/

const num_pi = Math.PI;
var num = 50;
var titulo = "Hoy es un gran día";

titulo = "va a ser que no";

document.write("El título de mi libro va a ser " + titulo + "<br>");
document.write("El número PI es igual a " + num_pi + "<br>");
document.write("El valor de mi número es " + num + "<br>");

/*Negaciones*/

var a = 5;
var sera_o_no = true;
var frase = "Hola a todos";

a = !a;
frase = !frase;

document.write("El valor de a negada es " + a + "<br>");
document.write("El valor de frase negada es " + frase + "<br>");
document.write("El valor de será o no es " + sera_o_no + "<br>");

/*Función y mostrar mensaje*/

var miVariable = "funciones";
alert ("El valor de mi variable es " + miVariable);

/*Aunque la variable se llame igual, al crearla dentro de la función, es una variable local que sólamente existe dentro de la función,
    mientras que todas las variables que declaro fuera de las funciones son globales, es decir, son declaradas para todo el archivo.
*/

function miFuncion(){
    var miVariable = "variable de función";
    return miVariable;
}

alert("El valor de la variable de mi función es " + miFuncion (miVariable));

let miVariableLet = "variable let";
alert ("El valor de mi variable let es " + miVariableLet);

function miFuncionLet(){
    let miVariableLet = "variable con let en función";
    return miVariableLet;
}

alert("El valor de la variable de mi función con let es " + miFuncionLet (miVariableLet));

var miVariableConst = "variable con Const";
alert ("El valor de mi variable es " + miVariableConst);

function miFuncionConst(){
    const miVariableConst = "variable con const en función";
    return miVariableConst;
}

alert("El valor de la variable de mi función con const es " + miFuncionConst (miVariableConst));

/*La diferencia entre var, let y const es la siguiente:
    *var crea variables y era el método general, pero se ha dejado de usar porque let hace la misma función pero evita las
        sobreescrituras accidentales. 
    *const se utiliza para crear variables con valores constantes, es decir, variables que, una vez declaradas y dadas un valor, 
        no podré modificar su valor nunca más.

*Si declaro una varible dentro de una función, estoy creando una variable local, es decir, sólo existe dentro de dicha función y no
    la puedo utilizar fuera de ella

*Si declaro una variable fuera de una función, estoy creando una variable global, es decir, existe en todo mi archivo js y puedo usarlo
    siempre que lo necesite
*/ 

/*Arrays*/

let arrayAleatorios = [];
let minimo;
let maximo;

function aleatorio(){
    let aleatorio = Math.random();
    return aleatorio;
}



for (let i = 0; i <= 50; i++){
    arrayAleatorios[i] = aleatorio();
}
minimo = Math.min(...arrayAleatorios);
maximo = Math.max(...arrayAleatorios);

document.write ("El mayor número del array es: " + maximo + " y el más pequeño es: " + minimo);


/*Ejercicio 1: Declare una función fullName e imprima su nombre completo.*/

function fullName1 (){
    console.log ("Andrea Bernardino del Pino");
}

fullName1();

/*Ejercicio 2: Declare una función fullName y ahora toma firstName, lastName como parámetro y devuelve su nombre completo.*/

function fullName(firstName,lastName){
    return firstName + " " + lastName;
}

console.log(fullName("Andrea", "Bernardino del Pino"));

/*Ejercicio 3: Declare una función addNumbers y toma dos dos parámetros y devuelve suma */

function addNumbers(x,y){
    return x + y;
}

console.log (addNumbers(3,8));

/*Ejercicio 4: El área de un rectángulo se calcula de la siguiente manera: área = largo x ancho. Escribe una función que calcule areaOfRectangle */

function areaOfRectangle (largo, ancho){
    return "El área del rectángulo es: " + largo * ancho;
}

console.log(areaOfRectangle(5,12));

/*Ejercicio 5: El perímetro de un rectángulo se calcula de la siguiente manera: perímetro = 2x (largo + ancho). Escribe una función que calcule el perímetro del rectángulo.*/

function perimeterOfRectangle (largo, ancho){
    return "El perímetro del rectángulo es: " + 2 * (largo + ancho);
} 

console.log (perimeterOfRectangle(2,6));

/*Ejercicio 6: El volumen de un prisma rectangular se calcula de la siguiente manera: volumen = largo x ancho x alto. Escribe una función que calcule el volumenDeRectPrism.*/

function volumenDeRectPrism (largo, ancho, alto){
    return "El volumen del prisma rectangular es: " + largo * ancho * alto;
}

console.log (volumenDeRectPrism(2,3,9));

/*Ejercicio 7: El área de un círculo se calcula de la siguiente manera: área = π x r x r. Escribe una función que calcule areaOfCircle*/

function areaOfCircle(radio){
    return "El área del círculo es: " + Math.PI * Math.pow(radio,2); //El método Math.pow es para hacer potencias: Math.pow (base, exponente)
}

console.log (areaOfCircle(4));

/*Ejercicio 8: La circunferencia de un círculo se calcula de la siguiente manera: circunferencia = 2πr. Escribe una función que calcule circumOfCircle*/

const circunferenciaCirculo = (radio) => "La circunferencia del círculo es: " + 2 * Math.PI * radio + " m";

console.log(circunferenciaCirculo(5));

/*Ejercicio 9: La densidad de una sustancia se calcula de la siguiente manera: densidad = masa/volumen. Escribe una función que calcule la densidad.*/

const densidad = (function (masa, volumen){
    return `La densidad de la sustancia es:  ${masa/volumen} kg/L`; //¡OJO! Que para que se muestre en pantalla todo son comillas en cursiva, no "" ni ''.
})(5,6);

console.log(densidad);

/*Ejercicio 10: La velocidad se calcula dividiendo la distancia total recorrida por un objeto en movimiento entre el tiempo total empleado. Escribe una función que calcule
 la velocidad de un objeto en movimiento, la velocidad.*/

 const velocidad = ((dist, tiempo) =>{
    return `La velocidad del objeto es:  ${dist/tiempo} m/s`; 
 })(125,5); 

 console.log (velocidad);

 /*Ejercicio 11: El peso de una sustancia se calcula de la siguiente manera: peso = masa x gravedad. Escribe una función que calcule el peso.*/

 const peso = ((m, g) => {
    return `El peso de la sustancia es , ${~~(m * g)} N`;//~~ Convierte cualquier nº decimal en nº entero
 })(158, 9.8);

 console.log (peso);

 /*Ejercicio 12: La temperatura en oC se puede convertir a oF usando esta fórmula: oF = (oC x 9/5) + 32. Escriba una función que convierta oC a oF 
 convertCelsiusToFahrenheit.*/


 const temperatura = function convertCelsiusToFahrenheit (grados){
    return grados + "ºC son " + ((grados * (9/5)) + 32) + "ºF";
 }

 console.log (temperatura(75));

 /*Ejercicio 13: El índice de masa corporal (IMC) se calcula de la siguiente manera: bmi = peso en Kg / (altura x altura) en m2. Escribe una función que calcule bmi. 
 El IMC se utiliza para definir de forma amplia diferentes grupos de peso en adultos de 20 años o más. Compruebe si una persona tiene un peso inferior al normal, normal, 
 con sobrepeso u obeso según la información que se proporciona a continuación.*/

function bmi (peso, altura){
    let bmi = peso / (altura *altura);
    console.log ("Los mismos grupos se aplican tanto a hombres como a mujeres");
    console.log ("Su IMC es de " + bmi);

    if (bmi < 18.5){
        console.log("Bajo peso: el IMC es inferior a 18.5");
    }else if (bmi < 24.9){
        console.log ("Peso normal: el IMC es de 18,5 a 24.9");
    }else if (bmi < 29.9){
        console.log ("Sobrepeso: el IMC es de 25 a 29.9");
    }else{
        console.log ("Obeso: IMC es 30 o más");
    }

    return ~~(bmi);
}

bmi(52, 1.58);

 /*Ejercicio 14: Escribe una función llamada checkSeason, toma un parámetro de mes y devuelve la estación: Otoño, Invierno, Primavera o Verano.*/

 function checkSeason (mes){

    if (1 > mes || mes > 12){
        console.log ("Error, los meses del año van del 1 al 12. Elija un valor correcto");
    }

    if (1 <= mes && mes <= 3){
        return "La estación del año es Invierno";
    }
    
    if (4 <= mes && mes <= 6){
        return "La estación del año es Primavera";
    }
    
    if (7 <= mes && mes <= 9){
        return "La estación del año es Verano";
    }
    
    if (10 <= mes && mes <= 12){
        return "La estación del año es Otoño";
    }
 }

 console.log (checkSeason(6));
 
 /*Ejercicio 15: Math.max devuelve su argumento más grande. Escriba una función findMax que tome tres argumentos y devuelva su máximo sin usar el método Math.max.*/

 function findMax(a,b,c){
    if (a > b && a > c){
        return a;
    }

    if (b > a && b > c){
        return b;
    }

    if (c > a && c > b){
        return c;
    }
 }

 console.log("El argumento más grande es el: " + findMax(3,6,12));

 /*Exports*/
module.exports = {fullName, bmi, findMax, checkSeason};

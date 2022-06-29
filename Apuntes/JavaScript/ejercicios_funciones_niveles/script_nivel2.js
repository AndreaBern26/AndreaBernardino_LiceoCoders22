/*Ejercicio 1: La ecuación lineal se calcula de la siguiente manera: ax + by + c = 0. Escriba una función que calcule el valor de una ecuación lineal, solveLinEquation*/
/*
const linEquation = (a,b,c) =>{
   
} 

console.log (linEquation(-2,5,7));

/*Ejercicio 2: La ecuación cuadrática se calcula de la siguiente manera: ax2 + bx + c = 0. Escriba una función que calcule el valor o los valores de una ecuación 
cuadrática, solveQuadEquation.*/

function solveQuadEquation (a,b,c){
    let raiz = 0;
    let denominador = 2 * a;
    let res1 = 0;
    let res2 = 0;

    try{
        raiz =  Math.sqrt((Math.pow(b,2)) - (4 * a * c));

        res1 = (-b + raiz) / denominador;
        res2 = (-b - raiz) / denominador;
    
        return "x_1 = " + res1 + "; x_2 = " + res2;

    }catch(error){
        console.log("El denominador no puede ser 0");
    }  
}

console.log(solveQuadEquation(2,-7,3));

/*Ejercicio 3: Declare un nombre de función printArray. Toma matriz como parámetro e imprime cada valor de la matriz.*/

function printArray (matriz){
    for (let i = 0; i < matriz.length; i++){
        console.log("Posición " + i + " del array: " + matriz[i]);
    }
}

printArray([5,3,-2,14,5,-13,29]);

/*Ejercicio 4: Escriba un nombre de función showDateTime que muestre la hora en este formato: 01/08/2020 04:08 usando el objeto Date.*/

function showDateTime (){
    let date = new Date();
    return date;
}

console.log(showDateTime(2020,08,01,04,08));


let date = new Date();
console.log(date);

/*Ejercicio 5: Declare un nombre de función swapValues. Esta función intercambia el valor de x a y*/


/*Ejercicio 6: Declare un nombre de función reverseArray. Toma una matriz como parámetro y devuelve el reverso de la matriz (no use el método).*/


/*Ejercicio 7: Declare un nombre de función capitalizeArray. Toma array como parámetro y devuelve el - capitalizedarray.*/


/*Ejercicio 8: Declare un nombre de función addItem. Toma un parámetro de elemento y devuelve una matriz después de agregar el elemento*/


/*Ejercicio 9: Declare un nombre de función removeItem. Toma un parámetro de índice y devuelve una matriz después de eliminar un elemento*/


/*Ejercicio 10: Declare un nombre de función sumOfNumbers. Toma un parámetro numérico y suma todos los números en ese rango.*/


/*Ejercicio 11: Declare un nombre de función sumOfOdds. Toma un parámetro numérico y agrega todos los números impares en ese rango*/


/*Ejercicio 12: Declare un nombre de función sumOfEven. Toma un parámetro numérico y suma todos los números pares en ese rango*/


/*Ejercicio 13: Declare un nombre de función evensAndOdds . Toma un entero positivo como parámetro y cuenta el número de pares e impares en el número.
evensAndOdds(100);
El número de impares es 50.
El número de pares es 51.
.*/


/*Ejercicio 14: Escriba una función que tome cualquier número de argumentos y devuelva la suma de los argumentos*/


/*Ejercicio 15: Escriba una función que genere un randomUserIp*/


/*Ejercicio 16: Escriba una función que genere una MacAddress aleatoria*/


/*Ejercicio 17: Declare un nombre de función randomHexaNumberGenerator. Cuando se llama a esta función, genera un número hexadecimal aleatorio. 
La función devuelve el número hexadecimal*/


/*Ejercicio 18: Declare un nombre de función userIdGenerator. Cuando se llama a esta función, genera una identificación de siete caracteres. La función devuelve el id.*/


/*Ejercicio 1: La ecuación lineal se calcula de la siguiente manera: ax + c = 0. Escriba una función que calcule el valor de una ecuación lineal, solveLinEquation*/
const solveLinEquation = (a,c) =>{
    try{
        let sol = 0;
        sol = -c/a;

        return sol;
    }catch(error){
        console.log("El denominador no puede ser 0");
    }
}

console.log(solveLinEquation(3,5));

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

function showDateTime (year, month, day, hour, min){
    let date = new Date(year, month, day, hour, min);
    return date;
}

console.log(showDateTime(2020,08,01,04,08));

/*Ejercicio 5: Declare un nombre de función swapValues. Esta función intercambia el valor de x a y*/

function swapValues (x,y){
    let swapX = x;
    let swapY = y;

    x = swapY;
    y = swapX;

    return "Nuevo valor de x: " + x + ". Nuevo valor de y: " + y;
}

console.log(swapValues(-53,78));

/*Ejercicio 6: Declare un nombre de función reverseArray. Toma una matriz como parámetro y devuelve el reverso de la matriz (no use el método).*/

function reverseArray(array){
    let newArray = [];
    for (let i = 0; i < array.length; i++){
        for (j = array.length -1; j >= 0; j--)
        newArray [j] = array[i-j]; 
    }

    return newArray;
}

console.log(reverseArray([4,6,823,-2,0,2]));

/*Ejercicio 7: Declare un nombre de función capitalizeArray. Toma array como parámetro y devuelve el array en mayúsculas.*/

function capitalizeArray(array){

    let newArray = [];

    for (let i = 0; i < array.length; i++){
        newArray[i] = array[i].toUpperCase();
    }

    return newArray;
}

console.log(capitalizeArray(["catalizador","holi","que tal", "espero que bien"]));

/*Ejercicio 8: Declare un nombre de función addItem. Toma un parámetro de elemento y devuelve una matriz después de agregar el elemento*/

function addItem(element){
    let array = [];

    array.push(element); //.push es para añadir elementos a un array al final

    return array;
}

console.log (addItem("ty"));

/*Ejercicio 9: Declare un nombre de función removeItem. Toma un parámetro de índice y devuelve una matriz después de eliminar un elemento*/

function removeItem (index){
    let array = ["Pepe", "Juan", "Rebeca", "Andrea"];

    array.splice(index, 1); //Splice elimina un elemento específico. array.splice(posición del elemento a eliminar, cúantos elementos quiero quitar a partir de esa posición).
    
    return array;
}

console.log(removeItem(2));

/*Ejercicio 10: Declare un nombre de función sumOfNumbers. Toma un parámetro numérico y suma todos los números en ese rango.*/

function sumOfNumbers (num){
    let suma = 0;

    for (let i = 0; i <= num; i++){
        suma += i;
    }

    return suma;
}

console.log(sumOfNumbers(8));
/*Ejercicio 11: Declare un nombre de función sumOfOdds. Toma un parámetro numérico y agrega todos los números impares en ese rango*/

function sumOfOdds (num){
    let sumaOdds = 0;

    for (let i = 0; i <= num; i++){
        //Los números impartes, al dividirlos entre 2, dan uno. 
        if (i % 2 == 1){
            sumaOdds += i;
        }
    }

    return sumaOdds;
}

console.log(sumOfOdds(8));

/*Ejercicio 12: Declare un nombre de función sumOfEven. Toma un parámetro numérico y suma todos los números pares en ese rango*/

function sumOfEven (num){
    let sumaEven = 0;

    for (let i = 0; i <= num; i++){
        //Los números impartes, al dividirlos entre 2, dan uno. 
        if (i % 2 == 0){
            sumaEven += i;
        }
    }

    return sumaEven;
}

console.log(sumOfEven(8));

/*Ejercicio 13: Declare un nombre de función evensAndOdds . Toma un entero positivo como parámetro y cuenta el número de pares e impares en el número.
evensAndOdds(100);
El número de impares es 50.
El número de pares es 51.
.*/

function evensAndOdds(num){
    let odds = 0;
    let evens = 0;

    if (num > 0){
        for (let i = 0; i <= num; i++){
            if (i % 2 == 0){
                evens++;
            }else if (i % 2 == 1){
                odds++;
            }
        }
    }else{
        return "Error. El número tiene que ser positivo";
    }

    return "Count of odds numbers: " + odds + ". Count of even numbers: " + evens;
}

console.log(evensAndOdds(18));

/*Ejercicio 14: Escriba una función que tome cualquier número de argumentos y devuelva la suma de los argumentos*/


//PREGUNTAR
function sumArgs(args){
    let sumArgs = "";

    for (let i = 0; i < args; i++){
        sumArgs += i;
    }

    return sumArgs;
}

console.log(sumArgs("Pepe"));

/*Ejercicio 15: Escriba una función que genere un randomUserIp*/

function randomUserIp(){
    //Una ip está formada por 4 conjuntos de números que van desde 0 hasta 255, separados por un ".". Ej: 243.2.12.212
    let ip = (Math.floor(Math.random() * 255)) + "." + (Math.floor(Math.random() * 255)) + "." + (Math.floor(Math.random() * 255)) + "." +
                (Math.floor(Math.random() * 255));

    return ip;
}

console.log(randomUserIp());

/*Ejercicio 16: Escriba una función que genere una MacAddress aleatoria*/



/*Ejercicio 17: Declare un nombre de función randomHexaNumberGenerator. Cuando se llama a esta función, genera un número hexadecimal aleatorio. 
La función devuelve el número hexadecimal*/


/*Ejercicio 18: Declare un nombre de función userIdGenerator. Cuando se llama a esta función, genera una identificación de siete caracteres. La función devuelve el id.*/


/*Función que recibe un número y devuelve:
    *"fizz" si es multiplo de 3 o incluye un 3
    *"buzz" si es multiplo de 5 o incluye un 5
    *"fizzbuzz" si es múltiplo de 3 y 5 o incluye un 15
    *n en cualquier otro caso.
*/

function fizzbuzz(n){
    if (n === 0){
        return n;
    }else if (n % 15 === 0 || (n + '').includes('15')){
        return 'fizzbuzz';
    }else if (n % 3 === 0 || (n + '').includes('3')){
        return 'fizz';
    }else if(n % 5 === 0 || (n + '').includes('5')){
        return 'buzz';
    }else{
        return n;
    }
}

function main(n){
    for (let i = 0; i <= n; i++){
        fizzbuzz(i);
    }    
}

main(100);

module.exports = fizzbuzz;//modulo que va a contener la función fizzbuzz para jest.
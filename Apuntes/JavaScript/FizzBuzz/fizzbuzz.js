/*Función que recibe un número y devuelve:
    *"fizz" si es multiplo de 3
    *"buzz" si es multiplo de 5
    *"fizzbuzz" si es múltiplo de 3 y 5
*/
function fizzbuzz(n){
    if (n == 0){
        return 0;
    }else if (n == 1){
        return 1;
    }else if (n % 3 == 0 && n % 15 != 0){
        return 'fizz';
    }else if(n % 5 == 0 && n % 15 != 0){
        return 'buzz';
    }else if (n % 3 == 0 && n % 5 == 0 && n % 15 == 0){
        return 'fizzbuzz';
    }else{
        return n;
    }
}

module.exports = fizzbuzz;//modulo que va a contener la función fizzbuzz para jest.
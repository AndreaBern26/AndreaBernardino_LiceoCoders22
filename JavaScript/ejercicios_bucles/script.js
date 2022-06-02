/*Ejercicio 1*/ 
function cuadrado (base){
    let i = base; //Contador
    let j = 0;
    let res = "";

    while (i > 0){
        
        while (j <= i){
            res = res + "*";
            j++;
        }
        console.log(res);
        i--;
    }
}
cuadrado(4);

/*Ejercicio 2 */
function piramide (base){
    let i = 0; //Contador
    let j = 0;
    let res = "";
    while (i < base){
        while (j <= i){
            res = res + "*";
            j++;
        }
        console.log(res);
        i++;
    }
}
piramide(5);

/*Ejercicio 3*/
function piramideInvertida (base){
    let i = base;
    let j = 0;
    let res = "";
    while(i > 0){
      while (j < i){
          res = fila(base - j);
        j++;
      }
      i--;
    }   
}
piramideInvertida(5);

function fila(n){
  let i= 0;
  let res = "";
  while (i < n){
    res = res + "*";
    i++;
  }
  console.log(res);
}

/* P = 2 * pi * r */
function perimetroCirculo (radio){
    return 2 * radio * Math.PI;
}
/* A = pi * r^2 */
function areaCirculo (radio){
    return  radio * radio * Math.PI;
}

/* P = l + l + l + l */
function perimetroCuadrado (lado){
    return 4 * lado;
}

/* A = l * l */
function areaCuadrado (lado){
    return lado * lado;
}

/*La hipotenusa de un triángulo se calcula mediante el Teorema de Pitágoras -> h^2 = a^2 + b^2 */
function hipotenusaTriangulo (a,b){
    
    function cuadrados (a){
        return a*a;
    }

    function sumaLados(a,b){
        return a + b;
    }
    //Math.sqrt es raiz cuadrada.
    return Math.sqrt (sumaLados (cuadrados(a), cuadrados(b)));
}

document.write ("El perímetro del círculo es " + perimetroCirculo(2) + "<br>");
document.write ("El área del círculo es " + areaCirculo (6) + "<br>");
document.write ("El perímetro del cuadrado es " + perimetroCuadrado (5) + "<br>");
document.write ("El área del cuadrado es " + areaCuadrado(3) + "<br>");
document.write ("La hipotenusa del cuadrado es " + hipotenusaTriangulo(2,4) + "<br>");


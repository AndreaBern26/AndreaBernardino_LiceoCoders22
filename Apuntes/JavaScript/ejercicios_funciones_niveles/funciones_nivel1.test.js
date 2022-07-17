/*Variables que contienen las funciones a validar*/
const {fullName, bmi, findMax, checkSeason} = require("./funciones_nivel1");

/*Tests*/
describe('funciones_nivel1', ()  =>{

    //Test Ejercicio 1
    test ("FullName", () =>{
        const resWaited = "Andrea Bernardino";
        const resReturned = fullName ("Andrea", "Bernardino");
        expect(resWaited).toBe(resReturned);
    });

    //Tests Ejercicio 13
    test ("Cálculo del IMC", () =>{
        const resWaited = 20;
        const resReturned = bmi(52, 1.58);
        expect(resWaited).toBe(resReturned);
    });
    test ("Cálculo del IMC", () =>{
        const resWaited = 29;
        const resReturned = bmi(90, 1.75);
        expect(resWaited).toBe(resReturned);
    });

    test ("Cálculo del IMC", () =>{
        const resWaited = 39;
        const resReturned = bmi(120, 1.75);
        expect(resWaited).toBe(resReturned);
    });

    //Tests Ejercicio 14

    test ("Estaciones", () =>{
        const resWaited = "La estación del año es Primavera";
        const resReturned = checkSeason(5);
        expect(resWaited).toBe(resReturned);
    });
    test ("Estaciones", () =>{
        const resWaited = "La estación del año es Otoño";
        const resReturned = checkSeason(12);
        expect(resWaited).toBe(resReturned);
    });
    test ("Estaciones", () =>{
        const resWaited = "La estación del año es Invierno";
        const resReturned = checkSeason(1);
        expect(resWaited).toBe(resReturned);
    });



    //Tests Ejercicio 15*/

    test ("Número más grande", () =>{
        const resWaited = 238;
        const resReturned = findMax(52, 238, 1);
        expect(resWaited).toBe(resReturned);
    });
    test ("Número más grande", () =>{
        const resWaited = 584;
        const resReturned = findMax(584, 21, -7);
        expect(resWaited).toBe(resReturned);
    });

});
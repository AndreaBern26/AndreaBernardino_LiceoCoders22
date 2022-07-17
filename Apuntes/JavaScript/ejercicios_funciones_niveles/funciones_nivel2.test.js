const {solveQuadEquation, printArray} = require("./funciones_nivel2");

/*Tests*/
describe('funciones_nivel1', ()  =>{

    //Tests Ejercicio 2
    test ("SecondLineEquation", () =>{
        const resWaited = "x_1 = " + 3 + "; x_2 = " + 2;
        const resReturned = solveQuadEquation (1,-5,6);
        expect(resWaited).toBe(resReturned);
    });

    test ("SecondLineEquation", () =>{
        const resWaited = "x_1 = " + 3 + "; x_2 = " + 0.5;
        const resReturned = solveQuadEquation(2,-7,3);
        expect(resWaited).toBe(resReturned);
    });


    //Tests Ejercicio 3
    test ("Imprimir array", () =>{
        const resWaited = [5,3,-2,14,5,-13,29];
        const resReturned = printArray ([5,3,-2,14,5,-13,29]);
        expect(resWaited).toBe(resReturned);
    });

    test ("Imprimir array", () =>{
        const resWaited = [-5,78,-29,54,8,-134,11];
        const resReturned = printArray([5,3,-2,14,5,-13,29]);
        expect(resWaited).toBe(resReturned);
    });
});
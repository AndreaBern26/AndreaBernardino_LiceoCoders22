const fizzbuzz = require("./fizzbuzz");


/*Conjunto de test que se llama fizzbuzz*/
describe('fizzbuzz', () =>{
    //Primer test
    test("test", () =>{
        expect(true).toBe(true);
    });

    test("Debe devolver 0 si le paso un 0",()=>{
        const expected = 0;
        const result = fizzbuzz(0);

        expect(expected).toBe(result);
    });

    test("Debe devolver 1 si le paso un 1",()=>{
        const expected = 1;
        const result = fizzbuzz(1);

        expect(expected).toBe(result);
    }); 

    //Tests para múltiplos de 3
    test("Debe devolver 'fizz' si le paso un 3",()=>{
        const expected = 'fizz';
        const result = fizzbuzz(3);

        expect(expected).toBe(result);
    });
    test("Debe devolver 'fizz' si le paso un 9",()=>{
        const expected = 'fizz';
        const result = fizzbuzz(9);

        expect(expected).toBe(result);
    });
    test("Debe devolver 'fizz' si le paso un 12",()=>{
        const expected = 'fizz';
        const result = fizzbuzz(12);

        expect(expected).toBe(result);
    });

    //Tests para múltiplos de 5
    test("Debe devolver 'buzz' si le paso un 5",()=>{
        const expected = 'buzz';
        const result = fizzbuzz(5);

        expect(expected).toBe(result);
    });

    test("Debe devolver 'buzz' si le paso un 25",()=>{
        const expected = 'buzz';
        const result = fizzbuzz(25);

        expect(expected).toBe(result);
    });

    test("Debe devolver 'buzz' si le paso un 10",()=>{
        const expected = 'buzz';
        const result = fizzbuzz(10);

        expect(expected).toBe(result);
    });

    //Tests de múltiplos de 3 y 5
    test("Debe devolver 'fizzbuzz' si le paso un 15",()=>{
        const expected = 'fizzbuzz';
        const result = fizzbuzz(15);

        expect(expected).toBe(result);
    });

    test("Debe devolver 'fizzbuzz' si le paso un 30",()=>{
        const expected = 'fizzbuzz';
        const result = fizzbuzz(30);

        expect(expected).toBe(result);
    });

     //Tests que incluyan el 15
     test("Debe devolver 'fizzbuzz' si le paso un 215",()=>{
        const expected = 'fizzbuzz';
        const result = fizzbuzz(215);

        expect(expected).toBe(result);
    });

    test("Debe devolver 'fizzbuzz' si le paso un 10150",()=>{
        const expected = 'fizzbuzz';
        const result = fizzbuzz(10150);

        expect(expected).toBe(result);
    });

    //Tests de numeros que incluyen el 3
    test("Debe devolver 'fizz' si le paso un 123",()=>{
        const expected = 'fizz';
        const result = fizzbuzz(123);

        expect(expected).toBe(result);
    });
    test("Debe devolver 'fizz' si le paso un 234",()=>{
        const expected = 'fizz';
        const result = fizzbuzz(234);

        expect(expected).toBe(result);
    });
    test("Debe devolver 'fizz' si le paso un 32",()=>{
        const expected = 'fizz';
        const result = fizzbuzz(32);

        expect(expected).toBe(result);
    });

    //Tests para numeros que incluyan el 5
    test("Debe devolver 'buzz' si le paso un 145",()=>{
        const expected = 'buzz';
        const result = fizzbuzz(145);

        expect(expected).toBe(result);
    });

    test("Debe devolver 'buzz' si le paso un 52",()=>{
        const expected = 'buzz';
        const result = fizzbuzz(52);

        expect(expected).toBe(result);
    });

    test("Debe devolver 'buzz' si le paso un 85",()=>{
        const expected = 'buzz';
        const result = fizzbuzz(85);

        expect(expected).toBe(result);
    });
});
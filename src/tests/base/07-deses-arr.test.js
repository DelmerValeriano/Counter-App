import { type } from "@testing-library/user-event/dist/type";
import { retornaArreglo } from "../../base/07-deses-arr"


describe('pruebas en desestructuración', () => { 

    test('desbe de retornar un string y un numero ', () => { 

       const [letras, numero] = retornaArreglo();//['ABC', 123]

    //    expect(arr).toEqual(['ABC', 123]);
    

        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');

        expect(numero).toBe(123);
        expect(typeof numero).toBe('number');

    })    
})
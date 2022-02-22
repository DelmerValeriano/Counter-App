
import { getSaludo } from "../../base/02-template-string";


    describe('Pruebas  en 02-template-string.test.js', () => { 
        test('prueba en el metodo getsaludo', () => { 

            const nombre ='delmer';

           const saludo = getSaludo(nombre);
           expect(saludo).toBe('Hola '+ nombre);

        })

        //get saludo debe de retornar Hola Carlos si no hay argumento nombre

        test('get saludo debe de retornar Hola Carlos si no hay argumento nombre', () => { 


           const saludo = getSaludo();
           expect(saludo).toBe('Hola Carlos');

        })
    })




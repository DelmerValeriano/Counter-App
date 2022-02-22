


describe('pruebas en el archivo demo.test.js', () => { 
    test('deben de ser iguales los string', () => { 

        //1. inilizacion
        const mensaje = 'Hola mundo';
    
        //2. Estimulo
        const mensaje2 = `Hola mundo`;
    
        //3.observar el comportamineto
        expect(mensaje).toBe(mensaje2); //===
    
      
    })

 })




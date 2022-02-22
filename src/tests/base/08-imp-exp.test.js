import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";


describe('pruebas wn funciones de heroes', () => {  

    test('debe de retornar un heroe por id', () => { 

        const id =1;
        const heroe = getHeroeById(id);
        
        const heroeData = heroes.find(h => h.id === id);
        expect(heroe).toEqual(heroeData);

    })
    test('debe de retornar undefind si el heroe no existe', () => { 

        const id =10;
        const heroe = getHeroeById(id);
        
        
        expect(heroe).toBe(undefined);

    })

    test('debe de retornar segun el owner de DC', () => { 

        const owner ='DC';
        const heroe = getHeroesByOwner(owner);
        const heroeData = heroes.filter(heroe => heroe.owner === owner);
        
        
        expect(heroe).toEqual(heroeData);

    })

    test('debe de retornar segun el owner de marvel', () => { 

        const owner ='Marvel';
        const heroe = getHeroesByOwner(owner);
     
        
        
        expect(heroe.length).toBe(2);

    })



})
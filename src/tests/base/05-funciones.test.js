import { getUser, getUsuarioActivo } from "../../base/05-funciones";
import '@testing-library/jest-dom';



describe('Pruebas en 05-funciones', () => { 

    test('debe de retornar un objeto', () => { 

        const usertest ={
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();
        
        //comparar objetos
        expect(user).toEqual(usertest);

    })
    //get usuario activo debe de retornar un objeto

    test('get usuario activo debe de retornar un objeto', () => { 

        const nombre= 'Delmer';
        const usertestactivo ={
            uid: 'ABC567',
            username: nombre
        }
        const userActivo = getUsuarioActivo(nombre);
        
        //comparar objetos
        expect(userActivo).toEqual(usertestactivo);

    })

})
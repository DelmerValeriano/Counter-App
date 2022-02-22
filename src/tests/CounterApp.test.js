import CounterApp from "../CounterApp";
import {shallow} from 'enzyme';
import React from 'react';




describe('Prueba en la App CounterApp', () => {  

    let wrapper =shallow( <CounterApp /> );

    beforeEach( () => {
        wrapper = shallow( <CounterApp /> );
       
    })

    test('probar el counterApp con snapshots', () => {  


        expect(wrapper).toMatchSnapshot();


    });
    test('debe de mostrar por defecto el valor de 100', () => {  

        const wrapper = shallow( <CounterApp value={ 100 } /> );
        

        const couterTex = wrapper.find('h2').text().trim();
        
        expect(couterTex).toBe('100');

    });



    test('debe de incrementar en el boton +1', () => {  

        wrapper.find('button').at(0).simulate('click');
        const couterText = wrapper.find('h2').text().trim();
        expect(couterText).toBe('11');

    });
    
    test('debe de disminuir en el boton -1', () => {  

        
        wrapper.find('button').at(2).simulate('click');
        const couterText = wrapper.find('h2').text().trim();
        expect(couterText).toBe('9');

    });


    test('debe de colocar el valor por defecto en el boton resert', () => {  

        const wrapper = shallow( <CounterApp value={ 105 } /> );
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const couterText = wrapper.find('h2').text().trim();
        expect(couterText).toBe('105');

        



    })

    
})
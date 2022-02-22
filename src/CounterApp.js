
//Tarea
import React,{useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value=10}) => {
  
    //Hooks
    const [ counter,SetCounter] = useState(value);


    //suma
    const handleAdd = () => {
        SetCounter(counter+1);
        // SetCounter((c)=>c+1);
    }
    //resta
    const handleresta = () => {
        SetCounter(counter-1);
        // SetCounter((c)=>c+1);
    }
    //resert
    const handleresert = () => {
        SetCounter(value);
        // SetCounter((c)=>c+1);
    }

    return (
          <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>

            <button onClick= { handleAdd } >+1</button>
            <button onClick= { handleresert }>Reset</button>
            <button onClick= { handleresta }>-1</button>


         </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number
    
}

export default CounterApp;






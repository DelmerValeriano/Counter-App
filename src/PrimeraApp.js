// import React,{Fragment} from 'react';
import React from 'react';
import PropTypes from 'prop-types'

//function

const PrimerApp = ({saludo, Subtitulo}) => {

    

    return (
        <>
        <h1> { saludo }!!! </h1>
            {/* <pre>{ JSON.stringify(saludo, null,3) }</pre> */}
             <p>{Subtitulo}</p>
        </>
     
    );
    

}

PrimerApp.propTypes={
    saludo: PropTypes.string.isRequired,
    // Subtitulo: PropTypes.string.isRequired

}

PrimerApp.defaultProps={
    Subtitulo: 'soy un subtitulo'
}
export default PrimerApp;


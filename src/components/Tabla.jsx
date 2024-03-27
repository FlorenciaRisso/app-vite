// Tabla.js
import React from 'react';
import PropTypes from 'prop-types';
import Fila from './Fila';

function Tabla(props){
    return (
        <table className="table">
            <thead>
                <tr>
                    {props.columnas.map((columna, index) => (
                        <th key={index}>{columna}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {props.datosTabla.map((fila, index) => (
                    <Fila key={index} datos={fila} />
                ))}
            </tbody>
        </table>
    );
};

Tabla.propTypes = {
    datosTabla: PropTypes.array.isRequired,
    columnas: PropTypes.array.isRequired
};

export default Tabla;

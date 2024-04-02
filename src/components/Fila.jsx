// Fila.js
import React from 'react';
import PropTypes from 'prop-types';

const Fila = (props) => {
    return (
        <tr>
            {props.datos.map((dato, index) => {

                if (index === 3) {
                    return (
                        <ul>
                            {dato.map((d, i) => <li key={i}>{d}</li>)}
                        </ul>)
                } else {
                    return (
                        <td key={index}>{dato}</td>
                    )
                }
            })}
        </tr>
    );
};

Fila.propTypes = {
    datos: PropTypes.array.isRequired
};

export default Fila;

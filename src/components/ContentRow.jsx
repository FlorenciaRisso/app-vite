import SmallCard from './SmallCard';
import React, { useEffect, useState } from 'react';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

function ContentRow(){
    const [totalesProductos, setTotalesProductos] = useState([]);
    const [totalesUsuarios, setTotalesUsuarios] = useState([]);
    const [totalesCategorias, setTotalesCategorias] = useState([]);

    useEffect(() => {
        // Obtener totales de productos
        fetch(`http://localhost:3030/api/products`)
            .then(respuesta => respuesta.json())
            .then(data => {
                setTotalesProductos(data.count);
            });

        // Obtener totales de usuarios
        fetch(`http://localhost:3030/api/users`)
            .then(respuesta => respuesta.json())
            .then(data => {
                setTotalesUsuarios(data.count);
            });

        // Obtener totales de categorías
        fetch(`http://localhost:3030/api/cat/list`)
            .then(respuesta => respuesta.json())
            .then(data => {
                setTotalesCategorias(data.Count);
            });
    }, []);

    const totales = [
        { nombre: "Productos", cantidad: totalesProductos, color:'warning', icon:'fa-box-open'},
        { nombre: "Usuarios", cantidad: totalesUsuarios, color:'danger', icon:'fa-user'},
        { nombre: "Categorías", cantidad: totalesCategorias, color:'success', icon:'fa-layer-group'}
    ];

    return (
        <div className="row">
            {totales.map( (total, i) => {
                return <SmallCard element={total} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRow;
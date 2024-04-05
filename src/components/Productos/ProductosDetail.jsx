import React from 'react';
import { useEffect, useState } from "react";
import ProductCard from './ProductCard';

function ProductosDetail(props) {
    let id = props.match.params.id;
    const [detalle, setDetalles] = useState([]);

    useEffect(
        () => {
            fetch("http://localhost:3030/api/products/" + id)
                .then((respuesta) => (respuesta.json()))
                .then((detalle) => { console.log(detalle); setDetalles(detalle) });
        }, []
    )
    if (!detalle) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h2>Detalle del Producto</h2>
            <p>id: {id}</p>
            <p>nombre: {detalle.Nombre}</p>
            <p>descripcion: {detalle.Descripcion}</p>
            <p>precio: ${detalle.Precio}</p>
            <p>stock: {detalle.Stock}</p>
            {/* <p>categoria: {detalle.categoria.id}</p> */}
            <p>marca: {detalle.Marca}</p>
            <p>descuento: {detalle.Descuento}</p>
            <h3>Imágenes del Producto</h3>
            
        </div>
    );
}

export default ProductosDetail;

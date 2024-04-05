import React from 'react';
import { useEffect, useState } from "react";
import ProductCart from './ProductCard';

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
            <p>nombre: {detalle.nombre}</p>
            <p>descripcion: {detalle.descripcion}</p>
            <p>precio: ${detalle.precio}</p>
            <p>stock: {detalle.stock}</p>
            {/* <p>categoria: {detalle.categoria.id}</p> */}
            <p>marca: {detalle.marca}</p>
            <p>descuento: {detalle.descuento}</p>
            <h3>Imágenes del Producto</h3>
            <div className="d-flex w-100">
                {/* Recorremos el array de imágenes y mostramos cada una */}
                {Array.isArray(detalle.ImagenesProducto) && detalle.ImagenesProducto.map((imagen, index) => (
                    <ProductCart imagen={imagen} index={index} key={index}></ProductCart>
                ))}
            </div>
        </div>
    );
}

export default ProductosDetail;

import React, { useEffect, useState } from 'react';
import './Productos.css';

function ProductosDetail(props) {
    let id = props.match.params.id;
    const [detalle, setDetalles] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3030/api/products/${id}`)
            .then(respuesta => respuesta.json())
            .then(detalle => {
                console.log(detalle);
                setDetalles(detalle);
            });
    }, [id]);

    if (!detalle) {
        return <div>Loading...</div>;
    }

    return (
        
        <div className="container mt-4">
            <div className="card-header w-100 text-center">
                <h5>Detalle del Producto</h5> 
            </div>
        <div className="card product-detail col">

           
            <div className="row"> 

                <div className=" d-flex ">

                
                    <div className="d-flex flex-column">
                        
                            
                        
                        <div className="card-body text-center">
                            <h5 className="card-title">{detalle.Nombre}</h5>
                            <p className="card-text">{detalle.Marca}</p>                    
                            <p className="card-text">{detalle.Descripcion}</p>
                            <p className="card-text">${detalle.Precio}</p>
                            <p className="card-text">Stock: {detalle.Stock}</p>
                            <p className="card-text">Descuento: {detalle.Descuento}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row "> {/* Columna para las imágenes */}
                <div className="card-body d-flex"> {/* Cuerpo de la card para las imágenes */}
                    <img src={`http://localhost:3030${detalle.ImagenesProductos[0].ruta}`} alt="" width={250} />
                    <img src={`http://localhost:3030${detalle.ImagenesProductos[1].ruta}`} alt="" width={250} />
                    <img src={`http://localhost:3030${detalle.ImagenesProductos[2].ruta}`} alt="" width={250} />
                    <img src={`http://localhost:3030${detalle.ImagenesProductos[3].ruta}`} alt="" width={250} />
                </div>
            </div>
        </div>
    </div>
    );
}

export default ProductosDetail;
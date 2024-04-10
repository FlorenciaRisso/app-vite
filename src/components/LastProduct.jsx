import Categorias from "./Categorias/Categorias";
import imagenFondo from '../assets/images/redmiPadSE-1.png'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react';

function LastProduct() {

    const [ultimoProducto, setUltimoProducto] = useState(null);


    useEffect(() => {
        fetch(`http://localhost:3030/api/products/latest`)
          .then((respuesta) => respuesta.json())
          .then((producto) => {
            setUltimoProducto(producto);
          });
      }, []);

      if (!ultimoProducto) {
        return <div>Loading...</div>;
    }
    
    return (
        <div className="row">
            <Categorias/>
            {/*<!-- Last Product in DB -->*/}
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Ultimo producto creado</h5>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ maxWidth: 20 + 'rem' }} src={`http://localhost:3030${ultimoProducto.ImagenesProductos[0].ruta}`} alt=" Xiaomi padSE "/> 
                        </div>
                        <p>{ultimoProducto.Descripcion}</p>
                        <Link to={`/Productos/${ultimoProducto.ID_Producto}`} className="btn btn-danger">Ver Detalle</Link>
                    </div>
                </div>
            </div>
            {/*<!-- End content row Ultimo producto creado -->*/}
            
        </div>
    )
}
export default LastProduct;
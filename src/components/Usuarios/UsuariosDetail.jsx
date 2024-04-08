import React, { useEffect, useState } from 'react';
import '../Productos/Productos.css';

function UsuariosDetail
    (props) {
    let id = props.match.params.id;
    const [detalle, setDetalles] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3030/api/users/${id}`)
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

        <div className="container">
            <div className="card-header w-100 text-center">
                <h5>Detalle del Usuario</h5>
            </div>
            <div className="card product-detail col">

                <div className="row">
                    <div className=" d-flex ">

                        <div className="d-flex flex-column">

                            <div className="card-body text-center">
                                <h3 className="card-title">{detalle.nombre} {detalle.apellido}</h3>
                                <p className="card-text">{detalle.email}</p>
                                <p className="card-text">{detalle.nacionalidad}</p>
                                <p className="card-text">Rol: {detalle.rol}</p>
                                <p className="card-text">Direccion: {detalle.direccion}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row w-100 justify-content-center">
                    <img src={`http://localhost:3030${detalle.avatarURL}`} alt="" className="img-fluid" width={100}/>
                </div>


            </div>
        </div>
    );
}

export default UsuariosDetail
    ;
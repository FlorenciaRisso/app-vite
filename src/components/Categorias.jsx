import React, { useEffect, useState } from "react";

function Categorias() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/api/cat/list")
      .then((respuesta) => respuesta.json())
      .then((categoria) => {
        console.log(categoria)
        setCategorias(categoria.Categories);
      });
  }, []);

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">Categorias</h5>
        </div>
        <div className="card-body">
          {categorias.map((categoria) => (
            <div className="row">
              <div className="col-lg-12 mb-6">
                <div className="card bg-purple text-white shadow">
                  <div className="card-body">{categoria.nombre}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Categorias;

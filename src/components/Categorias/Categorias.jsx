import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Categorias.css";
import CardList from "./CardList"

function Categorias(props) {
  const id=(props.match && props.match.params ? props.match.params.id : null);
  const [categorias, setCategorias] = useState([]);


  useEffect(() => {
    fetch("http://localhost:3030/api/cat/list")
      .then((respuesta) => respuesta.json())
      .then((categoria) => {
        setCategorias(categoria.Categories);
      });
  }, [id]);



  return (
    <div className="card m-2 card-categoria">
      <div className="card-header ">
        <h5 className="m-0 font-weight-bold text-gray-800">Categorias</h5>
      </div>

      <div className="categories d-flex">
        {categorias.map((categoria) => (
          <Link to={`/Categorias/${categoria.id}`} className="categoria-link" key={categoria.id}>
            <div key={categoria.id} className="w-100">
              <div className="card bg-purple text-white shadow">
                <div className="card-body d-flex justify-content-between">
                  <p>{categoria.nombre}</p>
                  <p>{categoria.numProductos}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {id && <CardList categoryId={id} key={id}/>}
    </div>
  );
}

export default Categorias;
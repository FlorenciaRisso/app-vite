import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Categorias.css";
import CardList from "./CardList";

function Categorias() {
  const [categorias, setCategorias] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3030/api/cat/list")
      .then((respuesta) => respuesta.json())
      .then((categoria) => {
        console.log(categoria);
        setCategorias(categoria.Categories);
      });
  }, []);

  const handleCategoriaClick = (id) => {
    setSelectedCategoryId(id);
  };

  return (
    <div className="card m-2 card-categoria">
      <div className="card-header ">
        <h5 className="m-0 font-weight-bold text-gray-800">Categorias</h5>
      </div>

      <div className="categories d-flex">
        {categorias.map((categoria) => (
          <div key={categoria.id} className="w-100">
            <Link
              to={'/Categorias'}
              className="categoria-link"
              onClick={() => handleCategoriaClick(categoria.id)}
            >
              <div className="card bg-purple text-white shadow">
                <div className="card-body w-200">{categoria.nombre}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {selectedCategoryId && <CardList categoryId={selectedCategoryId} />}
    </div>
  );
}

export default Categorias;
import React, { useEffect, useState } from "react";

function CardList(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/api/cat/detail/" + props.categoryId)
      .then((respuesta) => respuesta.json())
      .then((categoria) => {
        setProducts(categoria.Categories[0].Productos);
      });
  }, []);

  return (
    <div className="container-cards">
      <ul className="d-flex flex-column pl-0">
        {products.map((product, index) => (
          <li className="category-cart" key={index}>
            <div className="d-flex align-items-center">
              <div>
                <img src={`http://localhost:3030${product.ImagenesProductos[0].ruta}`} width={100} />
              </div>
              <div>
                <h3><b>{product.Nombre}</b></h3>
                <p><b>Precio:</b> {product.Precio}</p>
                <p><b>Stock:</b> {product.Stock}</p>
                <p><b>Descripción:</b> {product.Descripcion}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CardList;

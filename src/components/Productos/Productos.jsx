import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./Productos.css";

function Productos() {
  const [productos, setProductos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:3030/api/products?page=${currentPage}`)
      .then((respuesta) => respuesta.json())
      .then((productos) => {
        setProductos(productos.products);
        setTotalPages(Math.ceil(productos.count / 10));
      });
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <main className="content-wrap">
        <section className="content">
          <div className="card-header w-100 text-center">
            {/* Alinea el encabezado al centro */}
            <h2 className="mt-3">Lista de productos</h2>
          </div>

          <div className="product-list">
            {productos.map((producto) => (
              <ProductCard
                imagen={producto.ImagenesProductos[0]}
                index={producto.ID_Producto}
                key={producto.ID_Producto}
                producto={producto}
              />
            ))}
          </div>
        </section>

         <div className="pagination">
            <button onClick={handlePrevPage} disabled={currentPage === 1}>
              Anterior
            </button>
            <span className="mx-4">
              {currentPage} de {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}>Siguiente</button>
          </div>
      </main>
      
    </>
  );
}

export default Productos;
